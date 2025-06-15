import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes";


import './styles/globals.css'; // Tailwind global styles
import './index.css';           // Optional: additional global styles if any

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
            <Navbar />

            {/* Page content */}
            <main className="flex-grow">
              <AppRoutes />
            </main>

            <Footer />
       </div>
    </BrowserRouter>
  </StrictMode>
);
