import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import { useState } from "react";
import MobileMenu from "./MobileMenu";

function NavBar() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="fixed top-0 right-0 w-full md:bg-gradient-to-r from-primary to-secondary z-50 ">
        <div className="block">
          <div className="hidden md:block max-w-7xl mx-auto">
            <div className="flex justify-between py-1 text-white">
              <p>20% off on next booking</p>
              <p>Mobile No. +91 123456789</p>
            </div>
          </div>
          <div className="shadow-md bg-stone-50">
            <div className="px-6 py-4 md:py-0 md:px-0 md:max-w-7xl mx-auto ">
              {/* navbar */}
              <div className="flex justify-between items-center">
                {/* logo section  */}
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  <img className="w-32" src={logo}></img>
                </Link>
                {/* menu section */}
                <div className="hidden md:flex justify-between items-center gap-8">
                  {/* <Link className="hover:text-primary" to="/">
                  Home
                </Link>
                <Link className="hover:text-primary" to="/blogs">
                  Blogs
                </Link>
                <Link className="hover:text-primary" to="/places">
                  Best Places
                </Link>
                <Link className="hover:text-primary" to="/about">
                  About
                </Link> */}
                  <ul className="flex items-center gap-8">
                    <li className="flex gap-8">
                      <NavLink activeClassName="active" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/blogs">
                        Blogs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/places">
                        Best Places
                      </NavLink>
                    </li>
                    <li>
                      <NavLink activeClassName="active" to="/about">
                        About
                      </NavLink>
                    </li>
                  </ul>

                  <div className="relative group">
                    <div className=" flex items-center gap-2 py-4">
                      <span>Quick Links</span>
                      <FaChevronDown className="text-stone-700 group-hover:rotate-180" />
                    </div>
                    <div className="absolute -left-0 pt-2 w-40 hidden group-hover:flex flex-col bg-white shadow-sm shadow-stone-200">
                      <Link
                        className="px-4 py-2 hover:bg-secondary hover:text-stone-50"
                        to="#"
                      >
                        Our Services
                      </Link>
                      <Link
                        className="px-4 py-2 hover:bg-secondary hover:text-stone-50"
                        to="#"
                      >
                        Top Brands
                      </Link>
                      <Link
                        className="px-4 py-2 hover:bg-secondary hover:text-stone-50"
                        to="#"
                      >
                        Locations
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <button className=" text-stone-50 bg-gradient-to-r from-primary to-secondary text--secondary hover:text-stone-50 px-4 py-1 rounded-full hover:scale-110 duration-500 transition-all">
                    Book Now
                  </button>
                  {/* hamburger menu */}
                  <div
                    className="block md:hidden text-3xl"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <MdClose /> : <GiHamburgerMenu />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <MobileMenu show={show} setShow={setShow} />
      </div>
    </div>
  );
}

export default NavBar;
