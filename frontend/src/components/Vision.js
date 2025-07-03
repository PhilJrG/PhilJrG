import React from "react";
import { motion } from "framer-motion";
import { Eye, Lightbulb, Crown, Compass } from "lucide-react";

const Vision = () => {
  const visionElements = [
    {
      icon: Eye,
      title: "Spiritual Vision",
      description: "A community where every person encounters the living God and experiences transformation through His love."
    },
    {
      icon: Lightbulb,
      title: "Illuminated Lives",
      description: "Believers who shine as lights in their communities, reflecting Christ's love in everything they do."
    },
    {
      icon: Crown,
      title: "Kingdom Impact",
      description: "A church that advances God's kingdom through discipleship, service, and authentic witness."
    },
    {
      icon: Compass,
      title: "Guided Purpose",
      description: "Individuals who discover their divine purpose and walk confidently in God's calling on their lives."
    }
  ];

  return (
    <section id="vision" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 rounded-full text-sm font-medium mb-4"
          >
            Our Vision
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
          >
            Seeing the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Future Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            We envision a thriving spiritual community where lives are transformed, 
            purposes are discovered, and God's love radiates through every member.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Vision Elements */}
          <div className="space-y-8">
            {visionElements.map((element, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-orange-50 to-red-50 hover:from-orange-100 hover:to-red-100 transition-all duration-300 border border-orange-100">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <element.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      {element.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {element.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Vision Image and Quote */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1596550933678-4e760b4bf87b"
                alt="Vision and Future"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              {/* Vision Quote Overlay */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
                >
                  <blockquote className="text-lg italic mb-4">
                    "Where there is no vision, the people perish: but he that keepeth the law, happy is he."
                  </blockquote>
                  <cite className="text-sm text-orange-300">- Proverbs 29:18</cite>
                </motion.div>
              </div>
            </div>

            {/* Floating Vision Icons */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl"
            >
              <Eye className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        </div>

        {/* Vision Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white shadow-xl"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Our Vision Statement
            </h3>
            <blockquote className="text-lg max-w-4xl mx-auto leading-relaxed">
              "To be a beacon of hope and transformation in The Vaal, where every person 
              discovers their divine purpose, experiences authentic community, and becomes 
              a passionate disciple who impacts their world with the love and grace of Jesus Christ."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;