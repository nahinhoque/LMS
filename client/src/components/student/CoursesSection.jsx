import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'
import CourseCard from './CourseCard'

const CoursesSection = () => {

  const {allCourses} = useContext(AppContext)


  return (
    <div className='py-16 md:px-40 px-8'>
        <h2 className='text-3xl font-medium text-gray-800'>Learn From The Best</h2>
        <p className='text-sm md:text-base text-gray-500 mt-3'>Explore our premier courses across a wide spectrum—from coding and design to <br /> business and well-being—engineered to yield real-world results.</p>


        <div className='grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-4'>
          {allCourses.slice(0,4).map((course, index)=> <CourseCard key={index} course={course}/>)}
        </div>

        <Link to={'/course-list'} onClick={()=> scrollTo(0,0)}
         className='inline-flex items-center justify-center px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white text-sm font-semibold shadow-md hover:shadow-lg hover:opacity-95 transform transition duration-150 ease-in-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'>Show all courses</Link>
    </div>
  )
}

export default CoursesSection