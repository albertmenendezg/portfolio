import React from 'react'
import moment from 'moment'

type TExperience = {
  companyName: string,
  fromDate: Date,
  toDate?: Date,
  description: string
}

const experiences: TExperience[] = [
  {
    companyName: 'Foxize',
    fromDate: new Date('2021-09-01'),
    toDate: new Date('2022-10-10'),
    description: 'At foxize I was introduced to the real world of programming, they taught me the symfony php framework with which I am delighted to work to develop web applications. I also developed javascript code for the views and mysql for the database engine.'
  },
  {
    companyName: 'Feeder',
    fromDate: new Date('2022-10-11'),
    description: 'In Feeder I continue to develop in php Symfony but I also develop React javascript code for the client side and I have started to develop code beyond MVC, with design patterns such as DDD and microservices managed with RabbitMq, where I also develop other microservices with nodejs in typescript'
  }
]

const Experience = () => {
  return (
    <section id='experience' className='min-h-screen w-full pt-10 pb-20 px-5 flex flex-row border-b border-gray-900 rounded-md gap-4'>
      <div className='w-full'>
        <h1 className='text-5xl text-red-500 font-medium'>My Experience</h1>
        <div className='mt-5 w-1/2'>
          <ul>
            {
              experiences.map(({companyName, fromDate, toDate, description}) =>
                <li className='mb-5'>
                  <h2 className='text-3xl font-bold'>{companyName}</h2>
                  <h3 className='pl-5 text-2xl'>{moment(fromDate).format('MM/YYYY')} - {toDate ? moment(toDate).format('MM/YYYY') : 'Currently working'}</h3>
                  <p className='pl-5 mt-2'>
                    {description}
                  </p>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience