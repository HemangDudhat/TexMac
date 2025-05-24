import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const machines = [
  {
    name: "LC210 - Length Cutting Machine",
    specs: [
      "Working width: 30 cm to 210 cm",
      "Speed: 5–30 m/min",
      "Cutters: 4 movable heads with PLC-driven motors",
      "Sensors: Color line sensors for precision cutting",
    ],
    features: [
      "Robust structure with pneumatic control",
      "Auto fabric feeding & pulling",
      "User-friendly digital HMI",
      "Precise output piling system",
    ],
  },
  {
    name: "PC400 - Panel Cutting Machine",
    specs: [
      "Working width: up to 400 cm",
      "Productivity: 15,000–20,000 m/day",
      "Feeding: Stack / A-frame / roll options",
      "Cutting: Longitudinal + Cross Cutting",
    ],
    features: [
      "Low-tension fabric compensator",
      "Air suction stacking table",
      "Touchscreen operation & live data",
      "Expandable feeding assemblies",
    ],
  },
];

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

      <div className="grid gap-10 md:grid-cols-2">
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

            <Link to="/contact">
              <Button variant="default" className="mt-2">Request a Quote</Button>
            </Link>
          </motion.div>
        ))}
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
