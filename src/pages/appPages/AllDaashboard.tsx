import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export default function AllDaashboard() {
    const SummaryView = (props: any) => {
        return (
            <div className=' flex border border-gray-400 px-6 h-18   w-3/12 py-2 px-4 rounded-md'>
                <div className=' p-4 rounded-md text-center bg-gray-100 items-center'>
                    <FontAwesomeIcon className=" h-5 w-5 text-gray-600" icon={props.icon} />
                </div>
                <div className=' px-6'>
                    <p className=' text-gray-500 text-base'>
                        {props.title}
                    </p>
                    <h2 className=' text-gray-500 text-2xl'>
                        {
                            props.total
                        }
                    </h2>
                </div>
            </div>
        )
    }
    return (
        <div className=' container h-screen   '>
            <div className=' flex justify-between'>
                <div>
                    <h1 className=' text-2xl font-semibold text-blue-800'>Dashboard</h1>
                    <p className=' text-base text-gray-400  '>
                        summary of your jobs, stats and activity
                    </p>
                </div>
                <button className=' bg-blue-800 px-6 rounded-xl'>
                    +  Add new job
                </button>
            </div>


            <div className=' flex justify-between mt-6'>
                <h1 className=' text-gray-800 text-2xl font-semibold'>
                    SUMMARY
                </h1>
                <button className='border border-gray-400 px-6 h-12 rounded-md'>
                    <p className='text-gray-600'>
                        More Details
                    </p>
                </button>
            </div>
            <div className=' flex justify-between mt-6'>
                <SummaryView icon={faHouse} title={'Total Jobs'} total={'0'} />
                <SummaryView icon={faHouse} title={'Total invaice value'} total={'AED 0'} />
                <SummaryView icon={faHouse} title={'Total payout process'} total={'AED 0'} />
            </div>
        </div>
    )
}
