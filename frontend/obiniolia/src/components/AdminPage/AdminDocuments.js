import React, { useState, useEffect } from 'react';
import './AdminDocuments.css';

function AdminDocuments() {
  const [uploadedDocuments, setUploadedDocuments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [documentToDelete, setDocumentToDelete] = useState(null);

  useEffect(() => {
    fetchUploadedDocuments();
  }, []);

  const fetchUploadedDocuments = async () => {
    try {
      const response = await fetch('http://localhost:5057/api/Document/uploaded');
      if (!response.ok) {
        throw new Error('Failed to fetch documents');
      }
      const data = await response.json();
      console.log('Fetched documents:', data);
      setUploadedDocuments(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching documents:', error);
      setIsLoading(false);
    }
  };

  const handleDeleteClick = (document) => {
    setDocumentToDelete(document);
    setShowModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (documentToDelete) {
      try {
        const response = await fetch(`http://localhost:5057/api/Document/delete/${documentToDelete.fileName}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error('Failed to delete document');
        }
        // Uppdatera listan med dokument efter borttagning
        const updatedDocuments = uploadedDocuments.filter(doc => doc.fileName !== documentToDelete.fileName);
        setUploadedDocuments(updatedDocuments);
        setShowModal(false);
        setDocumentToDelete(null);
      } catch (error) {
        console.error('Error deleting document:', error);
        setShowModal(false);
        setDocumentToDelete(null);
      }
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    setDocumentToDelete(null);
  };

  if (isLoading) return <p>Loading...</p>;
  if (uploadedDocuments.length === 0) return <p>No documents found.</p>;

  return (
    <div className="admin-documents">
      <h1>Uploaded Documents</h1>
      <ul>
        {uploadedDocuments.map(document => (
          <li key={document.id}>
            <a href={`http://localhost:5057/api/Document/download/${document.id}`} target="_blank" rel="noopener noreferrer">
              {document.title}
            </a>
            <button onClick={() => handleDeleteClick(document)}>Delete</button>
          </li>
        ))}
      </ul>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Confirm Delete</h2>
            <div className="modal-content">
              <p>Are you sure you want to delete this document?</p>
            </div>
            <div className="modal-actions">
              <button onClick={handleModalClose}>No</button>
              <button onClick={handleDeleteConfirm}>Yes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminDocuments;
