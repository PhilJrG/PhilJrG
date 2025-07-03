import React from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, Calendar, Users, Music, BookOpen, Coffee, Heart } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Sunday Worship Service",
      time: "10:00 AM",
      description: "Join us for uplifting worship, inspiring messages, and fellowship",
      icon: Music,
      duration: "2 hours"
    },
    {
      title: "Bible Study",
      time: "7:00 PM",
      description: "Wednesdays - Dive deeper into God's Word with our community",
      icon: BookOpen,
      duration: "1.5 hours"
    },
    {
      title: "Prayer Meeting",
      time: "6:00 PM",
      description: "Fridays - Come together in powerful prayer and intercession",
      icon: Heart,
      duration: "1 hour"
    },
    {
      title: "Youth Service",
      time: "5:00 PM",
      description: "Saturdays - Dynamic worship and teaching for young people",
      icon: Users,
      duration: "2 hours"
    }
  ];

  const facilities = [
    {
      name: "Main Sanctuary",
      capacity: "500 People",
      features: ["Air Conditioning", "Sound System", "Projection Screen"]
    },
    {
      name: "Fellowship Hall",
      capacity: "200 People",
      features: ["Kitchen Facilities", "Tables & Chairs", "Audio System"]
    },
    {
      name: "Youth Center",
      capacity: "100 People",
      features: ["Game Area", "Multimedia Setup", "Comfortable Seating"]
    },
    {
      name: "Prayer Room",
      capacity: "50 People",
      features: ["Quiet Space", "Soft Lighting", "Comfortable Seating"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-orange-100 to-red-100 text-orange-600 rounded-full text-sm font-medium mb-4"
          >
            Services & Venue
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6"
          >
            Worship{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
              Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            Join us for meaningful worship experiences and discover our beautiful facilities 
            designed to create a welcoming environment for all.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Services Schedule */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-800 mb-8"
            >
              Service Schedule
            </motion.h3>

            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-xl font-semibold text-gray-800">
                          {service.title}
                        </h4>
                        <span className="text-orange-600 font-bold text-lg">
                          {service.time}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">
                        {service.description}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Special Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="w-6 h-6" />
                <h4 className="text-xl font-semibold">Special Events</h4>
              </div>
              <p className="text-orange-100 mb-4">
                Join us for special events throughout the year including Easter celebrations, 
                Christmas services, community outreach programs, and more.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <Coffee className="w-4 h-4" />
                <span>Coffee & fellowship after every service</span>
              </div>
            </motion.div>
          </div>

          {/* Venue Information */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-gray-800 mb-8"
            >
              Our Facilities
            </motion.h3>

            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-2xl mb-8"
            >
              <img
                src="https://images.pexels.com/photos/14237613/pexels-photo-14237613.jpeg"
                alt="Church Sanctuary"
                className="w-full h-[300px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h4 className="text-xl font-semibold mb-2">Beautiful Sanctuary</h4>
                <p className="text-sm text-orange-200">
                  A sacred space designed for worship and reflection
                </p>
              </div>
            </motion.div>

            {/* Facilities List */}
            <div className="space-y-4">
              {facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-orange-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {facility.name}
                    </h4>
                    <span className="text-orange-600 font-medium text-sm">
                      {facility.capacity}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {facility.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100"
            >
              <div className="flex items-center space-x-3 mb-4">
                <MapPin className="w-6 h-6 text-orange-600" />
                <h4 className="text-xl font-semibold text-gray-800">Location</h4>
              </div>
              <p className="text-gray-600 mb-4">
                We are conveniently located in The Vaal, making it easy for our community 
                to gather for worship and fellowship.
              </p>
              <div className="text-sm text-gray-500">
                <p>📍 The Vaal, South Africa</p>
                <p>🚗 Ample parking available</p>
                <p>♿ Wheelchair accessible</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;