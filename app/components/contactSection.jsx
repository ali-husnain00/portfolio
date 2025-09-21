"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Heart,
  Sparkles,
  Globe,
  Calendar,
  Coffee,
  User,
  CircleQuestionMark,
} from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alihusnain68786@gmail.com",
      emoji: "📧",
      color: "from-blue-400 to-blue-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 3185079315",
      emoji: "📱",
      color: "from-green-400 to-green-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rawalpindi, Pakistan",
      emoji: "🌍",
      color: "from-purple-400 to-purple-600",
    },
  ];

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-[#ffbd59] rounded-full opacity-30"
      animate={{
        y: [-20, -40, -20],
        x: [-10, 10, -10],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 3 + i * 0.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: i * 0.3,
      }}
      style={{
        top: `${20 + i * 15}%`,
        left: `${10 + i * 15}%`,
      }}
    />
  ));

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative bg-gradient-to-br from-[#502865] via-[#4b1662] to-[#6b2d7a] px-6 sm:px-10 lg:px-20 py-20 overflow-hidden"
    >
      {/* Floating Background Elements */}
      {floatingElements}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#ffbd59] to-transparent transform -skew-y-12 translate-y-32"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="inline-block text-4xl mb-4"
          >
            💬
          </motion.div>
          <h2 className="text-4xl sm:text-6xl font-extrabold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text">
            Let's Connect!
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-gradient-to-r from-[#ffbd59] to-yellow-400 mx-auto rounded-full"
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-2 mt-6 text-lg text-gray-200 max-w-2xl mx-auto"
          >
            <Sparkles size={20} className="text-[#ffbd59]" />
            <p>
              Ready to bring your ideas to life? Let's create something amazing
              together!
            </p>
            <Heart size={20} className="text-red-400" />
          </motion.div>
        </motion.div>

        {/* Enhanced Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Left Column - Enhanced Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full flex flex-col"
          >
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl h-full flex flex-col">
              <motion.h3
                className="text-3xl font-bold text-[#ffbd59] flex items-center gap-3 mb-8"
                whileHover={{ scale: 1.05 }}
              >
                <MessageCircle className="animate-pulse" />
                Get in Touch
              </motion.h3>

              {/* Contact Cards */}
              <div className="space-y-4 flex-1">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    onHoverStart={() => setHoveredCard(index)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="relative group"
                  >
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${info.color} shadow-lg`}
                      >
                        <info.icon size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <p className="text-[#ffbd59] font-semibold">
                            {info.label}
                          </p>
                        </div>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                      {hoveredCard === index && (
                        <motion.div
                          initial={{ rotate: 0 }}
                          animate={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <Sparkles size={16} className="text-[#ffbd59]" />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Description */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mt-6 p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm border border-white/10"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Coffee size={20} className="text-[#ffbd59]" />
                  <Globe size={20} className="text-blue-400" />
                  <Calendar size={20} className="text-green-400" />
                </div>
                <p className="text-white leading-relaxed">
                  I'm always excited to discuss new opportunities, creative
                  ideas, or potential collaborations. Whether you have a project
                  in mind or just want to chat about tech, let's build something
                  meaningful together! ☕✨
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Enhanced Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="h-full flex flex-col"
          >
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl h-full flex flex-col">
              <div className="flex items-center gap-2 mb-6">
                <span className="text-2xl">🚀</span>
                <h4 className="text-xl font-bold text-white">
                  Send me a message
                </h4>
              </div>

              <div className="space-y-4 flex-1 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 text-white placeholder-gray-300 rounded-xl border border-white/20 focus:border-[#ffbd59] focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/20 transition-all duration-300"
                    />
                    <span className="text-lg absolute right-3 top-3">
                      <User className="text-white" />
                    </span>
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="relative group"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 text-white placeholder-gray-300 rounded-xl border border-white/20 focus:border-[#ffbd59] focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/20 transition-all duration-300"
                    />
                    <span className="text-lg absolute right-3 top-3">
                      <Mail className="text-white" />
                    </span>
                  </motion.div>
                </div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative group"
                >
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 text-white placeholder-gray-300 rounded-xl border border-white/20 focus:border-[#ffbd59] focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/20 transition-all duration-300"
                  />
                  <span className="text-lg absolute right-3 top-3"><CircleQuestionMark className="text-white"/></span>
                </motion.div>

                <motion.div
                  whileFocus={{ scale: 1.02 }}
                  className="relative group flex-1"
                >
                  <textarea
                    name="message"
                    placeholder="Tell me about your project ideas..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full h-full min-h-[120px] px-4 py-3 bg-white/5 text-white placeholder-gray-300 rounded-xl border border-white/20 focus:border-[#ffbd59] focus:outline-none focus:ring-2 focus:ring-[#ffbd59]/20 transition-all duration-300 resize-none"
                  ></textarea>
                  <span className="text-lg absolute right-3 top-3"><MessageCircle className="text-white"/></span>
                </motion.div>

                <motion.button
                  type="button"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(255, 189, 89, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#ffbd59] to-yellow-400 text-[#4b1662] font-bold text-lg rounded-xl hover:from-yellow-400 hover:to-[#ffbd59] transition-all duration-300 shadow-lg group"
                  onClick={() => console.log("Form submitted with:", formData)}
                >
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Send size={20} />
                  </motion.div>
                  <span>Send Message</span>
                  <span className="text-xl group-hover:animate-bounce">🚀</span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Fun Element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10">
            <span className="text-sm text-gray-300">
              Usually responds within 24 hours
            </span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-green-400"
            >
              ⚡
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
