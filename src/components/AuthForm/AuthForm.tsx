import { useState } from 'react';
import * as Actions from '@/redux/actions/Actions';
import { Button } from "@/components/ui/button"
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { connect, useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import OTPInput from "otp-input-react";
import { Link } from 'react-router-dom';
function AuthForm(props: { setUserAuth: (arg0: { user: { location: never[]; }; isDashboard: boolean; }) => void; }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [userDetails, setUserDetails]: any = useState({
  })

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

  const createUserSession = () => {
    localStorage.setItem('auth', JSON.stringify(userDetails));
    localStorage.setItem('isDashboard', JSON.stringify(false));
    props.setUserAuth({
      user: userDetails,
      isDashboard: false
    })
  }
  return (
    <div  >
      {/* <form> */}
      <div className="grid gap-4">
        <div className="grid gap-3">
          <h2 className=" text-blue-900">
            Phone
          </h2>
          <PhoneInput
            country={'us'}
            value={phoneNumber}
            onChange={phone => setPhoneNumber(phone)}
            placeholder='Enter phone number'
            dropdownStyle={{ color: 'black' }}
            inputStyle={{ color: 'black' }}
          />
        </div>

        <div className="grid gap-3 my-2">

          <Button className=' w-40 h-10 bg-slate-400 rounded' onClick={() => {
            setModalIsOpen(true)

          }} disabled={isLoading}>
            {isLoading && (
              <FontAwesomeIcon className="mr-2 h-4 w-4" icon={faSpinner} spin />
            )}
            SEND OTP
          </Button>



        </div>
      </div>
      {/* </form> */}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        // onRequestClose={setIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className=' '>
          <button onClick={()=>{
            setModalIsOpen(false)

          }} className='absolute top-6 text-2xl right-8 text-black'>
     
      <img
                src=" ../../../../../public/close.png"
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

            <p className="text-black text-sm mt-4">
              <input
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

            <button className='self-center w-10/12 items-center h-10 button rounded-lg mt-8'>VERIFY</button>
          </div>
        </div>
      </Modal>

    </div>
  )
}


const mapDispatchToProps = (dispatch: any) => ({
  setUserAuth: (userAuth: object) => dispatch({ type: Actions.SET_AUTH_USER, payload: userAuth })
});

export default connect(null, mapDispatchToProps)(AuthForm);
