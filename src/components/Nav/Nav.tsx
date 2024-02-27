// @ts-nocheck 
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faBell } from '@fortawesome/free-regular-svg-icons';
function Nav() {
  return (
    <div>
      <div className='bg-white '>
        <div className='flex justify-between items-center h-20 container'>
          <div>
            <img
              src="/AURA.png"
              width={102}
              height={30}
              alt="Authentication"
              className="hidden dark:block mb-2"
            />
          </div>
          <div className=' flex'>
            <FontAwesomeIcon className="mr-2 h-6 w-6 text-blue-700" icon={faBell}   />
            <h3 className=" text-blue-700 text-base  font-bold">NextSoft Solution</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
const buttonStyle = {
  padding: '10px',
  margin: '5px',
};

const iconStyle = {
  padding: '2px',
  marginRight: '6px',
};

const loginButtonStyle = {
  padding: '10px',
  margin: '5px',
  border: '1px solid #blue-950',
  borderRadius: '3px',
  color: '#blue-950',
};

const getStartedButtonStyle = {
  padding: '10px',
  margin: '5px',
  borderRadius: '3px',
  color: 'white',
  backgroundColor: 'blue-950',
};


export default (Nav);