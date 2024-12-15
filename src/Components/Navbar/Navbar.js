import React from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
const Navbar = () => {
  return (
    <section className='navbarSection'>
        <header className='header flex'>
            <div className='logoDiv'>
                <a href='#' className='logo flex'>
                    <h1><MdOutlineTravelExplore className='icon'/>Travel</h1>
                </a>
            </div>
            <div className='navBar'>
                <ul className='navLists flex'>
                    <li className='navitems'>
                        <a href='#' className='navLink'>Home</a>
                    </li>
                    <li className='navitems'>
                        <a href='#' className='navLink'>Packages</a>
                    </li>
                    <li className='navitems'>
                        <a href='#' className='navLink'>Shop</a>
                    </li>
                    <li className='navitems'>
                        <a href='#' className='navLink'>About</a>
                    </li>
                    <li className='navitems'>
                        <a href='#' className='navLink'>Pages</a>
                    </li>
                    <li className='navitems'>
                        <a href='#' className='navLink'>News</a>
                    </li>
                    <li className='navitems'>
                        <a href='#' className='navLink'>Contact</a>
                    </li>
                    <button className='btn'>
                        <a href=''>Book Now </a>
                    </button>
                </ul>
                <div className='closeNavbar'>
                <AiFillCloseCircle />
                </div>
            </div>
        </header>
    </section>
  )
}

export default Navbar
