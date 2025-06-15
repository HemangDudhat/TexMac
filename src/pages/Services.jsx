import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Services() {

  const [open, setOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const handleOpen = (src) => {
    setImgSrc(src);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setImgSrc("");
  };


    return (
    
    <div className="bg-white px-4 md:px-10 py-16 max-w-7xl mx-auto text-gray-800">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Products & Services
      </motion.h1>

<div className="space-y-8">

 {/* LC210 - Length Cutting Machine Specifications */}

      <motion.div
        className="bg-gray-100 p-6 rounded-2xl shadow-md"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{duration: 0.5 }}
      >
        <div className="bg-gray-100 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
                                          
                                           {/* TEXT */}
          <div className="flex-1">
            
            <h2 className="text-3xl font-bold mb-4">LC210 - Length Cutting Machine</h2>
            <h3 className="text-xl font-semibold mb-2">Key Specifications:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Working width: 30 cm to 210 cm</li>
              <li>Speed: 5–30 m/min</li>
              <li>Cutters: 4 movable heads with PLC-driven motors</li>
              <li>Sensors: Color line sensors for precision cutting</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Salient Features:</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Robust structure with pneumatic control</li>
              <li>Auto fabric feeding &amp; pulling</li>
              <li>User-friendly digital HMI</li>
              <li>Precise output piling system</li>
            </ul>
            <Link to="/contact">
                <Button>Request a Quote</Button>
            </Link>
          </div>
     

                                               {/* Video */}
  
          <div className="flex-1 flex-col items-center">
            <video
              className="rounded-xl w-full max-w-md shadow-lg"
              controls
              poster="/path/to/thumbnail.jpg"
            >
              <source src="/assets for services/preview 1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>


                                       {/* Image Preview Section */}
              <div className="space-y-4 mt-6">
            <div className="w-full max-w-md flex flex-wrap gap-4 justify-center">
              <img
                src="/assets for services/1.jpg"
                alt="Preview 1"
                className="w-24 h-24 object-cover rounded-lg shadow cursor-pointer"
                onClick={() => handleOpen("/1.jpg")}
              />
              <img
                src="/assets for services/2.jpg"
                alt="Preview 2"
                className="w-24 h-24 object-cover rounded-lg shadow cursor-pointer"
                onClick={() => handleOpen("/2.jpg")}
              />
              {/* Add more images as needed */}
            </div>
          </div>

          {/* Modal for full-size preview */}
          {open && (
            <div
              className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50"
              onClick={handleClose}
            >
              <img
                  src={imgSrc}
                  alt="Full Preview"
                  className="max-w-xl max-h-[80vh] rounded-lg shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                />
                </div>
          )}
          </div>
        </div>

     </motion.div>

{/* PC400 - Panel Cutting Machine Specifications */}

     <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow-md"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{duration: 0.5 }}
      >

        <div className="bg-gray-100 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
                                           
                                            {/* TEXT */}
        
          <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">PC400 - Panel Cutting Machine</h2>
          <h3 className="text-xl font-semibold mb-2">Key Specifications:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Working width: up to 400 cm</li>
            <li>Productivity: 15,000–20,000 m/day</li>
            <li>Feeding: Stack / A-frame / roll options</li>
            <li>Cutting: Longitudinal + Cross Cutting</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Salient Features:</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Low-tension fabric compensator</li>
            <li>Air suction stacking table</li>
            <li>Touchscreen operation &amp; live data</li>
            <li>Expandable feeding assemblies</li>
          </ul>
            <Link to="/contact">
                <Button>Request a Quote</Button>
            </Link>
        </div>
     

                                                    {/* VIDEO */}
  
        <div className="flex-1 flex-col items-center">
          <video
            className="rounded-xl w-full max-w-md shadow-lg"
            controls
            poster="/path/to/thumbnail.jpg"
          >
            <source src="/assets for services/preview 2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        
                             {/* Image Preview Section */}
             <div className="space-y-4 mt-6">
              <div className="w-full max-w-md flex flex-wrap gap-4 justify-center">
                <img
                  src="/assets for services/5.jpg"
                  alt="Preview 1"
                  className="w-24 h-24 object-cover rounded-lg shadow cursor-pointer"
                  onClick={() => handleOpen("/5.jpg")}
                />
                <img
                  src="/assets for services/6.jpg"
                  alt="Preview 2"
                  className="w-24 h-24 object-cover rounded-lg shadow cursor-pointer"
                  onClick={() => handleOpen("/6.jpg")}
                />
                {/* Add more images as needed */}
              </div>
            </div>

            {/* Modal for full-size preview */}
            {open && (
              <div
                className="fixed inset-0 bg-black bg-opacity-100 flex items-center justify-center z-50"
                onClick={handleClose}
              >
                <img
                  src={imgSrc}
                  alt="Full Preview"
                  className="max-w-xl max-h-[80vh] rounded-lg shadow-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            )}


          </div>
      </div>
      
    </motion.div>
</div>


      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-xl font-semibold mb-2">Need Custom Automation?</h3>
        <p className="text-gray-600 mb-4">
          We offer tailored solutions based on your production requirements.
        </p>
        <Link to="/contact">
          <Button>Contact Our Engineers</Button>
        </Link>
      </motion.div>
    </div>
  );
}
