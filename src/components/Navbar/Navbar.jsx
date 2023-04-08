import { BsList } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import { IoHome } from 'react-icons/io5'
import{MdSettings, MdContactPage, MdWork} from 'react-icons/md'

import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleclick = () => {
    setNav(!nav);
  };

  return (
    <div className=''>
      <div className="flex  items-center justify-around border-b border-slate-400   py-6">
        <div>
          <Link to='/'>

          <span className="text-4xl font-sans text-yellow-500 font-extrabold">
            NA
          </span>
          <span className="text-4xl font-sans font-extrabold text-indigo-600">
            XA
          </span>
          </Link>
        </div>
        <div>
          <ul className="hidden md:flex text-slate-600 font-bold font-serif uppercase">
            <li className="mx-2 flex  hover:text-yellow-500 duration-300 ">
            <IoHome size={22}/><Link to="/" className='mx-1'>Home</Link>
            </li>
            <li className="mx-2 flex hover:text-yellow-500 duration-300">
            <MdSettings size={22}/> <Link to="/services" className='mx-1'>Services</Link>
            </li>
            <li className="mx-2 flex  hover:text-yellow-500 duration-300">
            <MdWork size={22}/><Link to="/career" className='mx-1'>Careers</Link>
            </li>
            <li className="mx-2 flex hover:text-yellow-500 duration-300">
            <MdContactPage size={22}/><Link to="/contact" className='mx-1'>Contact</Link>
            </li>
          </ul>
        </div>
        <div
          onClick={handleclick}
          className={
            nav
              ? "md:hidden absolute top-0 left-0 overflow-y-hidden py-5 h-3/2 w-full z-10 mt-20 bg-indigo-600  text-center text-yellow-500"
              : "hidden"
          }
        >
          <ul className=" font-black font-serif text-2xl  ">
            <li className="mx-2 py-2  border-t border-white hover:cursor-pointer ">
              <Link to="/">Home</Link>
            </li>
            <li className="mx-2 py-2 hover:cursor-pointer ">
              <Link to="/services">Services</Link>
            </li>
            <li className="mx-2 py-2 hover:cursor-pointer ">
              <Link to="/career">Careers</Link>
            </li>
            <li className="mx-2 py-2 hover:cursor-pointer  border-b border-white">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="">
          <button className='hover:bg-yellow-500 duration-300'>Lets Talk</button>
        </div>
        <div
          onClick={handleclick}
          className="md:hidden z-10 hover:cursor-pointer"
        >
        {nav?<ImCross sixe={32}/>: < BsList size={32}/> }
        </div>
      </div>
      
    </div>
  );
};

export default Navbar;
