import   { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import {BarChart} from '../../assets/sideBarIcons/BarChat';
import { useNavigate  } from 'react-router-dom';
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
        backgroundColor={'#0a0a0c'}
        rootStyles={{
          [`.${sidebarClasses.container}`]: {
            
            height: '100vh',
            border: '0',
            borderRadius: '0px 20px 20px 0px',
            padding:'0 12px',
          },
        }}
        toggled={true}
      >
       <div onClick={() => {
              setSideBarCollapsed(!sideBarCollapsed)
            }} className='mb-16 mt-8 flex items-center justify-center cursor-pointer'>
       {<BarChart/>}
          <h4 className='text-center font-normal text-2xl ml-3'>{sideBarCollapsed?null:'Aura'}</h4>
       </div>
        <Menu
          closeOnClick={true}
          menuItemStyles={{
            button: {
              [`&.active`]: {
                backgroundColor: '#051D29',
                color: '#b6c8d9',
              },
              '&:hover':{
                  background:'transparent',
              }
            },
          }}
        >
          <MenuItem 
          onClick={()=>{
              navigate(`/dashboard/${locationId}`);
          }} icon={<BarChart/>} className={'bg-gradient-to-r0 text-base font-medium  m-auto rounded-xl mb-6 !h-12 hover:opacity-90'  + ( location.pathname != '/members'? 'from-org-100 to-org-50' : '')}>Programs </MenuItem>
          <MenuItem    onClick={()=>{
              navigate(`/dashboard/${locationId}/members`);
          }}  
          icon={<BarChart/>} className={`text-base font-medium mb-6 m-auto !h-12`}> Members </MenuItem>
          {/* <MenuItem icon={<BarChart/>} className='text-base font-medium mb-6 m-auto !h-12'> Achievements </MenuItem> */}
        </Menu>
      </Sidebar>
    </div>
  )
}
