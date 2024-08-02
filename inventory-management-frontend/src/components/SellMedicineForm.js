import React, { useState } from 'react';

const SellMedicineForm = ({ companies, sellMedicine }) => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [quantity, setQuantity] = useState('');
  const [error, setError] = useState('');

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
    setSelectedMedicine(''); // Reset medicine selection when company changes
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    setQuantity(value);
    // Check if value is a number
    if (value === '' || /^[0-9]*$/.test(value)) {
      setError(''); // Clear error if valid
    } else {
      setError('Please enter a valid number');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCompany && selectedMedicine && quantity && !error) {
      sellMedicine({
        company: selectedCompany,
        name: selectedMedicine,
        quantity: parseInt(quantity),
      });
      setQuantity('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sell Medicine</h2>
      <label>
        Company:
        <select value={selectedCompany} onChange={handleCompanyChange}>
          <option value="">Select Company</option>
          {Object.keys(companies).map((company) => (
            <option key={company} value={company}>
              {company}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Medicine:
        <select
          value={selectedMedicine}
          onChange={(e) => setSelectedMedicine(e.target.value)}
          disabled={!selectedCompany}
        >
          <option value="">Select Medicine</option>
          {selectedCompany &&
            companies[selectedCompany].map((medicine) => (
              <option key={medicine} value={medicine}>
                {medicine}
              </option>
            ))}
        </select>
      </label>
      <br />
      <label>
        Quantity:
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <input
            type="text"
            value={quantity}
            onChange={handleQuantityChange}
            style={{ paddingRight: '30px' }}
          />
          {error && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
                backgroundColor: 'red',
                color: 'white',
                padding: '2px 5px',
                borderRadius: '3px',
                fontSize: '12px',
              }}
            >
              {error}
            </div>
          )}
        </div>
      </label>
      <br />
      <button
        type="submit"
        disabled={!!error}
        style={{
          backgroundColor: !!error ? '#ccc' : '#007bff',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: !!error ? 'not-allowed' : 'pointer',
        }}
      >
        Sell Medicine
      </button>
    </form>
  );
};

export default SellMedicineForm;
