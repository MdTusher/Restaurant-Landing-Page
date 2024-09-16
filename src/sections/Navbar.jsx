import { useState } from "react";
import { LINKS } from "../constants";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scroll({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setToggle(false);
  };
  return (
    <nav className="fixed top-4 z-50 flex w-full flex-col items-center justify-center">
      <div className="flex w-full items-center justify-between overflow-y-hidden  p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg ">
        <h1>L O G O</h1>
        <ul className="hidden space-x-6 lg:flex">
          {LINKS.map((link, index) => (
            <li
              key={index}
              className={`text-sm cursor-pointer ${
                index !== 0 ? "border-l-2 border-neutral-300/20 pl-2" : ""
              } hover: opacity-50`}
            >
              <a
                onClick={(e) => handleScroll(e, link.targetId)}
                href={`#${link.targetId}`}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {toggle && (
        <ul className="w-full backdrop-blur-lg lg:hidden">
          {LINKS.map((link, index) => (
            <li
              key={index}
              href={`#${link.targetId}`}
              className="block p-4 uppercase tracking-normal cursor-pointer "
              onClick={(e) => handleScroll(e, link.targetId)}
            >
              <a href={`#${link.targetId}`}>{link.text}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
