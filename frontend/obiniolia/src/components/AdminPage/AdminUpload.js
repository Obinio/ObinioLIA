import React, { useState } from 'react';
import './AdminUpload.css'; // Se till att denna import finns

function AdminUpload() {
  const [file, setFile] = useState(null);
  const [confirmReplace, setConfirmReplace] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('http://localhost:5057/api/Document/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => {
        if (response.ok) {
          console.log('File uploaded successfully');
          // Lägg till eventuell logik här efter att filen har laddats upp
        } else {
          console.error('Failed to upload file');
        }
      })
      .catch(error => console.error('Error:', error));
    }
  };

  const handleUploadConfirm = () => {
    setConfirmReplace(false);
    handleUpload();
  };

  const handleConfirmReplace = () => {
    setConfirmReplace(true);
  };

  return (
    <div className="upload-container"> {/* Uppdatera klassen här */}
      <h1>Upload Documents</h1>
      <input type="file" accept=".jpg,.png,.pdf,.doc,.docx" onChange={handleFileChange} />
      {confirmReplace ? (
        <div>
          <p>File already exists. Do you want to replace the current file?</p>
          <button onClick={handleUploadConfirm}>Yes</button>
          <button onClick={() => setConfirmReplace(false)}>No</button>
        </div>
      ) : (
        <button onClick={handleUpload}>Upload</button>
      )}
    </div>
  );
}

export default AdminUpload;
