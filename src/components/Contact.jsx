import React, { useState } from "react";
//import { send } from "@emailjs/browser"; // Updated import for EmailJS

import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineEnvironment, AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineBehanceSquare } from "react-icons/ai";

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID") // EmailJS functionality disabled
    console.log("Form submitted:", formData); // Log form data instead

    console.log("Form submitted:", formData); // Log form data instead



      // EmailJS functionality disabled


  };

  return (
    <div
      className={`px-4 sm:px-6 max-w-[1200px] mx-auto py-10 sm:py-20`}
      id="contact"
    >
      <motion.h3
        className="text-3xl sm:text-4xl md:text-5xl font-black mb-8 sm:mb-12 tracking-wider text-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.8,
          type: "spring",
          bounce: 0.4,
        }}
      >
        <span className={isDarkMode ? "text-gray-200" : "text-gray-800"}>
          Get{" "}
        </span>
        <span className="text-purple-500">In Touch</span>
      </motion.h3>

      <div
        className={`max-w-2xl mx-auto ${
          isDarkMode ? "text-gray-200" : "text-gray-800"
        }`}
      >
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`p-6 rounded-xl ${
              isDarkMode ? "bg-gray-800/50" : "bg-white/90"
            } backdrop-blur-lg shadow-lg`}
          >
            <h4 className="text-2xl font-bold mb-4">My Contact</h4>
            <div className="space-y-4">
              <motion.div
                className="flex items-start space-x-3"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <AiOutlineMail className="text-2xl text-purple-500 flex-shrink-0 mt-1" />
                <a
                  href="mailto:agungsaputraofficial@gmail.com"
                  className="hover:text-purple-500 transition-colors break-all"
                >
                  agungsaputraofficial@gmail.com
                </a>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <AiOutlineEnvironment className="text-2xl text-purple-500" />
                <span>Gorontalo, Indonesia</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className={`p-6 rounded-xl ${
              isDarkMode ? "bg-gray-800/50" : "bg-white/90"
            } backdrop-blur-lg shadow-lg`}
          >
            <h4 className="text-2xl font-bold mb-4">Social Media</h4>
            <div className="space-y-4">
              <motion.a
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                href="https://github.com/itsAgungSaputra"
                className="flex items-center space-x-3 hover:text-purple-500 transition-colors"
                whileHover={{ x: 10 }}
              >
                <AiOutlineGithub className="text-2xl" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                href="https://www.linkedin.com/in/agungsaputra14/"
                className="flex items-center space-x-3 hover:text-purple-500 transition-colors"
                whileHover={{ x: 10 }}
              >
                <AiOutlineLinkedin className="text-2xl" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                href="https://www.instagram.com/agung_saputra____"
                className="flex items-center space-x-3 hover:text-purple-500 transition-colors"
                whileHover={{ x: 10 }}
              >
                <AiOutlineInstagram className="text-2xl" />
                <span>Instagram</span>
              </motion.a>
              <motion.a
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
                href="https://www.behance.net/itsagungsaputra"
                className="flex items-center space-x-3 hover:text-purple-500 transition-colors"
                whileHover={{ x: 10 }}
              >
                <AiOutlineBehanceSquare className="text-2xl" />
                <span>Behance</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-center mt-12 text-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          Feel free to hit me up! 🚀
        </motion.p>
      </div>
    </div>
  );
}

export default Contact;
