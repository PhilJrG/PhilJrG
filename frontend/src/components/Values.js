import React from "react";
import { motion } from "framer-motion";
import { Heart, Shield, Users, Lightbulb, HandHeart, BookOpen } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Heart,
      title: "Love",
      description: "We demonstrate God's unconditional love through our actions, words, and service to others.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We live with honesty, transparency, and authenticity in all our relationships and dealings.",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Community",
      description: "We believe in the power of genuine fellowship and building meaningful connections.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: Lightbulb,
      title: "Excellence",
      description: "We strive for excellence in everything we do, honoring God with our best efforts.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: HandHeart,
      title: "Service",
      description: "We are called to serve others selflessly, following Christ's example of servant leadership.",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: BookOpen,
      title: "Truth",
      description: "We are committed to Biblical truth and applying God's Word to our daily lives.",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full text-sm font-medium mb-4"
          >
            Our Values
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
          >
            Built on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Kingdom Values
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            These core values guide everything we do and shape who we are as a community of believers.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* Values Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/5673764/pexels-photo-5673764.jpeg"
                alt="Community Service and Values"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Floating Heart */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl"
            >
              <Heart className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>

          {/* Values Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">
              Living by Biblical Principles
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our values are not just words on a wall—they are the foundation of our faith 
              community. They guide our decisions, shape our relationships, and inspire us 
              to live lives that honor God and serve others.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every ministry, every service, and every interaction is filtered through these 
              core values, ensuring that we remain true to our calling as followers of Christ.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-orange-100">
              <blockquote className="text-gray-700 italic">
                "But the fruit of the Spirit is love, joy, peace, forbearance, kindness, 
                goodness, faithfulness, gentleness and self-control."
              </blockquote>
              <cite className="text-sm text-orange-600 mt-2 block">- Galatians 5:22-23</cite>
            </div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Values Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Commitment
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              We are committed to living out these values not just within our church walls, 
              but in our homes, workplaces, and communities. They are the compass that guides 
              us as we seek to be faithful disciples of Jesus Christ and make a positive impact 
              in The Vaal and beyond.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;