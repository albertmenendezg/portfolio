import React from 'react'
import Skill from '../../Common/Skill/Skill'

const Skills = () => {
  return (
    <section id='skills' className='min-h-screen w-full pt-10 pb-20 px-5 flex flex-row border-b border-gray-900 rounded-md gap-4'>
      <div className='w-full'>
        <h1 className='text-5xl text-red-500 font-medium'>What are my skills?</h1>
        <div className='mt-5 flex flex-wrap'>
          <div className='w-full md:w-1/2 px-4 pt-2'>
            <h2 className='text-4xl text-center'>Frontend</h2>
            <Skill label='HTML' percent={80} />
            <Skill label='CSS3' percent={75} />
            <Skill label='TAILWIND' percent={85} />
            <Skill label='JAVASCRIPT' percent={95} />
            <Skill label='REACT' percent={85} />
            <Skill label='NEXTJS' percent={80} />
          </div>
          <div className='w-full md:w-1/2 px-4 pt-2'>
            <h2 className='text-4xl text-center'>Backend</h2>
            <Skill label='NODE' percent={85} />
            <Skill label='PHP' percent={100} />
            <Skill label='JAVA' percent={60} />
            <Skill label='SQL' percent={90} />
            <Skill label='Symfony' percent={95} />
            <Skill label='Express.js' percent={90} />
            <Skill label='Typescript' percent={90} />
          </div>
          <div className='w-full md:w-1/2 px-4 pt-2'>
            <h2 className='text-4xl text-center'>DevOps</h2>
            <Skill label='GIT' percent={90} />
            <Skill label='AWS' percent={65} />
            <Skill label='BITBUCKET' percent={65} />
            <Skill label='MYSQL' percent={100} />
            <Skill label='DOCKER' percent={75} />
            <Skill label='RABBITMQ' percent={80} />
          </div>
          <div className='w-full md:w-1/2 px-4 pt-2'>
            <h2 className='text-4xl text-center'>Software Patterns</h2>
            <Skill label='DDD' percent={90} />
            <Skill label='HEXAGONAL' percent={90} />
            <Skill label='CQRS' percent={80} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills