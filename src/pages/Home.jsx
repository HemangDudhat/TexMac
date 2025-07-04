import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="w-full h-[600px] flex items-center justify-center bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">

          {/* Logo on the left */}
          <motion.img 
            src="/texmac logo.png" 
            alt="Texmac Automation Logo"
            className="w-64 md:w-80 md:ml-8 p-3"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />

          {/* Text on the right */}
          <motion.div 
            className="md:w-1/2 mb-10 md:mb-0 md:ml-12 p-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Home Textile Solutions by Texmac Automation 
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              From cutting to hemming, we turn your ideas into high-performance textile machinery.

            </p>
            <Link to="/services">
              <Button className="text-lg px-6 py-2 rounded-xl">Explore Our Products</Button>
            </Link>
          </motion.div>
          
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-white px-4 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <p className="text-gray-600 text-lg mb-6">
            We are a team that builds easy-to-use machines for the home textile industry. From cutting to stitching, we help manufacturers work faster, save time, and improve product quality with smart automation.
          </p>
          <Link to="/about">
            <Button variant="outline">Learn More About Us</Button>
          </Link>
        </div>
      </section>

      {/* Services Snapshot */}
      <section  
           className="shadow- py-20 px-4 md:px-10 bg-gray-100 bg-cover bg-center"
        style={{
          backgroundImage: "url('/steel_metal.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          // Replace with the actual path to your provided image
        }}
        >
          <div className="max-w-6xl mx-auto text-center bg-white/70 rounded-2xl p-6">
            <h2 className="text-3xl font-semibold text-gray-800 mb-12">Our Solutions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
              {
                title: "Length Cutting Machines",
                to: "/services",
                img: "/Cross cutting/cc main photo.png", // Replace with your image paths
              },
              {
                title: "Length Hemming Machines",
                to: "/services",
                img: "/Length Hamming/1.png",
              },
              {
                title: "Customized Automation Machines",
                to: "/services",
                img: "/Length Hamming/4.png",
              },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="relative p-6 rounded-2xl shadow-md transition overflow-hidden min-h-[260px] flex flex-col justify-end"
                    style={{
                      backgroundImage: `url('${item.img}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                }}
              >
                <div className="absolute inset-0 bg-black/40 rounded-2xl" />
                <div className="relative z-10 text-left">
                  <h3 className="text-xl font-semibold mb-2 text-white drop-shadow">{item.title}</h3>
                  <p className="text-white text-sm mb-4 drop-shadow">
                    Precision-engineered machines that deliver performance and efficiency.
                  </p>
                  <Link to={item.to}>
                    <Button size="sm" className="bg-white text-gray-800 hover:bg-gray-200">View Details</Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-10">Why Choose Texmac?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Years of Expirience",
              "Industry-grade Engineering",
              "Responsive Support Team",
              "Customized Solutions",
            ].map((reason, idx) => (
              <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow-2xl transition-transform duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-3xl" 
                             style={{
                                backgroundImage: "url('/steel_metal.png')"
                             }}>
                <p className="text-white font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-white py-10 text-center px-4 md:px-10"
        style={{
          backgroundImage: "url('/black2_metal.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <h2 className="text-3xl font-bold mb-4">Need a Custom Quotation?</h2>
        <p className="text-lg mb-6">
          Reach out to us for tailored solutions that match your production needs.
        </p>
        <Link to="/contact">
          <Button className="bg-blue text-gray-800 hover:bg-blue">Contact Us</Button>
        </Link>
      </section>
    </div>
  );
}
