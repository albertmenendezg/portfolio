import React from 'react'

type TSection = {
    href: string,
    label: string
}

const sections:TSection[] = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/resume',
        label: 'resume'
    },
    {
        href: '/about',
        label: 'about'
    },
    {
        href: '/experience',
        label: 'experience'
    }
];

const Nav = () => {
    return (
        <nav className='py-10 mb-12 flex justify-between'>
            <ul className='flex items-center'>
                {
                    sections.map(({href, label}) => 
                        <li className='px-5 mx-2 bg-red-500 text-white rounded-xl'>
                            <a href={href}>{label}</a>
                        </li>
                    )
                }
            </ul>
        </nav>
    )
}

export default Nav