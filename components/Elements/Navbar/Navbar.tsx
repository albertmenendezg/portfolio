import React from 'react'
import {Link} from 'react-scroll';

type TSection = {
    link: string,
    label: string
}

const sections:TSection[] = [
    {
      link: 'home',
      label: 'home'  
    },
    {
        link: 'about',
        label: 'about'
    },
    {
        link: 'skills',
        label: 'skills'
    },
    {
        link: 'experience',
        label: 'experience'
    },
];

const Navbar = () => {
    return (
        <div className='"w-full h-24 sticky top-0 z-50 bg-gray-800 mx-auto flex justify-between items-center font-titleFont border-b border-b-gray-600'>
            <nav className='flex justify-end w-full'>
                <ul className='flex flex-row'>
                    {
                        sections.map(({link, label}) => 
                            <li key={link} className='mx-7 text-white rounded-xl cursor-pointer capitalize hover:text-red-500 font-medium hover:underline decoration-2 underline-offset-2'>
                                <Link
                                    to={link}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {label}
                                </Link>
                            </li>
                        )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Navbar