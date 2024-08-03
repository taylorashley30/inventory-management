import React, { useState } from 'react';

const AddMedicineForm = ({ companies, addNewMedicine }) => {
  const [company, setCompany] = useState('');
  const [medicine, setMedicine] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (company && medicine) {
      addNewMedicine(company, medicine);
      setCompany('');
      setMedicine('');
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
      <button
        type="submit"
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Add Medicine
      </button>
    </form>
  );
};

export default AddMedicineForm;
