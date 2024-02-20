
import Nav from '../../components/Nav/Nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faCreditCard, faArrowsRotate, faDatabase } from '@fortawesome/free-solid-svg-icons';

function NewUserProfile() {
    const data =[
        {
        fileName :"AugBankStatement2500573c8a01082023pdf",
        startDate: 'O1 Aug 2023',
        endDate: 'O1 Aug 2024',
        authenicity:'verified'
    },
    {
        fileName :"AugDubaaiBankStatement2500573c8a01082023pdf",
        startDate: 'O1 Aug 2023',
        endDate: 'O1 Aug 2024',
        authenicity:'verified'
    },
    {
        fileName :"AugislamicBankStatement2500573c8a01082023pdf",
        startDate: 'O1 Aug 2023',
        endDate: 'O1 Aug 2024',
        authenicity:'verified'
    },
    {
        fileName :"AugBankStatement2500573c8a01082023pdf",
        startDate: 'O1 Aug 2023',
        endDate: 'O1 Aug 2024',
        authenicity:'verified'
    },
    {
        fileName :"AugDubaaiBankStatement2500573c8a01082023pdf",
        startDate: 'O1 Aug 2023',
        endDate: 'O1 Aug 2024',
        authenicity:'verified'
    },
    {
        fileName :"AugislamicBankStatement2500573c8a01082023pdf",
        startDate: 'O1 Aug 2023',
        endDate: 'O1 Aug 2024',
        authenicity:'verified'
    }
]
    return (
        <div className=' container bg-white h-full '>
            <Nav />

            <div className='container'>
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

                    {/* view 4 */}
                    <div>
                        
                        <div className=' flex w-full mt-4 justify-between bg-slate-50 py-4 px-4 shadow' >
                            <p className='text-black text-sm  w-1/4'>File name</p>
                            <p className="text-black text-xs">Start date </p>
                            <p className="text-black text-xs"> End date </p>
                            <p className="text-black text-xs"> Authentic </p>
                        </div>

{
    data.map((e: any)=>{
 return(
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

                </div>

            </div>
        </div>
    )
}

export default NewUserProfile
