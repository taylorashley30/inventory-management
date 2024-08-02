import React from 'react';

const InventoryList = ({ inventory }) => {
  const groupedByCompany = inventory.reduce((acc, item) => {
    if (!acc[item.company]) {
      acc[item.company] = [];
    }
    acc[item.company].push(item);
    return acc;
  }, {});

  return (
    <div>
      <h2>Available Stock</h2>
      {Object.keys(groupedByCompany).map((company) => (
        <div key={company}>
          <h3>{company}</h3>
          <ul>
            {groupedByCompany[company].map((item) => (
              <li key={item.name}>
                {item.name}: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default InventoryList;
