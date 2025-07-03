import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Users, MessageCircle, Heart, ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const LiveStream = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [viewerCount, setViewerCount] = useState(47);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, user: "Sarah M.", message: "Praying for everyone today 🙏", time: "10:15 AM" },
    { id: 2, user: "David K.", message: "Thank you for this wonderful service", time: "10:16 AM" },
    { id: 3, user: "Grace L.", message: "Amen! God bless you all", time: "10:17 AM" },
    { id: 4, user: "Michael R.", message: "Joining from Cape Town!", time: "10:18 AM" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  // Simulate live data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setViewerCount(prev => prev + Math.floor(Math.random() * 5) - 2);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message = {
        id: Date.now(),
        user: "You",
        message: newMessage,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage("");
    }
  };

  const upcomingServices = [
    {
      title: "Sunday Worship Service",
      date: "This Sunday",
      time: "10:00 AM",
      type: "Live"
    },
    {
      title: "Bible Study",
      date: "Wednesday",
      time: "7:00 PM",
      type: "Live"
    },
    {
      title: "Prayer Meeting",
      date: "Friday",
      time: "6:00 PM",
      type: "Live"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-300 hover:text-orange-400 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </motion.button>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Play className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold">Live Stream</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Video Player */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-black rounded-2xl overflow-hidden shadow-2xl"
            >
              {/* Video Area */}
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                {/* Placeholder for video */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20"></div>
                <div className="relative z-10 text-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <Play className="w-12 h-12 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">Sunday Worship Service</h3>
                  <p className="text-gray-300">Stream starts at 10:00 AM</p>
                </div>

                {/* Live Badge */}
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>LIVE</span>
                </div>

                {/* Viewer Count */}
                <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                  <Users className="w-4 h-4" />
                  <span>{viewerCount} watching</span>
                </div>
              </div>

              {/* Video Controls */}
              <div className="bg-gray-900 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handlePlayPause}
                      className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                    >
                      {isPlaying ? (
                        <Pause className="w-6 h-6 text-white" />
                      ) : (
                        <Play className="w-6 h-6 text-white" />
                      )}
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={handleMute}
                      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </motion.button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-300">Quality: HD</span>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                    >
                      <Heart className="w-5 h-5 text-white" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
            >
              <h2 className="text-2xl font-bold mb-4">Sunday Worship Service</h2>
              <p className="text-gray-300 mb-6">
                Join us for an inspiring time of worship, prayer, and hearing from God's Word. 
                Whether you're joining us in person or online, you're part of our church family.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-orange-400" />
                  <div>
                    <p className="font-semibold">Every Sunday</p>
                    <p className="text-sm text-gray-400">Weekly worship service</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-orange-400" />
                  <div>
                    <p className="font-semibold">10:00 AM - 12:00 PM</p>
                    <p className="text-sm text-gray-400">South African Time</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Live Chat */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-orange-400" />
                <span>Live Chat</span>
              </h3>
              
              {/* Chat Messages */}
              <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
                {chatMessages.map((msg) => (
                  <div key={msg.id} className="bg-gray-700/50 rounded-lg p-3">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-orange-400 text-sm">{msg.user}</span>
                      <span className="text-xs text-gray-400">{msg.time}</span>
                    </div>
                    <p className="text-gray-300 text-sm">{msg.message}</p>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleSendMessage} className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 rounded-lg px-4 py-2 transition-colors"
                >
                  Send
                </motion.button>
              </form>
            </motion.div>

            {/* Upcoming Services */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
            >
              <h3 className="text-xl font-bold mb-4">Upcoming Services</h3>
              <div className="space-y-3">
                {upcomingServices.map((service, index) => (
                  <div key={index} className="bg-gray-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-orange-400">{service.title}</h4>
                      <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">
                        {service.type}
                      </span>
                    </div>
                    <div className="text-sm text-gray-300">
                      <p>{service.date} at {service.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 text-white"
            >
              <h3 className="text-xl font-bold mb-4">New to Our Church?</h3>
              <p className="text-orange-100 mb-6">
                We'd love to connect with you! Whether you're visiting for the first time or looking for a church home, we're here for you.
              </p>
              <div className="space-y-3">
                <Link to="/pray">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-lg py-3 font-semibold transition-all duration-200"
                  >
                    Request Prayer
                  </motion.button>
                </Link>
                <Link to="/donate">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-white text-orange-500 hover:bg-gray-100 rounded-lg py-3 font-semibold transition-all duration-200"
                  >
                    Support Our Ministry
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStream;