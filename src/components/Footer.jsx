import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2 px-4"
    style={{
          backgroundImage: "url('/black2_metal.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Company Info
        <div>
          <h4 className="text-xl font-semibold mb-2">Texmac Automation</h4>
          <p className="text-sm text-gray-300">
            B-11, Shree Sai Veer Industrial Park, Degam Road, Karwad, Vapi-396195, Gujarat
          </p>
          <p className="text-sm text-gray-300">Email: admin@texmacindia.com</p>
          <p className="text-sm text-gray-300">Phone: +91 76009 06437, +91 80006 76777</p>
        </div> */}



        {/* Quick Links
        <div>
          <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/services" className="hover:underline">Services</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            <li><Link to="/FAQ" className="hover:underline">FAQ</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div> */}

        {/* Legal */}
        <div className="col-span-full flex justify-center">
          <ul className="space-y-1 text-sm text-center">
            <li>© {new Date().getFullYear()} Texmac Automation</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
