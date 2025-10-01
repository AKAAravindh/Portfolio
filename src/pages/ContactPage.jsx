import React, { useState, useRef } from "react";
import { FaGithub, FaEnvelope, FaPhone, FaInstagram } from "react-icons/fa";
import { SiNetlify, SiLinkedin } from "react-icons/si";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("Email sent successfully!");
          formRef.current.reset();
          setLoading(false);
        },
        (error) => {
          setStatus("Failed to send email. Try again later.");
          setLoading(false);
          console.error(error.text);
        }
      );
  };

  return (
    <div className="bg-gray-950 text-gray-200 min-h-screen pt-16 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Get in <span className="text-[#00ADB5]">Touch</span>
        </h1>
        <p className="mt-2 text-gray-400 max-w-2xl mx-auto">
          I’m open to collaborations, freelance projects, or just a friendly
          hello! Reach out via form or through my social links.
        </p>
      </div>

      {/* Contact Form */}
      <section className="mb-16 max-w-3xl mx-auto">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 bg-[#1B1F2A] p-8 rounded-2xl shadow-2xl backdrop-blur-sm border border-[#00ADB5]/20 transition-all duration-300 hover:shadow-[#00ADB5]/40"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-4 rounded-lg bg-[#222831] border border-[#00ADB5]/50 focus:outline-none focus:border-[#00ADB5] text-[#EEEEEE] placeholder-gray-500 shadow-sm transition-all duration-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-4 rounded-lg bg-[#222831] border border-[#00ADB5]/50 focus:outline-none focus:border-[#00ADB5] text-[#EEEEEE] placeholder-gray-500 shadow-sm transition-all duration-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            required
            className="p-4 rounded-lg bg-[#222831] border border-[#00ADB5]/50 focus:outline-none focus:border-[#00ADB5] text-[#EEEEEE] placeholder-gray-500 shadow-sm resize-none transition-all duration-300"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#00ADB5] hover:bg-[#009CA3] text-[#222831] px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {status && (
            <p
              className={`mt-2 text-center font-medium ${
                status.includes("successfully")
                  ? "text-green-400"
                  : "text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </section>

      {/* Contact Details */}
      <section className="mb-8 text-center">
        <h2 className="text-2xl font-semibold text-[#00ADB5] mb-6">
          Contact Info
        </h2>
        <p className="text-gray-400 mb-2 flex items-center justify-center gap-2">
          <FaEnvelope /> aravindhraj206@gmail.com, aravindhrajbca@gmail.com
        </p>
        <p className="text-gray-400 mb-2 flex items-center justify-center gap-2">
          <FaPhone /> +971 503597147
        </p>
      </section>

      {/* Find Me Online */}
      <section className="text-center py-16">
        <h2 className="text-2xl font-semibold text-[#00ADB5] mb-8">
          Find Me Online
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* GitHub */}
          <a
            href="https://github.com/AKAAravindh"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-800"
          >
            <FaGithub className="text-3xl text-gray-400 hover:text-white transition-colors duration-300" />
            <div className="text-left">
              <p className="font-medium text-gray-200">GitHub</p>
              <p className="text-gray-400 text-sm">@AKAAravindh</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/akaaravindh/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-800"
          >
            <SiLinkedin className="text-3xl text-[#0A66C2] hover:text-blue-400 transition-colors duration-300" />
            <div className="text-left">
              <p className="font-medium text-gray-200">LinkedIn</p>
              <p className="text-gray-400 text-sm">linkedin.com/akaaravindh</p>
            </div>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/its_aravindh_raj/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-800"
          >
            <FaInstagram className="text-3xl text-pink-500 hover:text-pink-400 transition-colors duration-300" />
            <div className="text-left">
              <p className="font-medium text-gray-200">Instagram</p>
              <p className="text-gray-400 text-sm">@its_aravindh_raj</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:aravindhraj206@gmail.com"
            className="flex items-center gap-3 p-4 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-800"
          >
            <FaEnvelope className="text-3xl text-red-500 hover:text-red-400 transition-colors duration-300" />
            <div className="text-left">
              <p className="font-medium text-gray-200">Email</p>
              <p className="text-gray-400 text-sm">aravindhraj206@gmail.com</p>
            </div>
          </a>

          {/* Netlify */}
          <a
            href="https://app.netlify.com/teams/akaaravindh/projects"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 p-4 bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-800"
          >
            <SiNetlify className="text-3xl text-[#00C8D8] hover:text-[#00ADB5] transition-colors duration-300" />
            <div className="text-left">
              <p className="font-medium text-gray-200">Netlify</p>
              <p className="text-gray-400 text-sm">netlify.com/akaaravindh</p>
            </div>
          </a>
        </div>

        <p className="mt-8 text-gray-400 text-center">
          Connect with me on any platform to discuss projects, collaborations,
          or just to say hi!
        </p>
      </section>
    </div>
  );
}
