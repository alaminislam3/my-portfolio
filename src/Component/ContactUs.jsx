// src/components/ContactUs.jsx

import React, { useState } from "react";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
// import { Link} from "react-router";
// import { SiTwitter } from "react-icons/si";

const ContactUs = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // এখানে তোমার email send logic আসতে পারে
    setMessageSent(true);
    e.target.reset();
  };

  return (
    <section className="px-6 py-16 lg:px-24 bg-[#d4a381] text-[#333]">
      <h2 className="text-4xl font-bold text-center mb-12">
        Let’s Work Together
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Left: Contact Info */}
        <div className="space-y-6">
          
            <div className="flex items-center gap-4 text-lg">
              <FaWhatsapp className="text-green-500 text-2xl" />
              <span>01747190824</span>
            </div>
          
          <div className="flex items-center gap-4 text-lg">
            <FaMapMarkerAlt className="text-red-500 text-2xl" />
            <span>Location: Dhaka, BD</span>
          </div>

          <div className="flex gap-6 text-3xl mt-6">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:scale-110 transition text-[#0077b5]" />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:scale-110 transition text-black" />
            </a>
            {/* <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
              <SiTwitter className="hover:scale-110 transition text-blue-500" />
            </a> */}
          </div>
        </div>

        {/* Right: Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow space-y-6 w-full"
        >
          <div>
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              className="input bg-white border-black input-bordered w-full"
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Subject</span>
            </label>
            <input
              type="text"
              name="subject"
              className="input bg-white border-black input-bordered w-full"
              placeholder="Subject"
              required
            />
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea bg-white border-black textarea-bordered w-full h-32"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn bg-[#FD6E0A] text-white hover:scale-105 transition"
          >
            Send Message
          </button>

          {messageSent && (
            <div className="text-green-600 font-medium mt-2">
              Message sent successfully!
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
