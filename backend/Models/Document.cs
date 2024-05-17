namespace backend.Models
{
    public class Document
    {
        public int Id { get; set; }
        public string? Title { get; set; } // Titeln på dokumentet
        public string? FileName { get; set; } // Namnet på filen
        public string? FilePath { get; set; } // Sökvägen till filen på servern
        public string? FileType { get; set; } // Filtypen (t.ex. jpg, png, pdf, doc, docx)
        // Du kan lägga till fler egenskaper här, t.ex. datum, författare, etc.
    }
}
