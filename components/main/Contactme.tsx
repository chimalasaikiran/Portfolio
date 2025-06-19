// components/ContactMe.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .send(
        "service_yxa02n8", // ✅ Your EmailJS Service ID
        "template_yourtemplateid", // ✅ Replace with your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: "New message from portfolio contact form",
        },
        "fKJ9evx8T2TfCwmxE" // ✅ Your Public Key
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <section
      id="ContactMe"
      className="relative z-30 w-full min-h-screen bg-transparent py-20 px-6 md:px-20 text-gray-900 dark:text-gray-100"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-10 tracking-wide">
          Contact <span className="text-purple-600">Me</span>
        </h2>

        <div className="text-center mb-10">
          <p className="text-lg">
            📧 Email:{" "}
            <a
              href="mailto:chimalasaikiran2@gmail.com"
              className="text-purple-600 hover:underline"
            >
              chimalasaikiran2@gmail.com
            </a>
          </p>
          <p className="text-lg mt-2">
            📞 Phone:{" "}
            <a
              href="tel:+918522912379"
              className="text-purple-600 hover:underline"
            >
              +91 85229 12379
            </a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-purple-600 text-white font-semibold hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>

        {success && (
          <div className="mt-6 text-green-600 font-semibold text-center">
            ✅ Your message was sent successfully!
          </div>
        )}

        {error && (
          <div className="mt-6 text-red-600 font-semibold text-center">
            ❌ Failed to send message. Please try again.
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default ContactMe;
