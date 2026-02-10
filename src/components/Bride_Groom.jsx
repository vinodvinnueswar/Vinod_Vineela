import React from 'react'
import Bride_Img from '../assets/Images/Bride_Groom/Bride_Img.png'
import Groom_Img from '../assets/Images/Bride_Groom/Groom_Img.png'

const Bride_Groom = () => {
  return (
    <div className="Bride_Groom">
       <br /> <br /> <h2>Bride and Groom</h2>

        {/* Bride */}
        <div className="Bride">
            <img src={Bride_Img} alt="" />
            <h3>Vineela</h3> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus alias tempore consequuntur, eos ratione minus et doloremque aliquam perspiciatis sunt recusandae laudantium assumenda deserunt nostrum dicta voluptatem nam quaerat?</p>
        </div>

        {/* Groom*/}
        <div className="Bride">
            <img src={Groom_Img} alt="" />
            <h3>Venky</h3> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem temporibus alias tempore consequuntur, eos ratione minus et doloremque aliquam perspiciatis sunt recusandae laudantium assumenda deserunt nostrum dicta voluptatem nam quaerat?</p>
        </div>
    </div>
  )
}

export default Bride_Groom