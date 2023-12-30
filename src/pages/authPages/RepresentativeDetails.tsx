import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useState } from "react";
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';

export default function CompanyDetails() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    return (
        <>
            <div className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0 h-screen max-md:flex bg-slate-50">
                <div className="lg:col-span-1 px-6 md:px-10 lg:px-20 relative hidden h-full flex-col bg-muted p-4 md:p-10 text-white lg:flex">
                    <div className="absolute inset-0 bg-white " />
                    <div className="block z-0" >
                        <img
                            src="../../../public/AURA.png"
                            width={100}
                            alt="Authentication"
                            className="hidden dark:block "
                        />
                    </div>
                    <div className="block z-0 my-20">
                        <div className="flex my-2 ">
                            <div className="flex items-center justify-center rounded-full    w-6 px-3 mx-6">
                                <FontAwesomeIcon className='text-green-500 ' size='2x' icon={faCircleCheck} />
                            </div>
                            <h1 className="text-muted-foreground font-semibold">COMPANY DETAILS</h1>
                        </div>
                        <div className="border-l border-green-500  h-8 mx-9"></div>

                        <div className="flex my-2 ">
                            <div className="flex items-center justify-center rounded-full   w-6 px-3 mx-6">
                                <FontAwesomeIcon className='text-green-500 ' size='2x' icon={faCircleCheck} />

                            </div>
                            {/* Vertical Line */}
                            <h1 className="text-muted-foreground font-semibold">COMPANY BANK DETAILS</h1>
                        </div>
                        <div className="border-l border-green-500 h-8 mx-9"></div>
                        <div className="flex my-2">
                            <div className="flex items-center justify-center rounded-full border-color border-2 w-8 h-8 px-3 mx-5">
                                <h1 className="color-primary">3</h1>
                            </div>
                            {/* Vertical Line */}
                            <h1 className="color-primary font-semibold">REPRESENTATIVE DETAILS </h1>
                        </div>
                        <div className="border-l border-gray-300 h-8  mx-9"></div>

                        <div className="flex my-2">
                            <div className="flex items-center justify-center rounded-full border-gray-300 text-blue-900 border-2 w-8 h-8 px-3 mx-5">
                                <h1 className="text-muted-foreground">4</h1>
                            </div>  {/* Vertical Line */}
                            <h1 className="color-secondary font-semibold">TERMS & CONDITIONS</h1>
                        </div>
                    </div>
                    <div>
                    </div>
                    <div className="absolute left-10 bottom-0  bg-white block z-0 ">
                        <img
                            src="../../../public/FrameReister.png"
                            alt="Authentication"
                            width={900}
                        />
                    </div>
                </div>


                <div className="lg:col-span-2 w-full items-center justify-center background-color h-full pt-32">
                    <div className="flex w-full flex-col py-6 md:py-16 px-4 md:px-10 lg:px-20 justify-center space-y-6">
                        <div>
                            <h1 className="block z-0  text-blue-900 text-2xl font-semibold">
                                Representative Details
                            </h1>
                            <p className=" mt-2 text-blue-900 text-sm" >
                                This person wil be our point o contact at ecoscope innovations in case we need to get in touch.
                            </p>
                        </div>
                        <div>
                            <h3 className="  text-blue-900 text-lg">
                                Full name
                            </h3>
                            <input
                                required
                                placeholder=" Input representative full name"
                                className=" bg-white mt-2  text-slate-800 px-2 field-border-color rounded-lg h-10 border-2  sm: w-11/12 md:w-3/5" type="text" />
                        </div>

                        <div>
                            <h3 className="  text-blue-900 text-lg">
                                Email
                            </h3>
                            <input
                                placeholder=" Input representative email"
                                required
                                className=" bg-white mt-2  text-slate-800 px-2 field-border-color rounded-lg h-10 border-2  sm: w-11/12 md:w-3/5" type="text" />
                        </div>
                        <div>
                            <h3 className="  text-blue-900 text-lg">
                                Phone
                            </h3>
                            <PhoneInput
                                defaultCountry="ae"
                                value={phone}
                                onChange={(phone) => setPhone(phone)}
                                className="border-neutral-200  sm: w-11/12 md:w-3/5 "
                            />

                            {/* <input
                                placeholder=" Input your company account number"
                                className=" bg-white mt-2  border-neutral-200 rounded-lg h-9 border-2  sm:w-3/6  w-3/5" type="text" /> */}
                        </div>


                        <div className="flex sm:w-3/6  md:w-3/5 items-center  justify-end">
                            <button onClick={() => navigate(-1)} className="mx-8 self-center color-primary ">
                                BACK
                            </button>
                            <button onClick={()=>{
                                navigate('/terms-&-conditions')
                                
                            }} className=' justify-self-end bg-slate-400  w-40 items-center h-10 rounded-lg'>COUNTINUE</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}