import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-green-500 to-green-900 text-gray-100 mt-auto">
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="fill-current text-white opacity-10"
        >
          <path d="M0,120 C150,60 350,0 600,40 C850,80 1050,20 1200,40 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-20 pb-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4 flex items-center">
              <span className="bg-white text-green-800 px-2 py-1 rounded mr-2">
                TN
              </span>
              Turf Nepal
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Nepal's premier futsal court booking platform. Find and book the
              perfect venue for your game.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-green-700 p-2 rounded-lg hover:bg-green-600 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-white group-hover:scale-110 transform transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 pb-2 border-b-2 border-green-600 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "Find Turfs",
                "Book a Court",
                "List Your Turf",
                "About Us",
                "Blog",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-green-500 rounded-full mr-2 group-hover:w-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4 pb-2 border-b-2 border-green-600 inline-block">
              Support
            </h4>
            <ul className="space-y-3">
              {[
                "Help Center",
                "FAQs",
                "Terms of Service",
                "Privacy Policy",
                "Refund Policy",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-white transition-colors flex items-center group"
                  >
                    <span className="w-1 h-1 bg-green-500 rounded-full mr-2 group-hover:w-2 transition-all duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 pb-2 border-b-2 border-green-600 inline-block">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center group">
                <div className="bg-green-700 p-2 rounded-lg mr-3">
                  <Mail className="w-4 h-4" />
                </div>
                <a
                  href="mailto:info@turfnepal.com"
                  className="hover:text-white transition-colors group-hover:translate-x-1 transform transition-transform"
                >
                  info@turfnepal.com
                </a>
              </li>
              <li className="flex items-center group">
                <div className="bg-green-700 p-2 rounded-lg mr-3">
                  <Phone className="w-4 h-4" />
                </div>
                <a
                  href="tel:+977-1-4XXXXXX"
                  className="hover:text-white transition-colors group-hover:translate-x-1 transform transition-transform"
                >
                  +977-1-4XXXXXX
                </a>
              </li>
              <li className="flex items-start group">
                <div className="bg-green-700 p-2 rounded-lg mr-3">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="group-hover:translate-x-1 transform transition-transform">
                  New Baneshwor, Kathmandu
                  <br />
                  Nepal
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-green-700/80 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Turf Nepal. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              {["Terms", "Privacy", "Cookies"].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-white hover:underline underline-offset-4 transition-all"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
