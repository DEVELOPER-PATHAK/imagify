import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import GeneateBtn from '../components/GeneateBtn'

const Home = () => {
  return (
    <div>
        <Header/>
        <Steps/>
        <Description/>
        <Testimonials/>
        <GeneateBtn/>

    </div>
  )
}

export default Home