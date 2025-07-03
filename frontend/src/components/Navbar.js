import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Menu, X, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Mission", href: "#mission" },
    { name: "Vision", href: "#vision" },
    { name: "Values", href: "#values" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg border-b border-orange-100" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-xl font-bold text-gray-800">
              Awake Grace
              <span className="text-orange-500 block text-sm font-normal">
                Ministries
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-orange-500 transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="/pray">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-orange-600 hover:text-orange-700 font-medium"
                >
                  Prayer Request
                </motion.button>
              </Link>
              <Link to="/live">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium"
                >
                  Live Stream
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white/95 backdrop-blur-md rounded-xl m-4 p-4 shadow-xl border border-orange-100"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ x: 5 }}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between py-3 px-4 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-all duration-200"
              >
                <span className="font-medium">{item.name}</span>
                <ChevronRight size={16} />
              </motion.a>
            ))}
            <div className="border-t border-orange-100 mt-4 pt-4">
              <Link to="/pray">
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-between py-3 px-4 text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-lg transition-all duration-200 font-medium"
                >
                  <span>Prayer Request</span>
                  <ChevronRight size={16} />
                </motion.button>
              </Link>
              <Link to="/live">
                <motion.button
                  whileHover={{ x: 5 }}
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-between py-3 px-4 mt-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium"
                >
                  <span>Live Stream</span>
                  <ChevronRight size={16} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;