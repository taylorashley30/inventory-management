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
            style={{
              width: '100px', // Fixed width for the quantity input field
              padding: '10px',
              border: `1px solid ${error ? 'red' : '#ced4da'}`,
              borderRadius: '4px',
              outline: 'none',
              boxSizing: 'border-box', // Ensure padding and border are included in width
            }}
          />
          {error && (
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '105%', // Adjust to ensure no overlap
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(255, 0, 0, 0.8)',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '4px',
                fontSize: '12px',
                whiteSpace: 'nowrap',
                zIndex: 1,
                boxSizing: 'border-box',
                // Arrow styling
                ':before': {
                  content: "''",
                  position: 'absolute',
                  top: '50%',
                  left: '-5px',
                  borderWidth: '5px',
                  borderStyle: 'solid',
                  borderColor: 'rgba(255, 0, 0, 0.8) transparent transparent transparent',
                },
              }}
            >
              Please enter a valid number
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
          fontSize: '16px',
        }}
      >
        Sell Medicine
      </button>
    </form>
  );
};

export default SellMedicineForm;
