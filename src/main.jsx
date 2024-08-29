import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Dashboard from './Pages/Dashboard.jsx'
import Transactions from './Pages/Transactions.jsx'
import Support from './Pages/Support.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  
  {
    path: "transaction",
    element: <Transactions />,
  },
  {
    path: "support",
    element: <Support />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
