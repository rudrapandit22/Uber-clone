import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-[url(https://images.unsplash.com/photo-1587307293162-2fb7a3ebfc75?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRyYWZmaWMlMjBsaWdodHxlbnwwfHwwfHx8MA%3D%3D)] h-screen pt-5  flex justify-between flex-col w-full bg-red-400'>
        <img className='w-18 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/5/58/Uber_logo_2018.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original" alt="" />
        <div className='bg-white py-5 px-5'>
            <h2 className='text-2xl font-bold' >Get started with Uber</h2>
            <Link to='/login' className='flex  item-center justify-center w-full bg-black text-white py-3 rounded mt-2'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
