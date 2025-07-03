import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Globe, Heart } from "lucide-react";

const Mission = () => {
  const missionPoints = [
    {
      icon: Heart,
      title: "Spread God's Love",
      description: "Sharing the unconditional love of Jesus Christ with everyone we meet"
    },
    {
      icon: Users,
      title: "Build Community",
      description: "Creating a welcoming space where people can grow together in faith"
    },
    {
      icon: Globe,
      title: "Serve Others",
      description: "Actively serving our community and making a positive impact in The Vaal"
    },
    {
      icon: Target,
      title: "Disciple Making",
      description: "Equipping believers to live out their faith and lead others to Christ"
    }
  ];

  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium mb-4"
          >
            Our Mission
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
          >
            Called to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Love & Serve
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Our mission is to awaken hearts to God's grace, build authentic relationships, 
            and create a lasting impact in our community through the love of Jesus Christ.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Mission Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1596550933678-4e760b4bf87b"
                alt="Prayer and Spiritual Growth"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl"
            >
              <Target className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          {/* Mission Points */}
          <div className="space-y-8">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission Statement
            </h3>
            <blockquote className="text-lg text-gray-700 italic max-w-3xl mx-auto leading-relaxed">
              "To awaken hearts to the transformative power of God's grace, foster authentic 
              Christian community, and equip believers to be disciples who make disciples, 
              spreading the love of Jesus Christ throughout The Vaal and beyond."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;