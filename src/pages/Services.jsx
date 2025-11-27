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
            
            <h2 className="text-3xl font-bold mb-4">Length Hemming Machine - LH210</h2>
            <h3 className="text-xl font-semibold mb-2">Key Specifications:</h3>
            <ul className="list-disc list-inside mb-4">
              <li>Working width: 30 cm to 200 cm</li>
              <li>Speed: 5–14 m/min</li>
              <li>Suitable material –   Terry and Non-Terry Fabric </li>
              <li>Sensors: Pile Sensor and Photocell Sensor</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2">Salient Features:</h3>
            <ul className="list-disc list-inside mb-6">
              <li>Precision and Alignment</li>
              <li>Integrated Cutting & Folding</li>
              <li>User-friendly digital Human-Machine Interface(HMI)</li>
              <li>Customization and Versatility</li>
              <li>Integrated Cutting & Folding</li>
              <li>Efficient Output Management</li>
              <li>Advanced Control System</li>
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
              poster="/Length Hamming/2.png"
              muted="true"
            >
              <source src="/assets for services/video/length hamming.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>


                                       {/* Image Preview Section */}
              <div className="space-y-4 mt-6">
            <div className="w-full max-w-md flex flex-wrap gap-4 justify-center">
              <img
                src="/Length Hamming/1.png"
                alt="Preview 1"
                className="w-24 h-24 object-cover rounded-lg shadow cursor-pointer"
                onClick={() => handleOpen("/Length Hamming/1.png")}
              />
              <img
                src="/Length Hamming/2.png"
                alt="Preview 2"
                className="w-24 h-24 object-cover rounded-lg shadow cursor-pointer"
                onClick={() => handleOpen("/Length Hamming/2.png")}
              />
              <img
                src="/Length Hamming/3.png"
                alt="Preview 2"
                className="w-24 h-24 object-cover rounded-lg shadow cursor-pointer"
                onClick={() => handleOpen("/Length Hamming/3.png")}
              />
              <img
                src="/Length Hamming/4.png"
                alt="Preview 2"
                className="w-24 h-24 object-cover rounded-lg shadow cursor-pointer"
                onClick={() => handleOpen("/Length Hamming/4.png")}
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
          <h2 className="text-3xl font-bold mb-4">Cross Cutting Mahine - CC210</h2>
          <h3 className="text-xl font-semibold mb-2">Key Specifications:</h3>
          <ul className="list-disc list-inside mb-4">
            <li>Working width: up to 110 cm</li>
            <li>Roller Face: 115 cm</li>
            <li>Output Speed: 25m/min</li>
            <li>Semi Automatic</li>
          </ul>
          <h3 className="text-xl font-semibold mb-2">Salient Features:</h3>
          <ul className="list-disc list-inside mb-6">
            <li>Automated Fabric Handling</li>
            <li>Robust Construction</li>
            <li>Automated Fabric Handling</li>
            <li>Efficient Output Piling</li>
            <li>User-Friendly Interface</li>
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
            poster="/Cross cutting/cc main photo.png"
            muted="true"
          >
            <source src="/assets for services/video/cc.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        
                             {/* Image Preview Section */}
             <div className="space-y-4 mt-6">
              <div className="w-full max-w-md flex flex-wrap gap-4 justify-center">
                <img
                  src="/Cross cutting/cc main photo.png"
                  alt="Preview 1"
                  className="w-24 h-24 object-cover rounded-lg shadow cursor-pointer"
                  onClick={() => handleOpen("/Cross cutting/cc main photo.png")}
                />
                <img
                  src="/Cross cutting/cc physical photo.png"
                  alt="Preview 2"
                  className="w-24 h-24 object-cover rounded-lg shadow cursor-pointer"
                  onClick={() => handleOpen("/Cross cutting/cc physical photo.png")}
                />
                <img
                  src="/Cross cutting/cc transmission.png"
                  alt="Preview 2"
                  className="w-24 h-24 object-cover rounded-lg shadow cursor-pointer"
                  onClick={() => handleOpen("/Cross cutting/cc transmission.png")}
                />                
                <img
                  src="/Cross cutting/circuit.png"
                  alt="Preview 2"
                  className="w-24 h-24 object-cover rounded-lg shadow cursor-pointer"
                  onClick={() => handleOpen("/Cross cutting/circuit.png")}
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
