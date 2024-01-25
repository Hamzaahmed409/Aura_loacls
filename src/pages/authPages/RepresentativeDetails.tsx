// @ts-nocheck 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useState } from "react";
import 'react-dropdown/style.css';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { signup, verify } from '@/services/api'; 
import OTPInput from "otp-input-react";
import Modal from 'react-modal'
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        width: '30%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#FFFFFF',
        zIndex: 1,
        padding: 50,
        borderRadius: 8,
    },
    overlay: {
        backgroundColor: 'rgb(0 0 0 / 80%)',
    },
};
export default function CompanyDetails() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [representativeDetails, setRepresentativeBankDetails] = useState({
        fullName: '',
        email: '',
        phone: '',

    });
    const [countryCode, setCountryCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [OTP, setOTP] = useState("");

    let bankDetails = localStorage.getItem('bankDetails');
    bankDetails = JSON.parse(bankDetails)
    let companyDetails = localStorage.getItem('companyDetails');
    companyDetails = JSON.parse(companyDetails)


    async function onSubmit() {
        setIsLoading(true)
        // if (phoneNumber && countryCode) {
        if (true) {
            const body = {
                company_name: companyDetails.details.companyName,
                trade_license_no: "123123",
                "date_of_incorporation": companyDetails.details.dateOfIncorporated,
                "annual_turnover": companyDetails.details.turnover,
                "business_category": companyDetails.details.Category,
                "credit_consent": true,
                "bank_name": bankDetails.bankDetails.bankName,
                "bank_iban": bankDetails.bankDetails.iban,
                "bank_account_number": bankDetails.bankDetails.accountNumber,
                "user_name": representativeDetails.fullName,
                "user_email": representativeDetails.email,
                "user_country_code": representativeDetails.phone,
                "user_mobile_no": countryCode,
                "terms_and_cond_agreed": true
            }
            signup(body).then((response: any) => {
                if (response.success) {
                    setModalIsOpen(true)
                    toast({
                        variant: 'default',
                        title: "Logged in successfully",
                        description: "Welcome to monstro!",
                    })
                } else {
                    toast({
                        variant: "destructive",
                        title: "Something went wrong!",
                        description: "Please, Contact support.",
                    })
                }
            }).catch((error: { response: { data: { message: any; }; }; }) => {
                setModalIsOpen(true)

                toast({
                    variant: "destructive",
                    title: "Error!",
                    description: error.response.data.message,

                })
            }).finally(() => {
                setIsLoading(false)
            });
        } else {
            setIsLoading(false)
            toast({
                variant: "destructive",
                title: "Something is missing!",
                description: "Email, Password are required to login",
            })
        }
    }



    async function verifyOtp() {
        if (true) {
            const body = {
                countryCode: 23,
                mobileNumber: 123123123,
                otp: 123
            }
            console.log(body);

            verify(body).then((response: any) => {
                if (response.success) {
                    onSubmit()
                    setModalIsOpen(false)
                    toast({
                        variant: 'default',
                        title: "Logged in successfully",
                        description: "Welcome to monstro!",
                    })
                } else {
                    toast({
                        variant: "destructive",
                        title: "Something went wrong!",
                        description: "Please, Contact support.",
                    })
                }
            }).catch((error: { response: { data: { message: any; }; }; }) => {

                toast({
                    variant: "destructive",
                    title: "Error!",
                    description: error.response.data.message,

                })
            }).finally(() => {
                setIsLoading(false)
            });
        } else {
            setIsLoading(false)
            toast({
                variant: "destructive",
                title: "Something is missing!",
                description: "Email, Password are required to login",
            })
        }
    }


    return (
        <>
            <div className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0 h-screen max-md:flex bg-slate-50">
                <div className="lg:col-span-1 px-6 md:px-10 lg:px-20 relative hidden h-full flex-col bg-muted p-4 md:p-10 text-white lg:flex">
                    <div className="absolute inset-0 bg-white " />
                    <div className="block z-0" >
                        <img
                            src="/AURA.png"
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
                            src="/FrameReister.png"
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
                                onChange={(e) => {
                                    setRepresentativeBankDetails(prevState => ({
                                        ...prevState,
                                        fullName: e.target.value,
                                    }));
                                }}
                                required
                                placeholder=" Input representative full name"
                                className=" bg-white mt-2  text-slate-800 px-2 field-border-color rounded-lg h-10 border-2  sm: w-11/12 md:w-3/5" type="text" />
                        </div>

                        <div>
                            <h3 className="  text-blue-900 text-lg">
                                Email
                            </h3>
                            <input
                                onChange={(e) => {
                                    setRepresentativeBankDetails(prevState => ({
                                        ...prevState,
                                        email: e.target.value,
                                    }));
                                }}
                                placeholder=" Input representative email"
                                required
                                className=" bg-white mt-2  text-slate-800 px-2 field-border-color rounded-lg h-10 border-2  sm: w-11/12 md:w-3/5" type="text" />
                        </div>
                        <div>
                            <h3 className="  text-blue-900 text-lg flex">
                                Phone  <p className=' text-slate-500 text-sm mt-1 font-normal ml-2 '>(Use for Login)</p>
                            </h3>
                            <PhoneInput
                                defaultCountry="ae"
                                value={phone}
                                onChange={(phone, country) => {
                                    setCountryCode(country?.dialCode)
                                    setRepresentativeBankDetails(prevState => ({
                                        ...prevState,
                                        phone: phone,
                                    }))
                                }
                                }


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
                            <button onClick={() => {
                                // navigate('/terms-&-conditions')
                                setModalIsOpen(true)
                            }} className=' justify-self-end bg-slate-400  w-40 items-center h-10 rounded-lg'>COUNTINUE</button>
                        </div>
                    </div>
                </div>
            </div>


            <Modal
                isOpen={modalIsOpen}
                // onAfterOpen={afterOpenModal}
                // onRequestClose={setIsOpen}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className=' '>
                    <button onClick={() => {
                        setModalIsOpen(false)

                    }} className='absolute top-6 text-2xl right-8 text-black'>

                        <img
                            src="/close.png"
                            width={16}
                            height={18}
                            alt="Authentication"
                            className="hidden dark:block mb-2"
                        />
                    </button>
                    <div className='container relative flex flex-col items-center'>

                        <h1 className='mb-4 text-2xl font-semibold text-black text-center'>Enter Verification Code</h1>
                        <p className='text-center text-black'>Enter the 5 digit verification code sent to your mobile</p>
                        <p className='text-center text-black'>number ********6152</p>

                        <div className='flex flex-col items-center mt-8'>

                            <OTPInput className='text-black ' placeholder="****" value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" secure />
                            <button className='mt-2 color-primary'>Resend Code</button>
                        </div>

                        <button onClick={() => {
                            setModalIsOpen(false)
                            verifyOtp()
                        }} className='self-center w-10/12 items-center h-10 button rounded-lg mt-8'>VERIFY</button>
                    </div>
                </div>
            </Modal>
        </>
    )
}