import { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import { BarChart } from '../../assets/sideBarIcons/BarChat';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

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
        {/* <div onClick={() => {
          setSideBarCollapsed(!sideBarCollapsed)
        }} className='mb-16 mt-8 flex items-center justify-center cursor-pointer'>
          {<BarChart />}
          <h4 className='text-center font-normal text-2xl ml-3'>{sideBarCollapsed ? null : 'Aura'}</h4>
        </div> */}
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
            }} icon={<BarChart />} className={'bg-gradient-to-r0 text-base font-medium  text-gray-700 m-auto rounded-xl mb-6 !h-12 hover:opacity-90' + (location.pathname != '/members' ? 'from-org-100 to-org-50' : '')}>Dashboard </MenuItem>
          <MenuItem onClick={() => {
            // navigate(`/dashboard/${locationId}/members`);
          }}
            icon={<BarChart />} className={`text-base font-medium mb-6 m-auto text-gray-700 !h-12`}> Buyers </MenuItem>

                <MenuItem onClick={() => {
            // navigate(`/dashboard`);
          }}
            icon={<BarChart />} className={`text-base  text-gray-700 font-medium mb-6 m-auto !h-12`}> Jobs </MenuItem>
            

            <div className=' border-b border-gray-700'>
        </div>
            <MenuItem onClick={() => {
            // navigate(`/dashboard`);
          }}
            icon={<BarChart />} className={`text-base text-gray-700 font-medium mb-6 m-auto !h-12`}> Account settings </MenuItem>
        </Menu>

      </Sidebar>
    </div>
  )
}
