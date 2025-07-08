// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa"; // hamburger icons

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-[#d4a381] shadow-md" : "bg-[#d9cabf]"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-4 py-4">
        {/* Logo */}
        <div className="inline-block px-4 py-2">
          <h1
            className="text-4xl font-extrabold text-[#FD6E0A] tracking-widest select-none animate-spin"
            style={{ animationDuration: "6s" }}
          >
            &lt;/&gt;
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <Link
              to="skill"
              smooth={true}
              duration={500}
              className="cursor-pointer text-black"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="project"
              smooth={true}
              duration={500}
              className="cursor-pointer text-black"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer text-black"
            >
              Contact
            </Link>
          </li>
          <a
            href="https://docs.google.com/document/d/1jZhinOQ_etiYA7yfQ6yyEWjNo8vC7K7smSboLFAzVlU/edit?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn bg-[#FD6E0A] text-white px-4 py-2 rounded">
              Resume
            </button>
          </a>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes size={24} className="text-black cursor-pointer" />
          ) : (
            <FaBars size={24} className="text-black cursor-pointer" />
          )}
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-[#d4a381] flex flex-col items-center space-y-6 py-6 md:hidden transition-all duration-300">
            <li>
              <Link
                to="skill"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer text-black"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="project"
                smooth={true}
                duration={500}
                onClick={closeMenu}
                className="cursor-pointer text-black"
              >
                Projects
              </Link>
            </li>
            <a
              href="https://api.whatsapp.com/send?phone=8801747190824"
              target="_blank"
              onClick={closeMenu}
              className="cursor-pointer text-black"
              rel="noopener noreferrer"
            >
              <button className="btn bg-[#FD6E0A] text-white px-4 py-2 rounded">
                Resume
              </button>
            </a>

            <li>
              <button className="btn bg-[#FD6E0A] text-white px-4 py-2 rounded">
                Resume
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
