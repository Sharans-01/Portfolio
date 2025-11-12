import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  MessageSquare,
  Github,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ FIX: Allow both input and textarea elements
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    // Mock EmailJS (replace later)
    setTimeout(() => {
      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "sharan.rs0103@gmail.com",
      link: "mailto:sharan.rs0103@gmail.com",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 8147090339",
      link: "tel:+918147090339",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Kolar Gold Field, Karnataka, India",
      link: null,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      url: "https://github.com/Sharans-01",
      color: "hover:bg-gray-900 dark:hover:bg-gray-700",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      url: "http://www.linkedin.com/in/sharan0103",
      color: "hover:bg-blue-600",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      url: "mailto:sharan.rs0103@gmail.com",
      color: "hover:bg-red-600",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-20 md:py-28 bg-gradient-to-b from-white via-indigo-50/30 to-white dark:from-gray-900 dark:via-indigo-950/20 dark:to-gray-900 transition-colors duration-300 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 dark:bg-purple-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4">
            <MessageSquare className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
              Let's Connect
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'm always open to new collaborations and interesting conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Side - Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Send a Message
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Fill out the form below
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20 transition-all duration-300 outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>

                {status.message && (
                  <div
                    className={`flex items-center gap-2 p-4 rounded-lg ${
                      status.type === "success"
                        ? "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400"
                        : "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400"
                    }`}
                  >
                    {status.type === "success" ? (
                      <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <p className="text-sm font-medium">{status.message}</p>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Right Side - Contact Info */}
<div className="order-1 lg:order-2 space-y-6">
  {/* Contact Info Cards */}
  <div className="space-y-4">
    {contactInfo.map((info, index) => (
      <div
        key={index}
        className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
      >
        <div className="flex items-start gap-4">
          <div
            className={`p-3 bg-gradient-to-br ${info.gradient} rounded-xl text-white flex-shrink-0`}
          >
            {info.icon}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 mb-1">
              {info.title}
            </h4>
            {info.link ? (
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors break-words"
              >
                {info.value}
              </a>
            ) : (
              <p className="text-base font-medium text-gray-900 dark:text-white break-words">
                {info.value}
              </p>
            )}
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Social Links */}
  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
      Connect on Social Media
    </h4>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
      Follow me on social platforms for updates and more content.
    </p>

    <div className="flex flex-wrap gap-3">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          className={`flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-300 dark:border-gray-600 hover:text-white transition-all duration-300 ${social.color}`}
        >
          {social.icon}
          <span className="text-sm font-medium">{social.label}</span>
        </a>
      ))}
    </div>
  </div>

  {/* Quick Response Note */}
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
    <div className="flex items-start gap-3">
      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0 animate-pulse" />
      <div>
        <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
          Quick Response Time
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          I typically respond within 24–48 hours. For urgent matters, feel free
          to reach out via phone or LinkedIn.
        </p>
      </div>
    </div>
  </div>
</div>

        </div>
      </div>
      </section>
    
  );
};

export default Contact;
