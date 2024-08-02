import React, { useState } from 'react';
import './App.css';
import InventoryList from './components/InventoryList';
import BuyMedicineForm from './components/BuyMedicineForm';
import SellMedicineForm from './components/SellMedicineForm';
import AddMedicineForm from './components/AddMedicineForm';

const App = () => {
  const [inventory, setInventory] = useState([]);
  const [companies, setCompanies] = useState({
    'Company A': ['Medicine 1', 'Medicine 2'],
    'Company B': ['Medicine 3', 'Medicine 4'],
  });

  const addMedicine = (medicine) => {
    setInventory((prevInventory) => {
      const existingMedicine = prevInventory.find(
        (item) => item.name === medicine.name && item.company === medicine.company
      );
      if (existingMedicine) {
        return prevInventory.map((item) =>
          item.name === medicine.name && item.company === medicine.company
            ? { ...item, quantity: item.quantity + medicine.quantity }
            : item
        );
      } else {
        return [...prevInventory, medicine];
      }
    });
  };

  const sellMedicine = (medicine) => {
    setInventory((prevInventory) => {
      return prevInventory.map((item) =>
        item.name === medicine.name && item.company === medicine.company
          ? { ...item, quantity: item.quantity - medicine.quantity }
          : item
      ).filter(item => item.quantity > 0);
    });
  };

  const addNewMedicine = (company, medicine) => {
    setCompanies((prevCompanies) => {
      const updatedCompanies = { ...prevCompanies };
      if (!updatedCompanies[company]) {
        updatedCompanies[company] = [];
      }
      if (!updatedCompanies[company].includes(medicine)) {
        updatedCompanies[company].push(medicine);
      }
      return updatedCompanies;
    });
  };

  return (
    <div className="app-container">
      <h1>Inventory Management</h1>
      <div className="content-container">
        <div className="inventory-section">
          <InventoryList inventory={inventory} />
        </div>
        <div className="forms-section">
          <BuyMedicineForm companies={companies} addMedicine={addMedicine} />
          <SellMedicineForm companies={companies} sellMedicine={sellMedicine} />
          <AddMedicineForm companies={companies} addNewMedicine={addNewMedicine} />
        </div>
      </div>
    </div>
  );
};

export default App;
