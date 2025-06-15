import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "../components/ui/button";

export default function Contact() {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // replace with your EmailJS service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // replace with your EmailJS template ID
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // replace with your EmailJS public key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div className="bg-white px-4 md:px-10 py-16 max-w-6xl mx-auto text-gray-800">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold">Company Info</h2>
          <p>
            <strong>Address:</strong><br />
            B-11, Shree Sai Veer Industrial Park,<br />
            Degam Road, Karwad, Vapi-396195,<br />
            Gujarat, India
          </p>
          <p><strong>Email:</strong> admin@texmacindia.com</p>
          <p><strong>Phone:</strong> +91 76009 06437 (Nitin Patel)<br />+91 80006 76777 (Sachin Patel)</p>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-gray-50 p-6 rounded-2xl shadow space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-xl font-semibold">Send Us a Message</h2>
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              name="name"
              required
              className="w-full p-2 text-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              name="mail"
              required
              type="email"
              className="w-full p-2  text-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              required
              className="w-full p-2 h-28 text-white rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tell us how we can help..."
            />
          </div>
          <Button type="submit" className="w-full mt-2">Submit</Button>
        </motion.form>
      </div>
    </div>
  );
}
