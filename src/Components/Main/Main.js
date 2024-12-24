import React from 'react'
import './main.css'
import img1 from'../../Assets/img1.jpg'
import { HiOutlineLocationMarker ,HiOutlineClipboardCheck} from "react-icons/hi";

const data = [
  {
    id:1,
    imgUrl:img1,
    destTitle: "Bora Bora",
    loaction: "New Zealand",
    grade:"CULTURAL RELAX",
    fees:"₹700",
    description: "vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae"
  },
  {
    id:2,
    imgUrl:img1,
    destTitle: "Bora Bora",
    loaction: "New Zealand",
    grade:"CULTURAL RELAX",
    fees:"₹700",
    description: "vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae"
  },
  {
    id:3,
    imgUrl:img1,
    destTitle: "Bora Bora",
    loaction: "New Zealand",
    grade:"CULTURAL RELAX",
    fees:"₹700",
    description: "vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae"
  },
  {
    id:4,
    imgUrl:img1,
    destTitle: "Bora Bora",
    loaction: "New Zealand",
    grade:"CULTURAL RELAX",
    fees:"₹700",
    description: "vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitaef"
  },
  {
    id:5,
    imgUrl:img1,
    destTitle: "Bora Bora",
    loaction: "New Zealand",
    grade:"CULTURAL RELAX",
    fees:"₹700",
    description: "vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae"
  },
  {
    id:6,
    imgUrl:img1,
    destTitle: "Bora Bora",
    loaction: "New Zealand",
    grade:"CULTURAL RELAX",
    fees:"₹700",
    description: "vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae"
  },
  {
    id:7,
    imgUrl:img1,
    destTitle: "Bora Bora",
    loaction: "New Zealand",
    grade:"CULTURAL RELAX",
    fees:"₹700",
    description: "vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae"
  },
  {
    id:8,
    imgUrl:img1,
    destTitle: "Bora Bora",
    loaction: "New Zealand",
    grade:"CULTURAL RELAX",
    fees:"₹700",
    description: "vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae"
  },
  {
    id:9,
    imgUrl:img1,
    destTitle: "Bora Bora",
    loaction: "New Zealand",
    grade:"CULTURAL RELAX",
    fees:"₹700",
    description: "vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae"
  }
]

const Main = () => {
  return (
    <section className='main container section'>

      <div className='secTitle'>
        <h3 className='title'>
          Most visited destination
        </h3>
      </div>

      <div className='secContent grid'>
        {
          data.map((data)=>{
            return(
              <div key={data.id} className='singleDestination'>
                <div className='imgeDiv'>
                  <img src={data.imgUrl} alt=''/>
                </div>

                <div className='cardInfo'>
                  <h4 className='destTitle'>{data.destTitle}</h4>
                  <span className='continent flex'>
                    <HiOutlineLocationMarker className='icon'/>
                    <span className='name'>{data.loaction}</span>
                  </span>

                  <div className='fees flex'>
                    <div className='grade'>
                      <span>{data.grade}<small>+1</small></span>
                    </div>
                    <div className='price'>
                      <h5>{data.fees}</h5>
                    </div>
                  </div>

                  <div className='desc'>
                    <p>{data.description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS<HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
