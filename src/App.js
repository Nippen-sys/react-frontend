// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [customer, setCustomer] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/customer');
        setCustomer(response.data);
      } catch (error) {
        setError('Error fetching customer data');
        console.error('Error fetching data:', error);
      }
    };

    fetchCustomerData();
  }, []);

  return (
    <div className="App">
      <h1>Customer Data</h1>
      {error && <p>{error}</p>}
      {customer ? (
        <div>
          <p><strong>CustID:</strong> {customer.CustID}</p>
          <p><strong>CustName:</strong> {customer.CustName}</p>
          <p><strong>CustEmail:</strong> {customer.CustEmail}</p>
          <p><strong>AccessLvl:</strong> {customer.AccessLvl}</p>
          <p><strong>SubStatus:</strong> {customer.SubStatus}</p>
          <p><strong>SubPlan:</strong> {customer.SubPlan}</p>
          <p><strong>SubDur:</strong> {customer.SubDur}</p>
          <p><strong>AccAccess:</strong> {customer.AccAccess}</p>
          <p><strong>IsMaster:</strong> {customer.IsMaster}</p>
          <p><strong>TotalUsers:</strong> {customer.TotalUsers}</p>
          <p><strong>ActiveUsers:</strong> {customer.ActiveUsers}</p>
          <p><strong>ActiveUserNames:</strong> {customer.ActiveUserNames}</p>
          <p><strong>Phone:</strong> {customer.Phone}</p>
          <p><strong>Address:</strong> {customer.Address}</p>
          <p><strong>CreatedOn:</strong> {customer.CreatedOn}</p>
          <p><strong>LastLogin:</strong> {customer.LastLogin}</p>
          <p><strong>PayStatus:</strong> {customer.PayStatus}</p>
          <p><strong>BillCycle:</strong> {customer.BillCycle}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
