import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function Hotel() {

  const [slideNumber, setSliderNumber] = useState(0)
  const [open, setOpen] = useState(false)
  const photos = [
    {
      src:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" 
           
    },
    {
      src:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" 
           
    },
    {
      src:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" 
           
    },
    {
      src:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" 
           
    },
  
  {
    src:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60" 
         
  },
  {
    src:"https://images.unsplash.com/photo-1598035411675-bda029a6bd29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fHJvb21zJTIwaG90ZWx8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60" 
    
  }
]

const handleOpen = (i) => {
  setSliderNumber(i)
  setOpen(true);
}
const handleMove = (direction) => {
  let newSlideNumber;
  if(direction === "l") {
    newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
  } else {
    newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
  }
  setSliderNumber(newSlideNumber)
}
  return (
    <div>
     <Navbar />
     <Header type="list" />
     <div className="hotelContainer">
       {open && <div className="slider">
          <FontAwesomeIcon 
            icon={faCircleXmark} 
            className="close"
            onClick={()=>setOpen(false)}
          />
          <FontAwesomeIcon 
            icon={faCircleArrowLeft} 
            className="arrow" 
            onClick={()=>handleMove("l")}
            />
          <div className="sliderWrapper">
            <img src={photos[slideNumber].src} alt="phot" className="sliderImg" />
          </div>
          <FontAwesomeIcon 
            icon={faCircleArrowRight} 
            className="arrow" 
            onClick={()=>handleMove("r")}
            />
        </div>}
       <div className="hotelWrapper">
         <button className="bookNow">
           Reserve or Book now
         </button>
         <h1 className="hotelTitle">Grand hotel</h1>
         <div className="hotelAddress">
           <FontAwesomeIcon icon={faLocationDot}/>
           <span>Elton St. 125 New Yourk</span>
         </div>
         <span className="hotelDistance">
           Excellent location - 500m from center
         </span>
         <span className="hotelPriceHighLight">
           Book a stay over $114 at this property and get a free airport taxi
         </span>
         <div className="hotelImages">
            {photos.map((photo, i)=>(
              <div className="hotelImgWrapper">
                <img 
                  onClick={()=>handleOpen(i)} 
                  src={photo.src} 
                  alt="hotel" 
                  className="hotelImg" />
              </div>
            ))}
         </div>
         <div className="hotelDetails">
           <div className="hotelDetailsTexts">
             <h1 className="hotelTitle">Stay in the heart of Krakov</h1>
             <p className="hotelDesc">
               Located a 5-min walk from St.Florian's Gate in Krakow.Tower
               Street Apartments has accomodation with air Lorem, ipsum dolor 
               sit amet consectetur adipisicing elit. Dolore, molestiae hic 
               consequatur obcaecati id praesentium beatae recusandae quos earum 
               quasi, totam quia dolorum a! 
               Vitae reprehenderit in nihil aspernatur modi!
             </p>
           </div>
           <div className="hotelDetailsPrice">
             <h1>Perfect for a 9-night stay!</h1>
             <span>
               Located in the real heart of Krakow, this property
                has an excelent location score of 9.0!
             </span>
             <h2>
               <b>$945</b> (9 nights)
             </h2>
             <button>Reserve or Book Now!</button>
           </div>
         </div>
       </div>
       <MailList />
       <Footer />
     </div>
    </div>
  )
}

export default Hotel