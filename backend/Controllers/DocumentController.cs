using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class DocumentController : ControllerBase
    {
        private readonly string UploadsDirectory = "Uploads"; // Mappen för att lagra uppladdade filer
        private readonly ApplicationDbContext _context;

        public DocumentController(ApplicationDbContext context)
        {
            _context = context;
            // Skapa mappen för uppladdade filer om den inte redan finns
            if (!Directory.Exists(UploadsDirectory))
            {
                Directory.CreateDirectory(UploadsDirectory);
            }
        }

        [HttpPost("upload")]
        public IActionResult Upload([FromForm] IFormFile file)
        {
            try
            {
                // Kontrollera om filen är en tillåten filtyp
                string fileExtension = Path.GetExtension(file.FileName).ToLower();
                if (fileExtension != ".jpg" && fileExtension != ".png" && fileExtension != ".pdf" && fileExtension != ".doc" && fileExtension != ".docx")
                {
                    return BadRequest("Invalid file type. Only jpg, png, pdf, doc, and docx files are allowed.");
                }

                // Skapa en unik filnamn för att undvika kollisioner
                string fileName = Guid.NewGuid().ToString() + fileExtension;

                // Bygg sökvägen till den uppladdade filen
                string filePath = Path.Combine(UploadsDirectory, fileName);

                // Spara filen på servern
                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    file.CopyTo(stream);
                }

                // Skapa en ny dokumentinstans med filinformationen och spara i databasen
                Document newDocument = new Document
                {
                    Title = file.FileName,
                    FileName = fileName,
                    FilePath = filePath,
                    FileType = fileExtension
                };

                // Lägg till dokumentet i databasen
                _context.Documents.Add(newDocument);
                _context.SaveChanges(); // Spara ändringarna i databasen

                return Ok("File uploaded successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            try
            {
                // Hämta dokument från databasen baserat på id
                var document = _context.Documents.Find(id); // Denna rad saknades tidigare

                if (document == null)
                {
                    return NotFound("Document not found.");
                }

                // Returnera dokumentet som en fil till klienten
                var memory = new MemoryStream();
                using (var stream = new FileStream(document.FilePath, FileMode.Open))
                {
                    stream.CopyTo(memory);
                }
                memory.Position = 0;
                return File(memory, "application/octet-stream", document.Title);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("uploaded")]
        public IActionResult GetUploadedDocuments()
        {
            try
            {
                // Hämta alla uppladdade dokument från databasen
                var uploadedDocuments = _context.Documents.ToList(); // Hämta alla dokument från databasen

                // Logga antalet dokument som hämtas
                Console.WriteLine($"Documents fetched: {uploadedDocuments.Count}");

                return Ok(uploadedDocuments);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("download/{id}")]
        public IActionResult DownloadDocument(int id)
        {
            try
            {
                // Hämta dokument från databasen baserat på id
                var document = _context.Documents.Find(id);

                if (document == null)
                {
                    return NotFound("Document not found.");
                }

                // Returnera dokumentet som en fil till klienten
                var memory = new MemoryStream();
                using (var stream = new FileStream(document.FilePath, FileMode.Open))
                {
                    stream.CopyTo(memory);
                }
                memory.Position = 0;
                return File(memory, "application/octet-stream", document.Title);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("delete/{fileName}")]
        public IActionResult DeleteDocument(string fileName)
        {
            try
            {
                // Konstruera sökvägen till dokumentet som ska tas bort
                string filePath = Path.Combine(UploadsDirectory, fileName);

                // Kontrollera om dokumentet existerar
                if (!System.IO.File.Exists(filePath))
                {
                    return NotFound("Document not found.");
                }

                // Ta bort dokumentet från lagringen
                System.IO.File.Delete(filePath);

                // Ta bort dokumentet från databasen
                var document = _context.Documents.SingleOrDefault(d => d.FileName == fileName);
                if (document != null)
                {
                    _context.Documents.Remove(document);
                    _context.SaveChanges();
                }

                return Ok("Document deleted successfully.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
