import React from 'react'
import { assets } from '../../assets/assets'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full md:pt-36 pt-20 px-7 md:px-0 space-y-7 text-center bg-gradient-to-b from-cyan-100/70'>

        <h1 className='md:text-home-heading-large text-home-heading-small relative font-bold text-gray-800 max-w-3xl mx-auto'>Empower Your Future with Tailored Courses Precisely <span className='text-blue-600'>Aligned to Your Goals.</span><img src={assets.sketch} alt="sketch" className='md:block hidden absolute -bottom-7 right-0'/></h1>

        <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>
          We accelerate your growth with carefully chosen content, expert mentors, practical projects, and credentials you can trust.
        </p>
        <p className='md:hidden text-gray-500 max-w-sm mx-auto'>
          We connect you with top mentors, immersive content, and a results-driven learning journey.
        </p>

        <SearchBar/>

    </div>
  )
}

export default Hero