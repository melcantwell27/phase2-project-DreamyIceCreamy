import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./components/App"
import './index.css';
import routes from "./routes"

import {RouterProvider, createBrowserRouter} from "react-router-dom"

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
  <App />
 </RouterProvider>
);
