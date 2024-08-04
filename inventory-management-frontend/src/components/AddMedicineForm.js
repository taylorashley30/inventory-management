import React, { useState } from 'react';

const AddMedicineForm = ({ companies, addNewMedicine }) => {
  const [company, setCompany] = useState('');
  const [medicine, setMedicine] = useState('');
  const [hsn, setHsn] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (company && medicine && hsn.length <= 6) {
      addNewMedicine(company, medicine, hsn);
      setCompany('');
      setMedicine('');
      setHsn('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Medicine</h2>
      <label>
        Company:
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </label>
      <label>
        Medicine:
        <input
          type="text"
          value={medicine}
          onChange={(e) => setMedicine(e.target.value)}
        />
      </label>
      <label>
        HSN:
        <input
          type="text"
          value={hsn}
          onChange={(e) => setHsn(e.target.value.toUpperCase())} // Optional: convert to uppercase
          maxLength={6}
          placeholder=" Enter 6 digits code"
        />
      </label>
      <button
        type="submit"
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Add Medicine
      </button>
    </form>
  );
};

export default AddMedicineForm;
