// src/components/Navbar.jsx
import { useEffect, useState } from "react";
import { Link } from 'react-scroll';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // 50px স্ক্রল হলে চেঞ্জ
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-colors duration-500 ${
        isScrolled ? "bg-[#d4a381] shadow-md" : "bg-[#d9cabf]"
      }`}
    >
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-4 py-4">
        
        <div className="inline-block  px-4 py-2  ">
  <h1
    className="text-4xl font-extrabold text-[#FD6E0A] tracking-widest select-none animate-spin"
    style={{ animationDuration: "6s" }}
  >
    &lt;/&gt;
  </h1>
</div>
{/* here it is  */}
      




        <ul className="flex items-center space-x-8">
          

      <Link
        to="skill"
        smooth={true}
        duration={500}
        className="cursor-pointer text-black"
      >
        Skills
      </Link>

      <Link
        to="project"
        smooth={true}
        duration={500}
        className="cursor-pointer text-black"
      >
        Projects
      </Link>

      <Link
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer text-black"
      >
        Contact
      </Link>



          <li>
            <button className="btn bg-[#FD6E0A] text-white">Resume</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
