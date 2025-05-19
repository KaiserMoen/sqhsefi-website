import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {/* Logo */}
        <div>
          <div className="text-2xl font-bold mb-4">LOGO</div>
          <p className="text-sm text-gray-400">Building the future of energy</p>
        </div>

        {/* Contact Info */}
        <div>
          <div className="flex items-center mb-2">
            <FaMapMarkerAlt className="mr-2" />
            <span>123 Energy St, Metro Manila, PH</span>
          </div>
          <div className="flex items-center mb-2">
            <FaEnvelope className="mr-2" />
            <span>info@energyco.com</span>
          </div>
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span>+63 912 345 6789</span>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <div className="text-lg font-semibold mb-2">Follow Us</div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-500 transition" size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-blue-400 transition" size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center text-gray-500 text-sm mt-8">
        &copy; {new Date().getFullYear()} EnergyCo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;