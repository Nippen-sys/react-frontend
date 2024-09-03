import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [customers, setCustomers] = useState([]);
  const [error, setError] = useState(null);
  const [isConnected, setIsConnected] = useState(false); // State to track connection to Express server

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/customers'); // Use localhost for development
        setCustomers(response.data);
        setIsConnected(true); // Set connection status to true
      } catch (error) {
        setError('Error fetching customer data');
        setIsConnected(false); // Set connection status to false in case of error
        console.error('Error fetching data:', error);
      }
    };

    fetchCustomerData();
  }, []);

  return (
    <div className="App">
      <h1>Customer Data</h1>
      {isConnected ? (
        <p style={{ color: 'green' }}>Connected to Express server</p>
      ) : (
        <p style={{ color: 'red' }}>Not connected to Express server</p>
      )}
      {error && <p>{error}</p>}
      {customers.length > 0 ? (
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>CustID</th>
              <th>CustName</th>
              <th>CustEmail</th>
              <th>AccessLvl</th>
              <th>SubStatus</th>
              <th>SubPlan</th>
              <th>SubDur</th>
              <th>AccAccess</th>
              <th>IsMaster</th>
              <th>TotalUsers</th>
              <th>ActiveUsers</th>
              <th>ActiveUserNames</th>
              <th>Phone</th>
              <th>Address</th>
              <th>CreatedOn</th>
              <th>LastLogin</th>
              <th>PayStatus</th>
              <th>BillCycle</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.CustID}</td>
                <td>{customer.CustName}</td>
                <td>{customer.CustEmail}</td>
                <td>{customer.AccessLvl}</td>
                <td>{customer.SubStatus}</td>
                <td>{customer.SubPlan}</td>
                <td>{customer.SubDur}</td>
                <td>{customer.AccAccess}</td>
                <td>{customer.IsMaster}</td>
                <td>{customer.TotalUsers}</td>
                <td>{customer.ActiveUsers}</td>
                <td>{customer.ActiveUserNames}</td>
                <td>{customer.Phone}</td>
                <td>{customer.Address}</td>
                <td>{customer.CreatedOn}</td>
                <td>{customer.LastLogin}</td>
                <td>{customer.PayStatus}</td>
                <td>{customer.BillCycle}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
