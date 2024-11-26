import React from 'react';

function VehicleSelection() {
  const vehicles = ['Bike', 'Car'];

  return (
    <div>
      <h3>Select a Vehicle</h3>
      <ul>
        {vehicles.map((vehicle, index) => (
          <li key={index}>{vehicle}</li>
        ))}
      </ul>
    </div>
  );
}

export default VehicleSelection;
