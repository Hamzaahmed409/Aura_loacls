import {PhoneInput} from 'react-international-phone';
import 'react-international-phone/style.css';
import {useState} from "react";
import 'react-dropdown/style.css';
import {useNavigate} from 'react-router-dom';
import {toast} from '@/components/ui/use-toast';
import {VerifySignupDto} from "@/services/api/models/VerifySignupDto";
import {OtpDto} from "@/services/api/models/OtpDto";
import {AuthService} from "@/services/api/services/AuthService";
import OTPInput from "otp-input-react";
import Modal from 'react-modal'

const {authControllerSendOtp, authControllerVerifyMobile} = AuthService;

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
    }, overlay: {
        backgroundColor: 'rgb(0 0 0 / 80%)',
    },
};
export default function RepresentativeDetails() {
    const navigate = useNavigate();
    const [phone, setPhone] = useState('');
    const [representativeDetails, setRepresentativeDetails] = useState({
        fullName: '', email: '', phone: '',
    });
    const [countryCode, setCountryCode] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [OTP, setOTP] = useState("");

    async function verifyOtp() {
        const verifySignupDto: VerifySignupDto = {
            country_code: countryCode,
            mobile_number: phone.slice(countryCode.length),
            otp: OTP,
            name: representativeDetails.fullName,
            email: representativeDetails.email,
        };

        try {
            const response = await authControllerVerifyMobile(verifySignupDto);
            if (response.message === "OTP verified successfully") {
                setModalIsOpen(false);
                toast({
                    variant: "default", title: "OTP Verified",
                });
                localStorage.setItem('representativeDetails', JSON.stringify({
                    user_id: response.user_id, seller_id: response.seller_id,
                }));
                navigate('/company-bank-details')
            }
        } catch (error) {
            setOTP('');
            setModalIsOpen(true);
            toast({
                variant: "destructive", title: "Error!", description: "Failed to verify OTP. Please try again.",
            });
        }
    }

    async function sendOtp() {
        const otpDto: OtpDto = {
            country_code: countryCode, mobile_number: phone.slice(countryCode.length),
        };
        try {
            const response = await authControllerSendOtp(otpDto);
            if (response.message === "OTP sent successfully") {
                setModalIsOpen(true);
                toast({
                    variant: "default", title: "OTP Sent",
                })
            }
        } catch (error) {
            setModalIsOpen(false);
            toast({
                variant: "destructive", title: "Error!", description: error.body.message,
            });
        }
    }


    return (<>
        <div
            className="container relative hidden flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-3 lg:px-0 h-screen max-md:flex bg-slate-50">
            <div
                className="lg:col-span-1 px-6 md:px-10 lg:px-20 relative hidden h-full flex-col bg-muted p-4 md:p-10 text-white lg:flex">
                <div className="absolute inset-0 bg-white "/>
                <div className="block z-0">
                    <img
                        src="/AURA.png"
                        width={100}
                        alt="Authentication"
                        className="hidden dark:block "
                    />
                </div>
                <div className="block z-0 my-20">
                    <div className="flex my-2 ">
                        <div
                            className="flex items-center justify-center rounded-full border-color color-primary border-2 w-6 px-3 mx-6">
                            <h1 className="color-primary">1</h1>
                        </div>

                        <h1 className="color-primary font-semibold">REPRESENTATIVE DETAILS</h1>
                    </div>
                    <div className="border-l border-gray-300 h-8 mx-9"></div>

                    <div className="flex my-2 ">
                        <div
                            className="flex items-center justify-center rounded-full border-gray-300 text-blue-900 border-2 w-6 px-3 mx-6">
                            <h1 className="text-muted-foreground">2</h1>
                        </div>
                        {/* Vertical Line */}
                        <h1 className="color-secondary font-semibold">COMPANY BANK DETAILS</h1>
                    </div>
                    <div className="border-l border-gray-300 h-8 mx-9"></div>
                    <div className="flex my-2">
                        <div
                            className="flex items-center justify-center rounded-full border-gray-300 text-blue-900 border-2 w-6 px-3 mx-6">
                            <h1 className="text-muted-foreground">3</h1>
                        </div>
                        {/* Vertical Line */}
                        <h1 className="color-secondary font-semibold">COMPANY DETAILS</h1>
                    </div>
                    <div className="border-l border-gray-300 h-8  mx-9"></div>

                    <div className="flex my-2">
                        <div
                            className="flex items-center justify-center rounded-full border-gray-300 text-blue-900 border-2 w-6 px-3 mx-6">
                            <h1 className="text-muted-foreground">4</h1>
                        </div>
                        {/* Vertical Line */}
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
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        sendOtp()
                    }}>
                        <div style={{marginBottom: "10px"}}>
                            <h1 className="block z-0  text-blue-900 text-2xl font-semibold">
                                Representative Details
                            </h1>
                            <p className=" mt-2 text-blue-900 text-sm">
                                This person will be our point of contact for the account
                            </p>
                        </div>
                        <div style={{marginTop: "5px", marginBottom: "5px"}}>
                            <h3 className="  text-blue-900 text-lg">
                                Full Name
                            </h3>
                            <input
                                onChange={(e) => {
                                    setRepresentativeDetails(prevState => ({
                                        ...prevState, fullName: e.target.value,
                                    }));
                                }}
                                required
                                placeholder=" Input representative full name"
                                className=" bg-white mt-2  text-slate-800 px-2 field-border-color rounded-lg h-10 border-2  sm: w-11/12 md:w-3/5"
                                type="text"/>
                        </div>
                        <div style={{marginTop: "5px", marginBottom: "5px"}}>
                            <h3 className="  text-blue-900 text-lg">
                                Email
                            </h3>
                            <input
                                onChange={(e) => {
                                    setRepresentativeDetails(prevState => ({
                                        ...prevState, email: e.target.value,
                                    }));
                                }}
                                placeholder=" Input representative email"
                                required
                                className=" bg-white mt-2  text-slate-800 px-2 field-border-color rounded-lg h-10 border-2  sm: w-11/12 md:w-3/5"
                                type="text"/>
                        </div>
                        <div style={{marginTop: "5px", marginBottom: "5px"}}>
                            <h3 className="  text-blue-900 text-lg flex">
                                Phone <p className=' text-slate-500 text-sm mt-1 font-normal ml-2 '>(This number
                                will be OTP verified and used for account log in)</p>
                            </h3>
                            <PhoneInput
                                defaultCountry="ae"
                                value={phone}
                                disableDialCodeAndPrefix={true}
                                showDisabledDialCodeAndPrefix={true}
                                dialCodePreviewStyleProps={{
                                    style: {
                                        border: "0px"
                                    }
                                }}
                                onChange={(phone, country) => {
                                    setPhone(phone);
                                    setCountryCode('+' + country.country.dialCode);
                                    setRepresentativeDetails(prevState => ({
                                        ...prevState, phone: phone,
                                    }))
                                }}
                                required
                                className="bg-white mt-2  text-slate-800 px-2 field-border-color rounded-lg h-10 border-2  sm: w-11/12 md:w-3/5 "
                            />

                        </div>
                        <div className="flex sm:w-3/6  md:w-3/5 items-center mt-4 justify-end">
                            <button onClick={() => navigate(-1)} className="mx-8 self-center color-primary ">
                                BACK
                            </button>
                            <button
                                className=' justify-self-end bg-slate-400  w-40 items-center h-10 rounded-lg'>
                                CONTINUE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


        <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            contentLabel="OTP Modal"
            appElement={document.getElementById('root')}
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
                    <p className='text-center text-black'>Enter the 4 digit verification code sent to your
                        mobile</p>
                    <p className='text-center text-black'>number *********{phone.slice(-3)}</p>

                    <div className='flex flex-col items-center mt-8'>

                        <OTPInput className='text-black ' placeholder="****" value={OTP} onChange={setOTP} autoFocus
                                  OTPLength={4} otpType="number" secure/>
                        <button className='mt-2 color-primary'>Resend Code</button>
                    </div>

                    <button onClick={() => {
                        setModalIsOpen(false)
                        verifyOtp()
                    }} className='self-center w-10/12 items-center h-10 button rounded-lg mt-8'>VERIFY
                    </button>
                </div>
            </div>
        </Modal>
    </>)
}