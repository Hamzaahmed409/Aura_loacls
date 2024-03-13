import { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { BarChart } from '../../assets/sideBarIcons/BarChat';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [locationId, setLocationId] = useState('')

  useEffect(() => {
    let location = localStorage.getItem('locationId') ?? null;
    location = JSON.parse(location as string);

    if (location !== null) {
      setLocationId(location);
    }
  }, [])

  const [sideBarCollapsed, setSideBarCollapsed] = useState(false)
  return (
    <div className='nav-sidebar'>
      <div className=' p-2'>

         <img
              src="/AURA.png"
              width={102}
              height={30}
              alt="Authentication"
              className="hidden dark:block mb-2"
            />
      </div>

      <Sidebar
        collapsed={sideBarCollapsed}
        collapsedWidth={'80px'}
        backgroundColor={'white'}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            height: '100vh',
            border: '0',
            borderRadius: '0px 20px 20px 0px',
            padding: '0 12px',
          },
        }}
        toggled={true}
      >


        <div className=' flex border-2 rounded-md border-gray-200  h-8 items-center px-2'>
          <FontAwesomeIcon className=" h-5 w-5 text-gray-400" icon={faSearch} />
          <input
            required
            type="text"
            className=' text-gray-600'
          />
        </div>
        <Menu
          closeOnClick={true}
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: '#051D29',
                color: 'red',
              },
              '&:hover': {
                background: 'transparent',
                // backgroundColor: '#13395e',
                color: '#091370',
              }
            },
          }}
        >
          <MenuItem
            onClick={() => {
              navigate(`/dashboard`);
            }} icon={<BarChart />} className={'bg-gradient-to-r0 text-base font-medium  text-gray-700 m-auto rounded-xl   !h-12 hover:opacity-90' + (location.pathname != '/members' ? 'from-org-100 to-org-50' : '')}>Dashboard </MenuItem>


          <MenuItem onClick={() => {
            // navigate(`/dashboard`);
          }}
            icon={<BarChart />} className={`text-base  text-gray-700 font-medium  m-auto !h-12`}> Jobs </MenuItem>


          <MenuItem onClick={() => {
            // navigate(`/dashboard/${locationId}/members`);
          }}
            icon={<BarChart />} className={`text-base font-medium  m-auto text-gray-700 !h-12`}> Reportings </MenuItem>

          <MenuItem onClick={() => {
            // navigate(`/dashboard/${locationId}/members`);
          }}
            icon={<BarChart />} className={`text-base font-medium  m-auto text-gray-700 !h-12`}> Buyers </MenuItem>

          <div className=' absolute bottom-40'>
            <MenuItem onClick={() => {
              // navigate(`/dashboard/${locationId}/members`);
            }}
              icon={<BarChart />} className={`text-base font-medium  m-auto text-gray-700 !h-12`}> Support </MenuItem>


            <MenuItem onClick={() => {
              // navigate(`/dashboard/${locationId}/members`);
            }}
              icon={<BarChart />} className={`text-base font-medium  m-auto text-gray-700 !h-12`}> Settings </MenuItem>

          </div>


        </Menu>

      </Sidebar>
    </div>
  )
}
