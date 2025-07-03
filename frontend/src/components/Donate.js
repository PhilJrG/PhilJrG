import React, { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ArrowLeft, CreditCard, Smartphone, Building2, DollarSign, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("general");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const predefinedAmounts = ["R100", "R250", "R500", "R1000", "R2000"];

  const donationTypes = [
    {
      id: "general",
      title: "General Fund",
      description: "Support our overall ministry and operations",
      icon: Heart
    },
    {
      id: "building",
      title: "Building Fund",
      description: "Help us maintain and improve our facilities",
      icon: Building2
    },
    {
      id: "missions",
      title: "Missions & Outreach",
      description: "Support our community outreach programs",
      icon: DollarSign
    },
    {
      id: "youth",
      title: "Youth Ministry",
      description: "Invest in the next generation",
      icon: Heart
    }
  ];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount("");
  };

  const handleDonate = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setIsComplete(true);
  };

  const getDonationAmount = () => {
    if (customAmount) return `R${customAmount}`;
    return selectedAmount || "R0";
  };

  if (isComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-orange-100 max-w-md w-full text-center"
        >
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Thank You for Your Generosity!
          </h2>
          <p className="text-gray-600 mb-6">
            Your donation of {getDonationAmount()} has been received. Your generosity helps us continue God's work in our community.
          </p>
          <div className="space-y-4">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-medium"
              >
                Back to Home
              </motion.button>
            </Link>
            <p className="text-sm text-gray-500">
              A receipt will be sent to your email shortly
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link to="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </motion.button>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-800">Give</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Support Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">Ministry</span>
            </h1>
            <p className="text-gray-600 mb-8">
              Your generous gift helps us continue spreading God's love, building community, and serving those in need.
            </p>

            <form onSubmit={handleDonate} className="space-y-6">
              {/* Donation Type */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Choose Fund
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {donationTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      type="button"
                      onClick={() => setDonationType(type.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                        donationType === type.id
                          ? 'border-orange-500 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <div className="flex items-center space-x-2 mb-2">
                        <type.icon className={`w-5 h-5 ${donationType === type.id ? 'text-orange-500' : 'text-gray-400'}`} />
                        <span className={`font-medium ${donationType === type.id ? 'text-orange-700' : 'text-gray-700'}`}>
                          {type.title}
                        </span>
                      </div>
                      <p className={`text-sm ${donationType === type.id ? 'text-orange-600' : 'text-gray-500'}`}>
                        {type.description}
                      </p>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Select Amount
                </label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <motion.button
                      key={amount}
                      type="button"
                      onClick={() => handleAmountSelect(amount)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`py-3 px-4 rounded-lg border-2 font-semibold transition-all duration-200 ${
                        selectedAmount === amount
                          ? 'border-orange-500 bg-orange-500 text-white'
                          : 'border-gray-200 text-gray-700 hover:border-orange-300'
                      }`}
                    >
                      {amount}
                    </motion.button>
                  ))}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Custom Amount
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">R</span>
                    <input
                      type="number"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                      placeholder="Enter amount"
                      className="w-full pl-8 pr-4 py-3 border border-orange-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-4">
                  Payment Method
                </label>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-orange-500 border-orange-300 focus:ring-orange-500"
                    />
                    <CreditCard className="w-6 h-6 text-gray-400" />
                    <span className="text-gray-700 font-medium">Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="eft"
                      checked={paymentMethod === "eft"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-orange-500 border-orange-300 focus:ring-orange-500"
                    />
                    <Building2 className="w-6 h-6 text-gray-400" />
                    <span className="text-gray-700 font-medium">EFT/Bank Transfer</span>
                  </label>
                  <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg hover:border-orange-300 transition-colors cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="mobile"
                      checked={paymentMethod === "mobile"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 text-orange-500 border-orange-300 focus:ring-orange-500"
                    />
                    <Smartphone className="w-6 h-6 text-gray-400" />
                    <span className="text-gray-700 font-medium">Mobile Money</span>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isProcessing || (!selectedAmount && !customAmount)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-200 font-semibold text-lg flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Heart className="w-5 h-5" />
                    <span>Donate {getDonationAmount()}</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Bible Verse */}
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">God's Promise</h3>
              <p className="text-orange-100 mb-6">
                "Give, and it will be given to you. A good measure, pressed down, shaken together and running over, will be poured into your lap. For with the measure you use, it will be measured to you."
              </p>
              <cite className="text-sm text-orange-200">- Luke 6:38</cite>
            </div>

            {/* How Your Gift Helps */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">How Your Gift Helps</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Ministry Operations</h4>
                    <p className="text-gray-600">Supporting our pastoral staff, worship services, and regular programs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Facility Maintenance</h4>
                    <p className="text-gray-600">Keeping our church building safe, clean, and welcoming for all.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <DollarSign className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Community Outreach</h4>
                    <p className="text-gray-600">Feeding the hungry, helping the needy, and supporting local initiatives.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Ways to Give */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-orange-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Other Ways to Give</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Monthly Giving</h4>
                  <p className="text-gray-600">Set up a recurring monthly donation to provide consistent support.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Legacy Giving</h4>
                  <p className="text-gray-600">Consider including our ministry in your will or estate planning.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Corporate Sponsorship</h4>
                  <p className="text-gray-600">Business partnerships for events and community programs.</p>
                </div>
              </div>
            </div>

            {/* Tax Information */}
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-800 mb-2">Tax Deductible</h4>
              <p className="text-sm text-gray-600">
                Your donation is tax-deductible. A receipt will be provided for your records.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Donate;