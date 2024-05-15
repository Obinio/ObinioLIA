import React, { useState } from 'react';
import './AdminDocuments.css';

const documentTemplate = {
  title: "Anställningsavtal",
  fields: [
    { label: "Namn", type: "text", value: "" },
    { label: "Efternamn", type: "text", value: "" },
    { label: "Gatuadress", type: "text", value: "" },
    { label: "Email Adress", type: "email", value: "" },
    { label: "Telefonnummer", type: "tel", value: "" },
    { label: "Datum", type: "date", value: "" },
    { label: "Land", type: "text", value: "" },
    { label: "Ort", type: "text", value: "" },
    { label: "Uppsägningstid", type: "text", value: "" }
  ]
};

function AdminDocuments() {
  const [formData, setFormData] = useState(
    documentTemplate.fields.reduce((acc, field) => ({
      ...acc,
      [field.label]: field.value
    }), {})
  );

  const handleChange = (label, value) => {
    setFormData({ ...formData, [label]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data:", formData);
    // Skicka formData till servern för att spara eller behandla
  };

  return (
    <div className="admin-documents">
      <h1>{documentTemplate.title}</h1>
      <form onSubmit={handleSubmit}>
        {documentTemplate.fields.map(field => (
          <div key={field.label} className="form-field">
            <label>
              {field.label}:
              <input
                type={field.type}
                value={formData[field.label]}
                onChange={(e) => handleChange(field.label, e.target.value)}
                required
              />
            </label>
          </div>
        ))}
        <button type="submit">Signera</button>
      </form>
    </div>
  );
}

export default AdminDocuments;
