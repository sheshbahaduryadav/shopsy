import React from "react";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import DarkMode from "./DarkMode";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Top Rated",
    link: "/#services",
  },
  {
    id: 3,
    name: "Kids Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  return (
    <div className="shadow-md sticky top-0 bg-white duration-200 z-40">
      {/* upper Navbar */}
      <div className="sub-navbar">
        <div className="container p-1 flex nav justify-between items-center">
          {/* <div>
            <img src={logo} alt="Logo" className="w-48" />
          </div> */}
          <div className="w-full text-center text-white"><p>Introducing to shopmet! Start shopping here</p></div>
          <div className="flex justify-between items-center gap-4">
            {/* <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-color absolute top-1/2 -translate-y-1/2 right-3" />
            </div>
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button> */}

            {/* <div>
              <DarkMode />
            </div> */}
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div className="sticky flex py-2 jbetween items-center gap-8 px-4 top-0">
        <div>
          <img src={logo} alt="Logo" className="w-48" />
        </div>
        <div data-aos="zoom-in" className="flex sticky top-0 justify-center">

          <ul className="sm:flex hidden items-center gap-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 transition-all hover:underline text-color hover:underline-offset-2 hover:text-color duration-200"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Simple Dropdown and Links */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center text-color gap-[2px] py-2">
                Trending Products
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-color shadow-md">
                <ul>
                  {DropdownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <div className="t-0 md:block hidden right-3">
            <li className="block lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700">
              <Link
                to="/user-dashboard/my-cart"
                role="button"
                className="relative flex"
              >
                <i className="fa-solid fa-cart-shopping text-2xl"></i>
                <span className="absolute text-center -top-2 -right-3 bg-red-600 rounded-full h-5 w-5 top right p-0 m-0 text-white font-mono text-sm  leading-tight">
                  0
                </span>
              </Link>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
