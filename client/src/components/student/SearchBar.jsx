import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({data}) => {

  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data : '')

  const onSearchHandler = (e)=>{
    e.preventDefault()
    navigate('/course-list/' + input)
  }


  return (
    
        <form onSubmit={onSearchHandler} className='max-w-xl w-full md:h-14 h-12 flex items-center bg-white border border-gray-500/20 rounded'>
          <img src={assets.search_icon} alt="search_icon" className='md:w-auto w-10 px-3'/>
          <input onChange={e => setInput(e.target.value)} value={input}
           type="text" placeholder='Search for courses' className='w-full h-full outline-none text-gray-500/80'/>
          <button type='submit' className='inline-flex items-center justify-center
      md:px-8 px-6
      md:py-3 py-2
      mx-1
      rounded-md
      bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
      text-white text-sm font-semibold
      shadow-md hover:shadow-lg hover:scale-105 hover:opacity-95
      transition transform duration-150 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2'>Search</button>
        </form>
   
  )
}

export default SearchBar