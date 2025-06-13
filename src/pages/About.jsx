import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="bg-white text-gray-800 px-4 md:px-10 py-16 max-w-6xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Texmac Automation
      </motion.h1>

      <motion.p
        className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        We are a forward-thinking manufacturing company specializing in high-precision fabric cutting machines. Our solutions serve industries across India, providing automation tools that are robust, efficient, and intelligently designed.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        {/* Mission */}
        <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-700">
            To empower manufacturers with reliable, innovative, and cost-effective automation machinery that enhances productivity and precision across every application.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-700">
            To be the leading name in industrial automation for fabric cutting and material handling, known for quality engineering and client satisfaction.
          </p>
        </motion.div>
      </div>

      {/* Core Values */}
      <motion.div
        className="mt-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Core Values</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {["Integrity", "Innovation", "Customer Focus", "Reliability"].map((value, index) => (
            <li
              key={index}
              className="bg-white border border-gray-200 p-4 rounded-xl shadow-sm"
            >
              <span className="text-lg font-medium">{value}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
