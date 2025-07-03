import React from "react";
import { motion } from "framer-motion";
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Mission", href: "#mission" },
    { name: "Our Vision", href: "#vision" },
    { name: "Our Values", href: "#values" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" }
  ];

  const ministries = [
    { name: "Sunday Worship", href: "#" },
    { name: "Bible Study", href: "#" },
    { name: "Youth Ministry", href: "#" },
    { name: "Prayer Groups", href: "#" },
    { name: "Community Outreach", href: "#" },
    { name: "Women's Ministry", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Church Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold">
                Awake Grace
                <span className="text-orange-400 block text-sm font-normal">
                  Ministries at The Vaal
                </span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              We are a vibrant church community dedicated to spreading God's love, 
              building authentic relationships, and transforming lives through the 
              power of Jesus Christ. Join us as we grow together in faith.
            </p>

            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">+27 67 065 1066</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">hello@awakegrace.co.za</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">The Vaal, South Africa</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Ministries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6 text-orange-400">Our Ministries</h4>
            <ul className="space-y-3">
              {ministries.map((ministry, index) => (
                <li key={index}>
                  <a
                    href={ministry.href}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <span className="w-1 h-1 bg-orange-400 rounded-full"></span>
                    <span>{ministry.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-700"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Church Family?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Take the next step in your faith journey. We'd love to welcome you 
              and help you grow in your relationship with God.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pray">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-200 font-medium"
                >
                  Request Prayer
                </motion.button>
              </Link>
              <Link to="/donate">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium"
                >
                  Support Our Ministry
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © 2024 Awake Grace Ministries Global. All rights reserved. Built with love for our community.
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex space-x-4"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 transition-all duration-200"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
