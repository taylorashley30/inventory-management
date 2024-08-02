import React, { useState } from 'react';

const SellMedicineForm = ({ companies, sellMedicine }) => {
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
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Sell Medicine</button>
    </form>
  );
};

export default SellMedicineForm;
