import Image from 'next/image'
import React from 'react'
import logo from '../../../public/photo.png'
import {FaPhoneAlt} from 'react-icons/fa'
import {FiAtSign} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about' className='min-h-screen w-full pt-10 pb-20 px-5 flex flex-row border-b border-gray-900 rounded-md gap-x-16'>
        <div className='hidden md:w-1/2 h-100 md:flex bg-gray-700 rounded-xl items-center justify-center'>
            <Image 
                src={logo}
                alt='Albert Menéndez'
                className='p-24 rounded-full'
            />
        </div>
        <div className='md:w-1/2 h-100'>
            <h3 className='text-xl md:text-3xl font-bold'>Hi, I am Albert Menéndez Fullstack Developer.</h3>
            <p className='text-md md:text-xl mt-3 md:mt-8 text-justify'>
                Currently I am based in Barcelona with almost 2 year of web development experience and multiple projects developed for just learning while coding new languages or new software techniques.
                <br/>Very interested in new software architechtures like DDD, CQRS and Hexagonal patterns and also very focused on working with testing procedures like TDD.
            </p>
            <p className='mt-8'>You can contact with me in this ways.</p>
            <div className='mt-4 grid md:grid-cols-2 gap-4'>
                <div className='w-full py-5 bg-gray-700 rounded-xl flex items-center justify-center'>
                    <a href="tel:+34678630197" className='flex flex-col justify-center cursor-pointer'>
                        <FaPhoneAlt className='text-red-500 text-5xl cursor-pointer flex mx-auto'/>
                        <span className='mt-3'>(+34) 678630197</span>
                    </a>
                </div>
                <div className='w-full py-5 md:py-12 bg-gray-700 rounded-xl flex items-center justify-center'>
                    <a href='mailto:albertmenendezg@gmail.com' className='flex flex-col cursor-pointer'>
                        <FiAtSign className='text-red-500 text-5xl cursor-pointer flex mx-auto'/>
                        <span className='mt-3'>albertmenendezg@gmail.com</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About