import React from 'react'
import Gold_Line from '../assets/Images/Gold_TagLine2.png'

const Intro = () => {
  return (
    <div className="Intro_Container">
        <div className="text">
        <h2>The Wedding of</h2>
        <h1>Venky & <br /> Vineela</h1>
        </div>
         
         <div className="Gold_Line">
            <img src={Gold_Line} alt="" />
         </div>

        <div className="Quoate">
            <p>Two hearts, one promise, forever begins.</p>
        </div>

        <br />
         
         <div className="Date">
            <h3>Save the Date</h3> <br />
            <p>Sunday, 30th June 2025 <br />
               at 11:00 A.M
            </p>
         </div>

         <br />

         <div className="Place">
            <h3>Royal Palace,</h3>
            <p>456 Wedding lane , <br />
               Hyderabad.
            </p>
         </div>

        <div className="Gold_Line2">
            <img src={Gold_Line} alt="" />
        </div>
        
        <br />

        <div className="text1">
            <p>Join us for our special day <br />
               as we celebrate our Love <br />
               with family and friends.
            </p>
        </div>

    </div>
  )
}

export default Intro