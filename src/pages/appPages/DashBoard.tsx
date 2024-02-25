
import Nav from '../../components/Nav/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faRocket, faChartSimple, faCreditCard, faArrowsRotate, faDatabase } from '@fortawesome/free-solid-svg-icons';
import { BarChart } from '@mui/x-charts/BarChart';
function NewUserProfile() {
    const data = [
        {
            fileName: "AugBankStatement2500573c8a01082023pdf",
            startDate: 'O1 Aug 2023',
            endDate: 'O1 Aug 2024',
            authenicity: 'verified'
        },
        {
            fileName: "AugDubaaiBankStatement2500573c8a01082023pdf",
            startDate: 'O1 Aug 2023',
            endDate: 'O1 Aug 2024',
            authenicity: 'verified'
        },
        {
            fileName: "AugislamicBankStatement2500573c8a01082023pdf",
            startDate: 'O1 Aug 2023',
            endDate: 'O1 Aug 2024',
            authenicity: 'verified'
        },
        {
            fileName: "AugBankStatement2500573c8a01082023pdf",
            startDate: 'O1 Aug 2023',
            endDate: 'O1 Aug 2024',
            authenicity: 'verified'
        },
        {
            fileName: "AugDubaaiBankStatement2500573c8a01082023pdf",
            startDate: 'O1 Aug 2023',
            endDate: 'O1 Aug 2024',
            authenicity: 'verified'
        },
        {
            fileName: "AugislamicBankStatement2500573c8a01082023pdf",
            startDate: 'O1 Aug 2023',
            endDate: 'O1 Aug 2024',
            authenicity: 'verified'
        }
    ]

    const maxMiniData = [
        {
            label: 'Minimum daily balance     ',
            data: [
                2423, 2210, 764, 1879, 1478, 1373, 1891, 2171,
            ],
        },
        {
            label: 'Maximum daily balance',
            data: [
                2362, 2254, 1962, 1336, 586, 1069, 2194, 1629,
            ],
        }]

    const deptData = [
        {
            label: 'Debit',
            data: [
                2423, 2210, 764, 1879, 1478, 1373, 1891, 2171,
            ],
        },
        {
            label: 'Credit',
            data: [
                2362, 2254, 1962, 1336, 586, 1069, 2194, 1629,
            ],
        }]

        const fraudData =[
            {
            id:2,
            title:"Transection on holiday ",
            detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
        {
            id:3,
            title:"Transection on holiday ",
            detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        }, {
            id:5,
            title:"Transection on holiday ",
            detail:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        },
    ]
    return (
        <div className=' container bg-white h-full pb-10'>
            <Nav />
            <div className='container shadow-md pb-10'>
                <h1 className='text-xl text-black'>
                    New Seller Profile
                </h1>
                <div className='flex'>
                    <h6 className=' text-black'>Date : </h6>
                    <h6 className=' text-indigo-600 ml-2' > 18 January 2024.</h6>
                </div>
                {/* heading view */}
                <div>
                    <div className=' w-full mt-4 rounded-t-lg border border-indigo-200 h-12'>
                        <div className='flex ml-4 py-3'>
                            <FontAwesomeIcon className="mr-2 h-4 w-4 text-indigo-600" icon={faHouse} />
                            <p className='ml-2 text-sm  text-indigo-600 '>Company Details</p>
                        </div>
                    </div>
                    {/* detail view */}
                    <div className=' w-full mt-4 py-2 px-2 bg-slate-50 p-2 shadow' >
                        <h1 className='text-black text-2xl font-semibold'>B************</h1>
                        <p className="text-gray-500 text-sm">*************** Dubai Silcon Oasis PO ROX 502554 DURAI</p>
                    </div>
                </div>
                {/* view 2 */}
                <div>
                    <div className=' w-full mt-4 rounded-t-lg border border-indigo-200 h-12'>
                        <div className='flex ml-4 py-3'>
                            <FontAwesomeIcon className="mr-2 h-4 w-4 text-indigo-600" icon={faCreditCard} />
                            <p className='ml-2 text-sm  text-indigo-600 '>Bank Details</p>
                        </div>
                    </div>
                    {/* detail view */}
                    <div className=' flex w-full mt-4 justify-between bg-slate-50 py-4 px-4 shadow' >
                        <div className=''>
                            <h6 className='text-black text-sm '>IBAN</h6>
                            <p className="text-indigo-600 text-xs">АЕ6903300000197</p>
                        </div>
                        <div className=''>
                            <h6 className='text-black text-sm '>Bank Name</h6>
                            <p className="text-black text-xs">Dubai bank </p>
                        </div>
                        <div className=''>
                            <h6 className='text-black text-sm '>Account number</h6>
                            <p className="text-black text-xs"> 98********89 </p>
                        </div>
                    </div>
                </div>

                {/* view 3 */}
                <div>
                    <div className=' w-full mt-4 rounded-t-lg border border-indigo-200 h-12'>
                        <div className='flex ml-4 py-3'>
                            <FontAwesomeIcon className="mr-2 h-4 w-4 text-indigo-600" icon={faArrowsRotate} />
                            <p className='ml-2 text-sm  text-indigo-600 '>Assessment status</p>
                        </div>
                    </div>
                    {/* detail view */}
                    <div className=' flex w-full mt-4 justify-between bg-slate-50 py-4 px-4 shadow' >
                        <div className=''>
                            <h6 className='text-black text-sm '>Bank Statement Verification</h6>
                            <p className="text-indigo-600 text-xs">АЕ6903300000197</p>
                        </div>
                        <div className=''>
                            <h6 className='text-black text-sm '>Banking Data Extraction</h6>
                            <p className="text-black text-xs">Dubai bank </p>
                        </div>
                        <div className=''>
                            <h6 className='text-black text-sm '>Initial Application Screening</h6>
                            <p className="text-black text-xs"> 98********89 </p>
                        </div>
                        <div className=''>
                            <h6 className='text-black text-sm '>Actual</h6>
                            <p className="text-black text-xs"> 98********89 </p>
                        </div>
                    </div>



                </div>
                {/* view 4 table view */}
                <div>

                    <div className=' flex w-full mt-4 justify-between bg-slate-50 py-4 px-4 shadow' >
                        <p className='text-black text-sm  w-1/4'>File name</p>
                        <p className="text-black text-xs">Start date </p>
                        <p className="text-black text-xs"> End date </p>
                        <p className="text-black text-xs"> Authentic </p>
                    </div>

                    {
                        data.map((e: any) => {
                            return (
                                <div className=' flex w-full mt-4 justify-between bg-slate-50 py-4 px-4 shadow' >
                                    <p className='text-black text-sm  w-1/4'>{e.fileName}</p>
                                    <p className="text-black text-xs">{e.startDate}</p>
                                    <p className="text-black text-xs">{e.endDate}</p>
                                    <p className="text-black text-xs">{e.authenicity}</p>
                                </div>

                            )
                        })
                    }

                </div>

                {/* View 5  */}

                <div>
                    <div className=' w-full mt-4 rounded-t-lg border border-indigo-200 h-12'>
                        <div className='flex ml-4 py-3'>
                            <FontAwesomeIcon className="mr-2 h-4 w-4 text-indigo-600" icon={faRocket} />
                            <p className='ml-2 text-sm  text-indigo-600 '>Key banking Data</p>
                        </div>
                    </div>
                    <div className=' flex w-full mt-4 bg-slate-50 py-4 px-4 shadow' >
                        <div className=' w-1/2'>
                            <h6 className='text-black text-sm '>Last day balance</h6>
                            <p className="text-black font-semibold text-xl">AED 11,470.22</p>
                        </div>
                        <div className=''>
                            <h6 className='text-black text-sm '>Runway</h6>
                            <p className="text-black font-semibold text-xl">0.28 Months </p>
                        </div>

                    </div>

                </div>

                {/* View 5 chart views */}

                <div>
                    <div className=' w-full mt-4 rounded-t-lg border border-indigo-200 h-12'>
                        <div className='flex ml-4 py-3'>
                            <FontAwesomeIcon className="mr-2 h-4 w-4 text-indigo-600" icon={faChartSimple} />
                            <p className='ml-2 text-sm  text-indigo-600 '>Average Monthly Balance (AED)</p>
                        </div>
                    </div>
                    <div className=' justify-center flex'>
                        <BarChart
                            xAxis={[
                                {
                                    id: 'barCategories',
                                    data: ['May', 'June', 'July', "Aug", "Sept", "Oct", "Nov", "Dec"],
                                    scaleType: 'band',
                                },
                            ]}
                            colors={["#5465FF"]}
                            series={[
                                {
                                    data: [50000, 30000, 42000, 35000, 20000, 1000, 60000, 20000],
                                },
                            ]}
                            className=' p-4 w-full'
                            // width={1200}
                            height={500}
                        />
                    </div>
                </div>

                {/* View 6 daily balance chart views */}

                <div>
                    <div className=' w-full mt-4 rounded-t-lg border border-indigo-200 h-12'>
                        <div className='flex ml-4 py-3'>
                            <FontAwesomeIcon className="mr-2 h-4 w-4 text-indigo-600" icon={faChartSimple} />
                            <p className='ml-2 text-sm  text-indigo-600 '>Min & Max daily Balance</p>
                        </div>
                    </div>
                    <div className=' justify-center flex'>
                        <BarChart
                            colors={["#c3c4cc","#5465FF"]}

                            xAxis={[
                                {
                                    id: 'barCategories',
                                    data: ['May', 'June', 'July', "Aug", "Sept", "Oct", "Nov", "Dec"],
                                    scaleType: 'band',
                                },

                            ]}
                            series={maxMiniData}
                            className=' p-4 w-full'
                            // width={1200}
                            height={500}
                        />
                    </div>
                </div>


                {/* View 7 debt balance chart views */}

                <div>
                    <div className=' w-full mt-4 rounded-t-lg border border-indigo-200 h-12'>
                        <div className='flex ml-4 py-3'>
                            <FontAwesomeIcon className="mr-2 h-4 w-4 text-indigo-600" icon={faChartSimple} />
                            <p className='ml-2 text-sm  text-indigo-600 '>Total Debits & Credit</p>
                        </div>
                    </div>
                    <div className=' justify-center flex'>
                        <BarChart
                            xAxis={[
                                {
                                    id: 'barCategories',
                                    data: ['May', 'June', 'July', "Aug", "Sept", "Oct", "Nov", "Dec"],
                                    scaleType: 'band',
                                },

                            ]}
                            colors={["#CE7DF7","#5465FF"]}

                            series={deptData}
                            className=' p-4 w-full'
                            // width={1200}
                            height={500}
                        />
                    </div>
                </div>
                {/* view 8 frad activity */}


                <div>
                <div className=' w-full mt-4 rounded-t-lg border border-red-300 h-12'>
                        <div className='flex ml-4 py-3'>
                            <FontAwesomeIcon className="mr-2 h-4 w-4 text-red-600" icon={faChartSimple} />
                            <p className='ml-2 text-sm  text-red-600 font-semibold'>Possible Fraud indicator</p>
                        </div>
                    </div>
                <div className=' flex w-full mt-4 bg-slate-50 py-4 px-4 shadow' >
                        <p className='text-black text-sm w-20'>#</p>
                        <p className="text-black text-xs">Indicator </p>
                    </div>

                    {
                        fraudData.map((e: any) => {
                            return (
                                <div className=' flex w-full mt-4 j  bg-slate-50 py-4 px-4 shadow' >
                                    <p className='text-black text-sm w-20'>{e.id}</p>
                                    <div>
                                    <p className="text-red-600 text-base ">{e.title}</p>
                                    <p className="text-black text-xs">{e.detail}</p>
                                    </div>
                                </div>

                            )
                        })
                    }

                </div>

            </div>
        </div>
    )
}

export default NewUserProfile