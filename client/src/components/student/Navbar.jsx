import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { AppContext } from '../../context/AppContext'

const Navbar = () => {
  const { navigate, isEducator } = useContext(AppContext)

  const isCourseListPage = location.pathname.includes('/course-list');

  const { openSignIn } = useClerk()
  const { user } = useUser()

  return (
    <div className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-500 py-4 ${isCourseListPage ? 'bg-white' : 'bg-cyan-100/70'}`}>
      <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className='w-28 lg:w-32 cursor-pointer' />
      <div className='hidden md:flex items-center gap-5 text-gray-400'>
        <div className='flex items-center gap-5'>
          {user &&
            <>
              <button onClick={() => { navigate('/educator') }}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
              | <Link to='/my-enrollments'>My Enrollments</Link>
            </>}
        </div>
        {user ? <UserButton /> :
          <button onClick={() => openSignIn()} className='inline-flex items-center justify-center
         px-6 py-2.5
         rounded-full
         bg-gradient-to-r from-violet-600 via-indigo-600 to-indigo-700
       text-white text-sm font-semibold
         shadow-lg hover:shadow-xl transform hover:-translate-y-0.5
         transition-all duration-150 ease-in-out
         focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2'>Create Account</button>}
      </div>


      {/* For phone screens */}
      <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>

        <div className='flex items-center gap-1 sm:gap-2 max-sm:text-xs'>
          {user &&
            <>
              <button onClick={() => { navigate('/educator') }}>{isEducator ? 'Educator Dashboard' : 'Become Educator'}</button>
              | <Link to='/my-enrollments'>My Enrollments</Link>
            </>}
        </div>
        {
          user ? <UserButton />
            : <button onClick={() => openSignIn()}><img src={assets.user_icon} alt="" className='bg-blue-200 rounded-full' /></button>
        }

      </div>
    </div>
  )
}

export default Navbar