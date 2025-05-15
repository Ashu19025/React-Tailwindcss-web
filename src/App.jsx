import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { motion } from "framer-motion";
import { BrowserRouter } from 'react-router-dom';
import { Link } from "react-router-dom";

function App() {

  return (
    <>
     <motion.section className="text-center h-screen w-full text-yellow-400 bg-black "
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      >
        <h1 className='text-4xl md:text-6xl py-10 font-bold max-w-4xl mx-auto  leading-tight'>Build Your Dream GameWeb
          <br className='hidden md:block' />
          <span className='realtive inline-block'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-400'>
              for those who are passionate about Gaming
            </span>
          </span>
        </h1>
        <p className='text-sm  mt-4 max-w-xl mx-auto font-bold bg-gradient-to-r from-white to-yellow-400 text-transparent bg-clip-text'>
          Come forward make this industry better and more
          accessible for everyone
        </p>
       
       <div className='mt-6'>
        <button className="text-black bg-amber-400 px-6 py-3 rounded-full text-sm font-semibold 
               transition-all duration-100 ease-in-out 
               hover:bg-amber-500 hover:scale-105 hover:shadow-lg">GetStarted</button>



            
       </div>

       {/* card list */}   
       <div className="flex flex-wrap justify-center gap-4 py-5">
      {/* Card 1 with Background Image */}
      <div
        className="max-w-sm w-full border border-gray-200 rounded-lg shadow-sm bg-cover bg-center bg-no-repeat realtive dark:border-gray-700 transition-all duration-100 ease-in-out hover:scale-105 hover:shadow-lg" 
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/32/29/f6/3229f619e2d24de546419c62d480cdc0.jpg') ",
        }}
      >
        <div className="p-5  rounded-lg">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-black  text-shadow-orange-100">Black Myth: Wukong</h5>
          </a>
          <p className="mb-3 font-bold">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <a
            href="https://www.heishenhua.com/"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
          </a>
        </div>
      </div>

      {/* Card 2 with Image */}
      <div className="max-w-sm w-full bg-yellow-500 border border-gray-200 rounded-lg shadow-sm">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="/docs/images/blog/image-1.jpg"
            alt="Blog post"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className="mb-3 font-normal text-black">
            Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Read more
          </a>
        </div>
      </div>
      </div>
       </motion.section>
    </>
  )
}

export default App
