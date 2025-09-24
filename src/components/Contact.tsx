import React, { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_b1n8x87",      // 🔹 Replace with EmailJS Service ID
        "template_xjir5av",     // 🔹 Replace with EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Y47OpEksDbu3vXJRx"       // 🔹 Replace with EmailJS Public Key
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error:", error.text);
          setStatus("❌ Failed to send. Please try again.");
        }
      );
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center"><br />
          <motion.h2
            className="text-3xl font-bold text-gray-900 dark:text-white font-robotoSlab"
            variants={fadeInVariants}
            animate={inView ? "visible" : "hidden"}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-600 dark:text-gray-300"
            variants={fadeInVariants}
            animate={inView ? "visible" : "hidden"}
          >
            I'm always open to new opportunities and interesting projects.
          </motion.p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 transition"
              >
                Send Message
              </button>

              {status && <p className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">{status}</p>}
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6">
            <div className="space-y-8">
              <motion.div className="flex items-start" variants={fadeInVariants} animate={inView ? "visible" : "hidden"}>
                <MapPin className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Location</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">Kolar Gold Field, Karnataka, India</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start" variants={fadeInVariants} animate={inView ? "visible" : "hidden"}>
                <Mail className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Email</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">sharan.rs0103@gmail.com</p>
                </div>
              </motion.div>

              <motion.div className="flex items-start" variants={fadeInVariants} animate={inView ? "visible" : "hidden"}>
                <Phone className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">Phone</h3>
                  <p className="mt-1 text-gray-600 dark:text-gray-300">+91 8147090339</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
