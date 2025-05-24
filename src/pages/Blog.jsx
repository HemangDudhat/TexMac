import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "How Smart Cutting Systems Are Transforming Textile Manufacturing",
    summary: "Explore how automated fabric cutting solutions are enhancing productivity, accuracy, and scalability for Indian textile industries.",
    date: "May 10, 2025",
  },
  {
    id: 2,
    title: "Behind the Build: Engineering the LC210 Length Cutting Machine",
    summary: "A deep dive into the mechanical and digital engineering behind our flagship LC210 machine and its precise line sensor integration.",
    date: "April 24, 2025",
  },
  {
    id: 3,
    title: "Panel Cutting with Efficiency: A Guide to the PC400",
    summary: "Learn how our PC400 machine supports flexible production with stack, roll, and A-frame feeding — ideal for sheet sets and pillowcases.",
    date: "April 5, 2025",
  },
];

export default function Blog() {
  return (
    <div className="bg-white px-4 md:px-10 py-16 max-w-6xl mx-auto text-gray-800">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Techmac Automation Blog
      </motion.h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-700 text-sm mb-4">{post.summary}</p>
            <Link
              to="#"
              className="text-blue-600 hover:underline text-sm font-medium"
            >
              Read more →
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
