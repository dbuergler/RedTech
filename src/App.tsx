import React, { useEffect, useState } from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import Create from './components/Create';






function App() {
  const [data, setData] = useState([])
  const columns: GridColDef[] = [
    {field: 'orderId', headerName: "Order ID"},
    {field: 'createdDate', headerName: "Created Date"},
    {field: 'createdByUserName', headerName: "Created By"},
    {field: 'orderType', headerName: "Order Type"},
    {field: 'customerName', headerName: "Customer"},
  ]

  useEffect(() => {
    fetch("https://red-candidate-web.azurewebsites.net/api/Orders", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "ApiKey": "b7b77702-b4ec-4960-b3f7-7d40e44cf5f4"
      }
    })
      .then(resp => resp.json())
      .then(resp => {
        setData(resp)
      })
  }, [])

  return (
    <div>
      <Navbar/>
      <Create/>
        <div  style={{ height: 400, width: '100%' }}>
            <DataGrid columns={columns} rows={data} getRowId={(row:any) => row.orderId} checkboxSelection/>
        </div>
    </div>
  );
}

export default App;

