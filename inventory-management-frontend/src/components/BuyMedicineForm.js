import React, { useState } from 'react';

const BuyMedicineForm = ({ companies, addMedicine }) => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedMedicine, setSelectedMedicine] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
    setSelectedMedicine(''); // Reset medicine selection when company changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCompany && selectedMedicine && quantity) {
      addMedicine({
        company: selectedCompany,
        name: selectedMedicine,
        quantity: parseInt(quantity),
      });
      setQuantity('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Buy Medicine</h2>
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
      <label>
        Quantity:
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <button type="submit">Buy Medicine</button>
    </form>
  );
};

export default BuyMedicineForm;
