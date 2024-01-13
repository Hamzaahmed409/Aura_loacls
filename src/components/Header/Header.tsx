import { useEffect } from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import * as Actions from '@/redux/actions/Actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header(props: { logout: () => void; }) {
  const dispatch = useDispatch();
  const userAuthDetail = localStorage.getItem('auth');
  const parsedData = JSON.parse(userAuthDetail ?? "{}")
  const navigate = useNavigate();

  useEffect(() => {
    if (parsedData && parsedData.locations) {
      dispatch({ type: 'selectLocation', payload: { selectedLocation: parsedData.locations[0].id } });
    }
  }, [])
  return (
    <div>
   <div className='bg-indigo-50 '>
      <div className='flex justify-between items-center h-20 container'>
        <div>
          <img
            src ="/AURA.png"
            width={102}
            height={30}
            alt="Authentication"
            className="hidden dark:block mb-2"
          />
        </div>
        <div>
          <button style={buttonStyle} className='bg-inherit text-blue-950'>Home</button>
          <button style={buttonStyle} className='bg-inherit text-blue-950'>About</button>
          <button style={buttonStyle} className='bg-inherit text-blue-950'>
            Services
            <FontAwesomeIcon style={iconStyle} icon={faChevronDown} />
          </button>
          <button onClick={() => { navigate('/login') }} style={loginButtonStyle} className='bg-inherit text-blue-950'>
            Login
          </button>
          <button style={getStartedButtonStyle} className='button text-white'>
            Get started
          </button>
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

const mapDispatchToProps = (dispatch: any) => ({
  logout: () => dispatch({ type: Actions.LOGOUT }),
});

export default connect(null, mapDispatchToProps)(Header);