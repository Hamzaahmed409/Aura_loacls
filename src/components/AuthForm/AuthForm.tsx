import {useState} from 'react';
import * as Actions from '@/redux/actions/Actions';
import {Button} from "@/components/ui/button"
import Modal from 'react-modal'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import {toast} from "@/components/ui/use-toast"
import {connect, useDispatch} from 'react-redux';
import {PhoneInput} from 'react-international-phone';
import 'react-phone-input-2/lib/style.css'
import {OtpDto, VerifyLoginDto} from '@/services/api'
import OTPInput from "otp-input-react";
import {Link, useNavigate} from 'react-router-dom';
import {AuthService} from '../../services/api/services/AuthService';

const {authControllerLogin, authControllerVerify} = AuthService;

function AuthForm(props: { setUserAuth: (arg0: { user: { location: never[]; }; isDashboard: boolean; }) => void; }) {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isChecked, setChecked] = useState(false);
    const handleCheckboxChange = () => {
        setChecked(!isChecked);
    };
    const [OTP, setOTP] = useState("");
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


    async function onSubmit() {
        setIsLoading(true)
        const mobileNumberWithoutCountryCode = phoneNumber.slice(countryCode.length);
        if (phoneNumber && countryCode) {
            const body: OtpDto = {
                country_code: countryCode,
                mobile_number: mobileNumberWithoutCountryCode
            }
            try {
                const response = await authControllerLogin(body);
                if (response.message === 'OTP sent successfully') {
                    setModalIsOpen(true)
                    toast({
                        variant: 'default',
                        title: "OTP sent",
                        description: "OTP sent successfully",
                    })
                } else {
                    throw new Error('User was not found with this number');
                }
            } catch (error) {
                toast({
                    variant: "destructive",
                    title: "User was not found with this number",
                    description: "Please sign up or contact support",
                })
                setIsLoading(false);
            }
        }
    }


    async function verifyOtp() {
        if (!isChecked) {
            toast({
                variant: "destructive",
                title: "Error!",
                description: "Please agree to the terms and conditions",
            });
            return;
        }
        if (phoneNumber && countryCode) {
            const mobileNumberWithoutCountryCode = phoneNumber.slice(countryCode.length);
            const body: VerifyLoginDto = {
                country_code: countryCode,
                mobile_number: mobileNumberWithoutCountryCode,
                otp: OTP
            }
            try {
                const response = await authControllerVerify(body);
                if (response.message === 'OTP verified successfully') {
                    setModalIsOpen(false);
                    toast({
                        variant: "default", title: "OTP Verified",
                    });
                    navigate('/dashboard')
                } else {
                    throw new Error('Failed to verify OTP');
                }
            } catch (error) {
                setOTP('');
                setModalIsOpen(true);
                toast({
                    variant: "destructive", title: "Error!", description: "Failed to verify OTP. Please try again.",
                });
            }
        }
    }

    return (
        <div>
            <div className="grid gap-4">
                <div className="grid gap-3">
                    <h2 className=" text-blue-900">
                        Phone
                    </h2>
                    <PhoneInput
                        defaultCountry="ae"
                        value={phoneNumber}
                        onChange={(phone, country) => {
                            setCountryCode('+' + country.country.dialCode);
                            setPhoneNumber(phone)
                        }}
                        required
                        className="border-neutral-200  sm: w-11/12 md:w-3/5 "
                    />
                </div>
                <div className="grid gap-3 my-2">
                    <Button className={`w-40 h-10 ${phoneNumber.length >12 ? 'bg-blue-700' : 'bg-slate-400'}  rounded` } onClick={() => {
                        onSubmit()
                    }} disabled={isLoading}>
                        {isLoading && (
                            <FontAwesomeIcon className="mr-2 h-4 w-4" icon={faSpinner} spin/>
                        )}
                        SEND OTP
                    </Button>


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
                            src="/public/close.png"
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
                        <p className='text-center text-black'>number *********{phoneNumber.slice(-3)}</p>

                        <div className='flex flex-col items-center mt-8'>

                            <OTPInput className='text-black ' placeholder="****" value={OTP} onChange={setOTP} autoFocus
                                      OTPLength={4} otpType="number" secure/>
                            <button className='mt-2 color-primary'>Resend Code</button>
                        </div>

                        <p className="text-black text-sm mt-4">
                            <input
                                required
                                type="checkbox"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            {' '} I agree to Aura’s{' '}
                            <Link to="/terms" className="color-primary">
                                Terms of Service
                            </Link>{' '}
                            or{' '}
                            <Link to="/privacy" className="color-primary">
                                Privacy Policy
                            </Link>
                        </p>

                        <button onClick={() => {
                            verifyOtp()
                        }} className='self-center w-10/12 items-center h-10 button rounded-lg mt-8'>VERIFY
                        </button>
                    </div>
                </div>
            </Modal>

        </div>
    )
}


const mapDispatchToProps = (dispatch: any) => ({
    setUserAuth: (userAuth: object) => dispatch({type: Actions.SET_AUTH_USER, payload: userAuth})
});

export default connect(null, mapDispatchToProps)(AuthForm);
