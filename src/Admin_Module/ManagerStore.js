import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../Styles/ManageStore.css";
import Navigation from "../Compoment/Navigation";
function ManagerStore() {
  const [stores, setStores] = useState([]);
  const [StoreState, setStoreState]=useState(false);
  const getData=()=>{
    axios.get("http://localhost:5000/api/routes/getStore")
      .then(response => {
        setStores(response.data);
      })
      .catch(error => {
        console.error('Error fetching stores:', error);
      });
  }
  useEffect(() => {
    getData()  }, []);
  useEffect(() => {
    getData()  }, [StoreState]);

  const handleUpdateStatus = (storeId) => {
    console.log(storeId);
    // Implement your status update logic here
    axios.post("http://localhost:5000/api/routes/updateStatus", { _id: storeId })
    .then(response => {
      console.log("Store status updated successfully");
      // You might want to update the local state or fetch the updated store data again
    })
    .catch(error => {
      console.error("Error updating store status:", error);
    });
    setStoreState(true);
  };

  return (
    <><Navigation />
    <div className="manager-store-container">
      <h2>Manage Stores</h2>
      <table>
        <thead>
          <tr>
            <th>Store Name</th>
            <th>Owner Name</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {stores.map(store => (
            <tr key={store._id}>
              <td>{store.Store_name}</td>
              <td>{store.Owner_name}</td>
              <td>{store.Status ? 'Active' : 'Inactive'}</td>
              <td>
                <button onClick={() => handleUpdateStatus(store._id)}>
                  Update Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}

export default ManagerStore;
