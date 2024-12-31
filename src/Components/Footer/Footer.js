import React from 'react'
import './footer.css'
import videoF from '../../Assets/viedoF.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  AOS.init({duration:2000})

  return (
    <section className='footer'>
      <div className='viedoDiv'>
        <video src={videoF} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className='secContent container'>
        <div className='contactDiv flex'>
          <div data-aos="fade-up" className='text'>
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className='inputDiv flex'>
            <input data-aos="fade-up" type='text' placeholder='Enter Email Address'/>
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className='footerCard flex'>
          <div className='footerIntro flex'>
            <div className='logoDiv'>
              <a href='#' className='logo flex'>
                <MdOutlineTravelExplore className='icon'/>Travel
              </a>
            </div>

            <div data-aos="fade-up" className='footerParagraph'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
            </div>

            <div data-aos="fade-up" className='footerSocials flex'>
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>
            </div>
          </div>

          <div className='footerLinks grid'>
            {/* Group one */}
            <div data-aos="fade-up" data-aos-duration="3000" className='linkGroup'>
              <span className='groupTitle'>
                OUR AGENCY
              </span>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                Servies
              </li>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                Insurance
              </li>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                Agency
              </li>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                payment
              </li>

              {/* <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
              </li> */}
            </div>

            {/* Group Two */}
            <div data-aos="fade-up" data-aos-duration="4000" className='linkGroup'>
              <span className='groupTitle'>
                PARTNERS
              </span>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                Bookings
              </li>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                Rentalcars
              </li>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                HostelWorld
              </li>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                Trivago
              </li>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                Tripadvisor
              </li>

              {/* <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
              </li> */}
            </div>

            {/* Group Three */}
            <div data-aos="fade-up" data-aos-duration="5000" className='linkGroup'>
              <span className='groupTitle'>
                LAST MINUTE
              </span>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                Londan
              </li>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                California
              </li>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                Indonesia
              </li>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                Europe
              </li>

              <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
                Oceania
              </li>

              {/* <li className='footerlist flex'>
                <FiChevronRight className='icon'/>
              </li> */}
            </div>


          </div>

          <div className='footerDiv'>
            <small>BEST TRAVEL WEBSITE THEME </small>
            <small>COPYRIGHTS BY CHANDRU</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

