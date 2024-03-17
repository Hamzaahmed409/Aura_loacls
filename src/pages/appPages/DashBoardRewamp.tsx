import React from 'react'
// import '../../styles/styles.css'
import ProgressBar from "@ramonak/react-progress-bar";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWarning, faSearch, faHouse } from '@fortawesome/free-solid-svg-icons';
function DashBoardRewamp() {
    const invoices = [
        {
            jobName: "INV001",
            Buyer: "Xyz",
            estCompletion: "xyv",
            grossAmount: "123 $",
            aureFee: "123 $",
            netAmount: "123 $",
            Status: 'true'
        },

    ]
    const blog = [{
        image: 'https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?t=st=1710695109~exp=1710698709~hmac=16ba805684b310cbfc233983d9066888271ad056a076c270e0d57b3ca8966a7b&w=996',
        title: 'Get Started with Aura',
        description: 'How do you create compelling presentations that wow your colleagues and impress your'
    },
    {
        image: 'https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?t=st=1710695109~exp=1710698709~hmac=16ba805684b310cbfc233983d9066888271ad056a076c270e0d57b3ca8966a7b&w=996',
        title: 'Get Started with Aura',
        description: 'How do you create compelling presentations that wow your colleagues and impress your'
    }, {
        image: 'https://img.freepik.com/free-photo/technology-communication-icons-symbols-concept_53876-120314.jpg?t=st=1710695109~exp=1710698709~hmac=16ba805684b310cbfc233983d9066888271ad056a076c270e0d57b3ca8966a7b&w=996',
        title: 'Get Started with Aura',
        description: 'How do you create compelling presentations that wow your colleagues and impress your'
    },
    ]
    const SummaryView = (props: any) => {
        return (
            <div className=' flex border  border-gray-300  h-18 w-1/3 mr-6 py-2 px-4 rounded-md'>
                <div className='  p-2 h-10 rounded-md text-center button items-center text-center mt-2'>
                    <FontAwesomeIcon className=" h-5 w-5 text-white" icon={props.icon} />
                </div>
                <div className=' px-6'>
                    <p className=' text-gray-500 text-base'>
                        {props.title}
                    </p>
                    <h2 className=' text-black text-2xl font-medium'>
                        {
                            props.total
                        }
                    </h2>
                </div>
            </div>
        )
    }
    const DetailCard = (props) => {
        return (
            <div className=' mt-8 w-1/4 ' >
                <div className=' bg-red-500 rounded-md h-8 w-8 text-center'>
                    <FontAwesomeIcon className=" h-5 w-5 text-white  py-1 " icon={faWarning} />
                </div>
                <h1 className='text-lg mt-2 text-black font-semibold'>{props.title}</h1>
                <p className=' text-sm  text-gray-600 mt-2  w-3/4'>{props.details}</p>

                <h2 className='mt-4 text-base  font-semibold color-primary'>
                    Add bank statements →
                </h2>
            </div>
        )
    }

    const Blog = (props) => {
        return (
            <div className=' mt-4  mx-2  py-4 px-4 w-1/3 rounded bg-slate-100'>

                <img src={props.items.image} className=' h-64 w-70 rounded-sm' />
                <h1 className='text-black text-2xl font-medium '>{props.items.title}</h1>
                <p className='text-black text-sm  '>{props.items.description}</p>

            </div>
        )
    }

    return (
        <div className=' container h-fit w-full bg-white'>
            <div className=' flex justify-between'>
                <div>
                    <h1 className='text-2xl text-black font-semibold'>Welcome, Olivia</h1>
                    <p className=' text-sm  text-gray-600 mt-2'>Manage your job, client & money with Aura</p>
                </div>

                <div className='button h-10 rounded-md items-center text-center px-4 py-2 '>
                    <h3 className=' text-base text-white '>+ Add new job</h3>
                </div>
            </div>
            <div className='  mt-8 border border-gray-200  rounded py-4'>
                <div className='flex justify-between px-4'>
                    <div className=''>
                        <div className=' flex'>
                            <h1 className='text-lg text-black font-semibold'>You've almost there</h1>
                            <div className=' rounded-2xl bg-red-100 h-6 px-4 mt-1 mx-2 border border-red-600'>
                                <p className='text-sm text-red-500 '>Important</p>

                            </div>
                        </div>
                        <p className=' text-sm  text-gray-600 mt-2'>Manage your job, client & money with Aura</p>
                    </div>
                    <div className=''>
                        <ProgressBar completed={60} maxCompleted={100} className=' w-60 h-4' bgColor='red' />
                    </div>
                </div>

                <div className=' flex border-t mt-2 border-gray-200 px-4'>
                    <DetailCard title={'Company bank details'} details={"This helps us understand your company's financial"} />
                    <DetailCard title={'Company bank details'} details={"This helps us understand your company's financial"} />
                    <DetailCard title={'Company bank details'} details={"This helps us understand your company's financial"} />
                    <DetailCard title={'Company bank details'} details={"This helps us understand your company's financial"} />

                </div>
            </div>

            <div className=' flex mt-10'>
                <SummaryView icon={faHouse} title={'Total Jobs'} total={'0'} />
                <SummaryView icon={faHouse} title={'Total invaice value'} total={'AED 0'} />
                <SummaryView icon={faHouse} title={'Total payout process'} total={'AED 0'} />
            </div>
            <div className='mb-10 flex flex-col justify-between'>

                <div className=''>

                    <div className=' flex justify-between mt-6'>
                        <h2 className=' text-black mt-4 mb-4 font-semibold'>
                            Your job list
                        </h2>
                        <div className=' flex border-2 rounded-md border-gray-200  h-8 items-center px-2'>
                            <FontAwesomeIcon className=" h-5 w-5 text-gray-400" icon={faSearch} />
                            <input
                                required
                                type="text"
                                placeholder='Search'
                                className=' text-gray-600'
                            />
                        </div>
                    </div>

                    <div className='border rounded-bl rounded-br w-full border-gray-200 min-h-96'>
                        <Table className=''>
                            <div className='h-96 w-full'>
                                <TableHeader className='w-full'>
                                    <TableRow className='border rounded-tl-md rounded-tr-md border-gray-200 h-10'>
                                        <TableHead className="w-2/12">Job name</TableHead>
                                        <TableHead className="w-2/12">Buyer</TableHead>
                                        <TableHead className='w-1/12'>Est completion</TableHead>
                                        <TableHead className="w-1/12">Gross Amount</TableHead>
                                        <TableHead className="w-1/12">Aure fee</TableHead>
                                        <TableHead className="w-1/12">Net amount</TableHead>
                                        <TableHead className="w-1/12">Status</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody className=' '>
                                    {invoices?.map((invoice) => (
                                        <TableRow key={invoice.jobName}>
                                            <TableCell className="text-gray-500">{invoice.jobName}</TableCell>
                                            <TableCell className="text-gray-500">{invoice.Buyer}</TableCell>
                                            <TableCell className='text-gray-500'>{invoice.estCompletion}</TableCell>
                                            <TableCell className='text-gray-500'>{invoice.grossAmount}</TableCell>
                                            <TableCell className="text-gray-500">{invoice.aureFee}</TableCell>
                                            <TableCell className="text-gray-500">{invoice.netAmount}</TableCell>
                                            <TableCell className="text-gray-500">{invoice.Status}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </div>

                        </Table>

                        {invoices.length === 0 ? (
                            <div className=' m-20 text-center  '>
                                <div className=''>
                                    <img
                                        src='../../../public/undraw_add_notes_re_ln36 1.png'
                                        className=' w-30 block mx-auto'
                                    />
                                </div>
                                <p className='text-md mt-4 text-gray-800 font-medium'>
                                    No projects found
                                </p>
                                <p className='text-sm  text-gray-500'>
                                    Your search "Landing page design" did not match
                                </p>
                                <p className='text-sm  text-gray-500'>
                                    any projects. Please try again,
                                </p>
                                <button className='bg-blue-600 h-12 px-4 rounded-2xl mt-2'>
                                    + Add new Job
                                </button>
                            </div>
                        ) : (
                            <div className=' flex justify-between mx-4  my-4'>
                                <h1 className=' text-gray-500 '>Page {1} of {1} </h1>
                                <div className=' flex'>
                                    <button className=' border rounded border-gray-400 text-gray-600 text-sm mx-2 px-2 '>
                                        Previous
                                    </button>
                                    <button className=' border rounded border-gray-400 text-gray-600 text-sm mx-2 px-2 '>
                                        Next
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

            </div>

            <div className='mb-10'>
                <h2 className=' color-primary mt-4 font-semibold'>
                    Onboarding
                </h2>
                <h1 className=' mt-4 text-2xl font-medium text-black'>
                    Related blog to boost your knowledge on Aura
                </h1>
                <div className=' flex grow '>
                    {
                        blog.map((e) => {
                            return (
                                <Blog items={e} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default DashBoardRewamp
