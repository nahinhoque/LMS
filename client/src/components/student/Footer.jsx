import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-900 md:px-36 text-left w-full mt-10'>

       <div className='flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30'>
         
          <div className='flex flex-col md:items-start items-center w-full'>
            <img src={assets.logo_dark} alt="logo" />
            <p className='mt-6 text-center md:text-left text-sm text-white/80'>A concise, user-friendly footer reinforces branding and provides essential navigation and accessibility. It includes quick links (About, Help, Contact, Privacy, Terms, Accessibility) and ends with a copyright notice, version details, and a small support link.</p>
          </div>
          <div className='flex flex-col md:items-start items-center w-full'>
            <h2 className='font-semibold text-white mb-5'>Company</h2>
            <ul className='flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2'>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
              
            </ul>
          </div>
          <div className='hidden md:flex flex-col items-start w-full'>
            <h2 className='font-semibold text-white mb-5'>Subscribe to our Newsletter</h2>
            <p className='text-sm text-white/80'>Receive the most recent news, articles, and resources directly in your email on a weekly basis.</p>
          <div className='flex items-center gap-2 pt-4'>
            <input type="email" placeholder='Enter your email' className='border border-gray-400/60 bg-gray-900 text-gray-100 placeholder-gray-400
            outline-none w-64 h-9 rounded-md px-3 text-sm
            transition-colors duration-150 ease-in-out
            focus:ring-2 focus:ring-blue-400 focus:ring-offset-0
          focus:border-blue-500'/>
            <button className='bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
           text-white font-semibold rounded-lg w-24 h-9
             shadow-md hover:shadow-lg hover:opacity-95
             transform transition duration-150 ease-in-out hover:scale-105
             focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'>Subscribe</button>
          </div>
          </div>
       </div>
       <p className='py-4 text-center text-xs md:text-sm text-white/60'>Copyright 2025 © EduPulse. All Right Reserved.</p>
    </footer>
  )
}

export default Footer