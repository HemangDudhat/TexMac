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
        At Texmac Automation, we specialize in designing and manufacturing cutting-edge automation systems for the home textile sector. Whether you're producing towels, bedsheets, or curtains, our solutions are engineered to boost efficiency, precision, and quality in every production cycle. From customized machines to complete automation lines—we bring your concepts to life.      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
        {/* Mission */}
        <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
           whileHover={{ scale: 1.05, transition: { duration: 0.15, delay: 0.05 } }}
        >
          
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="text-gray-700">
            To make textile manufacturing easier and faster by providing smart, easy-to-use machines that save time, reduce effort, and improve product quality.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="bg-gray-100 p-6 rounded-2xl shadow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.15, delay: 0.05 } }} 
        >
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="text-gray-700">
            To help textile businesses grow by offering reliable automation solutions and becoming a trusted name in the industry, both in India and beyond.
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
              <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-3xl" 
                    style={{
                        backgroundImage: "url('/steel_metal.png')"
                           }}>         
                <p className="text-white font-medium">{value}</p>
              </div>
          ))}
        </ul>
      </motion.div>
    </div>
  );
}
