import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo } from "../assets";

const Navbar = ({ toggle, setToggle }) => {
  const [active, setActive] = useState("");
  // const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 100) {
  //       setScrolled(true);
  //     } else {
  //       setScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const myref = useRef(null);

  const handleOutSideClick = (event) => {
    if (!myref.current?.contains(event.target)) {
      setToggle(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleOutSideClick);

    return () => {
      document.body.removeEventListener("click", handleOutSideClick);
    };
  }, [myref]);

  return (
    <nav
      ref={myref}
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${"bg-white"}`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center justify-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-10 h-10 object-contain" />
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-slate-900" : "text-slate-600"
              } hover:text-slate-400 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-slate-900"
            onClick={() => setToggle(!toggle)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <div
            className={`w-full h-[2000px] bg-black/30 absolute top-20 left-0 ${!toggle ? "hidden" : "block"} `}
            onClick={() => setToggle(false)}
          ></div>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-slate-100 absolute top-20 left-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl shadow-2xl border border-slate-300`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title
                      ? "text-slate-900"
                      : "text-slate-600 hover:text-slate-400"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
