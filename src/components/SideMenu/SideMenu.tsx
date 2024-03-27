import { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar'; 
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faRightFromBracket, faGear } from '@fortawesome/free-solid-svg-icons';

export default function SideMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  // const [locationId, setLocationId] = useState('')

  // useEffect(() => {
  //   let location = localStorage.getItem('locationId') ?? null;
  //   location = JSON.parse(location as string);

  //   if (location !== null) {
  //     setLocationId(location);
  //   }
  // }, [])

  const [sideBarCollapsed, setSideBarCollapsed] = useState(false)
  return (
    <div className='nav-sidebar h-fit'>
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
              navigate(`/dashboard/rewamp`);
            }}
            className={'bg-gradient-to-r0 text-base font-medium  text-gray-700 m-auto rounded-xl  flex  !h-12 hover:opacity-90' + (location.pathname != '/members' ? 'from-org-100 to-org-50' : '')}>
            <div className=' flex '>
              <img src="../../../public/home.svg" className=' mr-2' />
              <h1>Dashboard</h1>
            </div>

          </MenuItem>


          <MenuItem onClick={() => {
            // navigate(`/dashboard`);
          }}
            className={`text-base  text-gray-700 font-medium  m-auto !h-12`}>

            <div className=' flex '>
              <img src="../../../public/layers-three-01.svg" className=' mr-2' />
              <h1 className='text-gray-200'>Jobs</h1>
            </div>
          </MenuItem>


          <MenuItem onClick={() => {
            // navigate(`/dashboard/${locationId}/members`);
          }}
            className={`text-base font-medium  m-auto text-gray-700 !h-12`}>
            <div className=' flex '>
              <img src="../../../public/pie-chart-03.svg" className=' mr-2' />
              <h1 className='text-gray-200'>Reportings</h1>
            </div>
          </MenuItem>

          <MenuItem onClick={() => {
            // navigate(`/dashboard/${locationId}/members`);
          }}

            className={`text-base font-medium  m-auto text-gray-700 !h-12`}>
            <div className=' flex '>
              <img src="../../../public/pie-chart-03.svg" className=' mr-2' />
              <h1 className='text-gray-200'>Buyers</h1>
            </div>
          </MenuItem>

          <div className='  '>
            <MenuItem onClick={() => {
            }}
              className={`text-base font-medium  m-auto text-gray-700 !h-12`}>
              <div className=' flex '>
                <img src="../../../public/life-buoy-01.svg" className=' mr-2' />
                <h1>Support</h1>
              </div>
            </MenuItem>
            <MenuItem onClick={() => {
            }}
              className={`text-base font-medium  m-auto text-gray-700 !h-12`}>

              <div className=' flex '>
                <FontAwesomeIcon className=" h-5 w-5  mr-2 text-gray-200" icon={faGear} />
                <h1 className='text-gray-200'>Settings</h1>
              </div>
               </MenuItem>

            <div className=' mt-4  mx-2  py-4 px-4 w-full rounded bg-slate-100'>
              <h1 className='text-black text-base font-medium '>New Tentures Honinor</h1>
              <p className='text-black text-xs  '> Check out the new dashboard view. Pages now load</p>
              <img src={'https://img.freepik.com/free-photo/worker-reading-news-with-tablet_1162-83.jpg?t=st=1710700377~exp=1710703977~hmac=70b07f626178bf06af86997516a1d68d7331916d5f1bad276449e8222470e291&w=1060'} className=' mt-2  rounded-sm' />

            </div>

            <div className=' mt-14 p-2 rounded-md border-gray-400  bg-slate-100  flex justify-between'>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h1 className='text-black text-sm font-medium '>Glauon NiyC</h1>
                <p className='text-black text-xs  '>Glauon@gmail.com</p>
              </div>
              <div>
                <FontAwesomeIcon className=" h-4 w-4 mt-3 text-gray-400" icon={faRightFromBracket} />
              </div>
            </div>
          </div>
        </Menu>
      </Sidebar>
    </div >
  )
}
