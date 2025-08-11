import React, { useState } from "react";
import {
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
// import { Link} from "react-router";
// import { SiTwitter } from "react-icons/si";

const ContactUs = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setMessageSent(true);
    e.target.reset();
  };

  return (
    <section id="contact" className="px-6 py-16py-12 pt-5 sm:py-16 lg:py-24 lg:px-24 bg-[#d4a381] text-[#333]">
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
              href="linkedin.com/in/alaminislam1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0077b5] hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/alaminislam3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:scale-110 transition-transform"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/Drcryptu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:scale-110 transition-transform"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
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
