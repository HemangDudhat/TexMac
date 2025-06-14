import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Sticky top navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-grow">
        <AppRoutes />
      </main>

      {/* Footer */}
      <Footer />
    </div>
    
  );
}

export default App;
