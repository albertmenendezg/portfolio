import React, { FC } from 'react'

interface ISkill {
    label: string,
    percent: number
}

const Skill: FC<ISkill> = ({ label, percent }) => {
    return (
        <div className='my-3'>
            <div className='w-full'>
                <span>{label}</span>
                <span className='float-right'>{percent}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${percent}%` }}></div>
            </div>
        </div>
    )
}

export default Skill