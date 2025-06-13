import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Services() {
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
        <div className="space-y-8 bg-gray-100 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
                                          
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
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
              Request a Quote
            </button>
          </div>
     

                                               {/* Video */}
  
          <div className="flex-1 flex justify-center">
            <video
              className="rounded-xl w-full max-w-md shadow-lg"
              controls
              poster="/path/to/thumbnail.jpg"
            >
              <source src="/sample.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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

        <div className="bg-gray-100 rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center">
                                           
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
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition">
            Request a Quote
          </button>
        </div>
     

                                                    {/* VIDEO */}
  
        <div className="flex-1 flex justify-center">
          <video
            className="rounded-xl w-full max-w-md shadow-lg"
            controls
            poster="/path/to/thumbnail.jpg"
          >
            <source src="/sample.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

    </motion.div>
</div>


{/* 
        <div className="grid gap-10 md:grid-cols-1 max-w-7xl mx-auto">
        {machines.map((machine, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4">{machine.name}</h2>
           
            <h3 className="text-lg font-medium text-gray-700 mb-2">Key Specifications:</h3>
            <ul className="list-disc ml-6 mb-4 text-gray-600 text-sm">
              {machine.specs.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>

            <h3 className="text-lg font-medium text-gray-700 mb-2">Salient Features:</h3>
            <ul className="list-disc ml-6 mb-4 text-gray-600 text-sm">
              {machine.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
              
             <video
              className="rounded-xl w-full max-w-md shadow-lg justify-end mx-auto"
              controls
              poster="/path/to/thumbnail.jpg"
            >
              <source src="/path/to/product-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>


            <Link to="/contact">
              <Button variant="default" className="mt-2">Request a Quote</Button>
            </Link>
          </motion.div>
        ))}
      </div>
 */}



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
