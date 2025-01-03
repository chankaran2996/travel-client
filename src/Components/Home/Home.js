import React, {useEffect} from 'react'
import './home.css'
import viedo from '../../Assets/video.mp4'
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram ,FaTripadvisor} from "react-icons/fa";
import { BsListTask } from "react-icons/bs";
import{TbApps} from "react-icons/tb"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  // useEffect({
    // AOS.init({duration:2000})
    AOS.init({duration:2000});
  //   AOS.refresh();
  // },[])

  return (
    <section className='home'>
      <div className='overlay'></div>
      <video src={viedo} muted autoPlay loop type='viedo/mp4'></video>
      <div className='homeContent container'>
        <div className='textDiv'>
          <span data-aos="fade-up" className='smallText'>
            Our Packages
          </span>

          <h1 data-aos="fade-up" className='homeTitle'>
            Search your Holidays
          </h1>

        </div>

        <div data-aos="fade-up" className='cardDiv grid'>
          <div className='destinationInput'>
            <label htmlFor='city'>Search your destination</label>
            <div className='input flex'>
              <input type='text' placeholder='Enter city here....'/>
              <GrLocation className='icon'/>
            </div>
          </div>

          <div className='dateInput'>
            <label htmlFor='date'>Select your date:</label>
            <div className='input flex'>
              <input type='date'/>
            </div>
          </div>

          <div className='priceInput'>
            <div className='lableTotal flex'>
            <label htmlFor='price'>Max price:</label>
            <h3 className='total'>₹5000</h3>
            </div>
            
            <div className='input flex'>
              <input type='range' max={5000} min={1000}/>
            </div>
          </div>

          <div className='seachOptions flex'>
            <HiFilter className='icon'/>
            <span>MORE FILTER</span>
          </div>
        </div>

        <div data-aos="fade-up" className='homeFooterIcons flex'>
          <div className='rightIcons'>
            <FiFacebook className='icon'/>
            <FaInstagram className='icon'/>
            <FaTripadvisor className='icon'/>
          </div>

          <div className='leftIcons'>
            <BsListTask className='icon'/>
            <TbApps className='icon'/>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Home
