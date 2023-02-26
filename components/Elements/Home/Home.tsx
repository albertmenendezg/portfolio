import Image from 'next/image';
import React from 'react'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai';
import { BsPersonFill } from 'react-icons/bs';
import { useTypewriter, Cursor} from 'react-simple-typewriter'
import logo from '../../../public/photo.png'
import {Link} from 'react-scroll';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

const Home = () => {

    const router = useRouter()
    
    const [text] = useTypewriter({
        words: ["Backend Developer.", "DevOps Administrator." ,"Tech Apasionated.", "Frontend Developer."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000
    });

    const TwitterUrl = 'https://twitter.com/albertmenendezg'
    const LinkedInUrl = 'https://www.linkedin.com/in/albert-menendez-gonzalez/'
    const GitHubUrl = 'https://github.com/albertmenendezg'
    
    return (
        <section id='home' className='min-h-screen w-full pt-20 pb-40 px-5 flex flex-row border-b border-gray-900 rounded-md gap-4'>
            <div className='md:w-1/2 flex flex-col gap-24'>
                <div className='flex flex-col gap-2 md:gap-8'>
                    <h4 className='text-md md:text-2xl font-normal'>Welcome to my Portfolio</h4>
                    <h1 className='text-xl md:text-6xl font-bold'>
                        Hi, I am {""}
                        <span className='text-red-500'>{"<Albert Menéndez>"}</span>
                    </h1>
                    <h2 className='text-xl md:text-4xl font-bold'>
                        a <span>{text}</span>
                        <Cursor cursorBlinking={true} cursorColor='#ef4444' />
                    </h2>
                    <p className='text-md md:text-xl md:w-1/2 text-justify'>Focused in writting clean and efficient code and love finding out new software techniques.</p>
                </div>
                <div className='w-full'>
                    <h3 className='text-center mb-5 text-xl uppercase'>You can find me in</h3>
                    <div className='flex flex-row gap-10 justify-evenly'>
                        <NextLink href={TwitterUrl} target='_blank'>
                            <AiFillTwitterCircle className='text-5xl md:text-7xl cursor-pointer'/>
                        </NextLink>
                        <NextLink href={LinkedInUrl} target='_blank'>
                            <AiFillLinkedin className='text-5xl md:text-7xl cursor-pointer' />
                        </NextLink>
                        <NextLink href={GitHubUrl} target='_blank'>
                            <AiFillGithub className='text-5xl md:text-7xl cursor-pointer' />
                        </NextLink>
                    </div>
                </div>
                <div className='flex mx-auto text-xl md:text-3xl py-4 px-7 bg-red-500 rounded hover:text-black'>
                    <Link
                        to='about'
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className='flex flex-row items-center cursor-pointer'
                    >
                        <BsPersonFill />
                        <span className='ml-3'>More About Me</span>
                    </Link>
                </div>
            </div>
            <div className='hidden md:flex w-1/2 h-100 items-center justify-center overflow-hidden'>
                <Image 
                    src={logo} 
                    alt='Albert Menéndez'
                    className='rounded-full' 
                />
            </div>
        </section>
    )
}

export default Home