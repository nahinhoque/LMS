import React from 'react'
import { assets } from '../../assets/assets'

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0'>
      <h1 className='text-xl md:text-4xl text-gray-800 font-semibold'>Learn anything, anytime, anywhere</h1>
      <p className='text-gray-500 sm:text-sm'>Incididunt sint fugiat pariatur cupidatat, consectetur sit amet, cillum anim id veniam aliqua proident, exercitation commodo do ea.
      </p>
      <div className='flex items-center font-medium gap-6 mt-4'>
        <button className='bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
       text-white font-semibold rounded-lg w-[100px] h-9  
         shadow-md hover:shadow-lg hover:opacity-95
         transform transition duration-150 ease-in-out hover:scale-105
         focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'>Get started</button>
        <button className='flex items-center gap-2'>Learn more <img src={assets.arrow_icon} alt="arrow_icon" /></button>
      </div>
    </div>
  )
}

export default CallToAction