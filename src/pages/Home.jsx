import React from 'react'
import Intro from '../components/Intro'
import Bride_Groom from '../components/Bride_Groom'
import Photo_Gallery from '../components/Photo_Gallery'
import Location from '../components/Location'
import Best_Wishes from '../components/Best_Wishes'

const Home = () => {
  return (
    <div className="Home">
        <Intro/>
        <Bride_Groom/>
        <Photo_Gallery/>
        <Location/>
        <Best_Wishes/>
    </div>
  )
}

export default Home