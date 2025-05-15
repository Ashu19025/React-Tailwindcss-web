import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Component/Header.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Contact from './Component/Contact.jsx'
import About from './Component/About.jsx'
import Footer from './Component/Footer.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route path="" element={<App />} />
      <Route path="header" element={<Header />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="About" element={<About />} />
      <Route path="Footer" element={<Footer/>} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
