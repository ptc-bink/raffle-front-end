import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Dropdown from './dropdown'

export default function Navbar() {

  const authenticaion: boolean = false;
  const navbarDropdown: boolean = true;

  const [displayFlag, setDisplayFlag] = useState(false)
  const [resNavbarDisplay, setResNavbarDisplay] = useState(false)

  function setFlag(): any {
    setDisplayFlag(!displayFlag)
  }

  function closeDropdown(): any {
    setResNavbarDisplay(false)
  }

  function setNavbarDisplay(): any {
    setResNavbarDisplay(true)
  }

  const flag: string = displayFlag ? "visible" : "invisible"
  const showDropdown: string = resNavbarDisplay ? "visible" : "invisible"
  const hiddenDropdown: string = resNavbarDisplay ? "invisible" : "visible"

  return (
    <div className='container'>
      <div className=' max-lg:hidden navbar pt-8 flex justify-between items-center rounded-full py-[18px] pl-8 pr-[18px] mx-auto'>
        <div className='flex items-center text-white gap-8 py-[9px]'>
          {/* <Link to="/">Defi</Link>
        <Link to="/profile">Colourize</Link>
        <Link to="/winner-table">Arm Protocol</Link>
        <Link to="/landing">Winners</Link> */}
          <a>Defi</a>
          <a>Colourize</a>
          <a>Arm Protocol</a>
          <a>Winners</a>
        </div>
        <div>
          <img src="./assets/Icon/logo dummy.svg" alt="" />
        </div>
        {authenticaion ?
          <div className='flex justify-end items-center gap-2'>
            <div className='p-[11px]'>
              <img src="./assets/Icon/twitter.svg" alt="" />
            </div>
            <div className='p-[11px]'>
              <img src="./assets/Icon/telegram.svg" alt="" />
            </div>
            <div className='p-[11px]'>
              <img src="./assets/Icon/discord.svg" alt="" />
            </div>
            <a href="" className='luci-red-btn px-8 py-4 rounded-full'>Connect wallet</a>
          </div> :
          <div className='flex justify-end items-center gap-4'>
            <div className='flex items-center content-center'>
              <button className='flex rounded-l-full pl-4 pr-6 py-3 gap-2 profile-sol-btn'>
                <img src="./assets/Icon/GrayCryptocurrency.svg" alt="" />
                <p className='text-white text-[14px] font-semibold capitalize'>0.023 SOL</p>
              </button>
              <button className='profile-add-btn rounded-r-full py-[10px] pl-2 pr-3'>
                <img src="./assets/Icon/Outline/plus-sm.svg" alt="" />
              </button>
            </div>
            <div className='w-[1px] h-[50px] bg-[#676A71]'></div>
            <div>
              <img src="./assets/Icon/Solid/bell.svg" alt="" />
            </div>
            <img src="./assets/Avatar/unsplash_YA84k2xRz7c.png" onClick={setFlag} alt="" />
            <div id="dropdown" className={`absolute top-[20px] right-[50px] ${flag}`}>
              <Dropdown />
            </div>
          </div>}
      </div>
      <div className='flex justify-between items-center relative lg:hidden dropdown-navbar'>
        <div className={`w-full flex navbar px-5 py-[10px] justify-between items-center ${hiddenDropdown}`}>
          <div className='items-center'>
            <img src="./assets/Icon/logo dummy.svg" alt="" />
          </div>
          {authenticaion ?
            <img src="./assets/Icon/Solid/menu.svg" onClick={setNavbarDisplay} alt="" /> :
            <div className='flex justify-end items-center gap-2'>
              <div className='flex items-center'>
                <div className='flex rounded-l-full pl-1 pr-2 py-1 gap-[6px] profile-sol-btn'>
                  <div>
                    <img src="./assets/Icon/GrayCryptocurrency.svg" alt="" />
                  </div>
                  <div>
                    <p className='text-white text-[14px] font-semibold capitalize'>0.023<span>&nbsp;</span>SOL</p>
                  </div>
                </div>
                <button className='profile-add-btn rounded-r-full py-[6px] pl-[6px] pr-2'>
                  <img src="./assets/Icon/Outline/plus-sm.svg" className='w-4 h-4' alt="" />
                </button>
              </div>
              <div>
                <img src="./assets/Avatar/unsplash_YA84k2xRz7c.png" onClick={setFlag} alt="" />
              </div>
            </div>
          }
        </div>
        <div className={`absolute w-4/6 flex flex-col items-start dropdown-menu top-0 right-0 ${showDropdown}`}>
          <div className='p-4 gap-4 items-center flex bottom-line'>
            <div onClick={closeDropdown} className='flex content-center p-2 rounded-full border-[1px] border-gray'>
              <svg xmlns="http://www.w3.org/2000/svg" className='w-5 h-5' viewBox="0 0 20 20" fill="none">
                <path d="M5 15L15 5M5 5L15 15" stroke="#676A71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </div>
            <div>
              <img src="./assets/Icon/logo dummy.svg" className='' alt="" />
            </div>
          </div>
          <div className='flex w-full flex-col text-white'>
            <a className='p-4'>Defi</a>
            <a className='p-4'>Colourize</a>
            <a className='p-4'>Arm Protocol</a>
            <a className='p-4'>Winners</a>
          </div>
          {authenticaion ?
            <div className='flex flex-col w-full p-4 gap-2'>
              <button className='luci-red-btn rounded-full px-6 py-[13px] font-semibold text-[14px]'>
                Connect wallet
              </button>
              <div className='flex items-center'>
                <div className='p-[11px]'>
                  <img src="./assets/Icon/twitter.svg" alt="" />
                </div>
                <div className='p-[11px]'>
                  <img src="./assets/Icon/telegram.svg" alt="" />
                </div>
                <div className='p-[11px]'>
                  <img src="./assets/Icon/discord.svg" alt="" />
                </div>
              </div>
            </div> :
            <div className='flex justify-end items-center gap-4'>
              <div className='flex items-center content-center'>
                <button className='flex rounded-l-full pl-4 pr-6 py-3 gap-2 profile-sol-btn'>
                  <img src="./assets/Icon/GrayCryptocurrency.svg" alt="" />
                  <p className='text-white text-[14px] font-semibold capitalize'>0.023 SOL</p>
                </button>
                <button className='profile-add-btn rounded-r-full py-[10px] pl-2 pr-3'>
                  <img src="./assets/Icon/Outline/plus-sm.svg" alt="" />
                </button>
              </div>
              <div className='w-[1px] h-[50px] bg-[#676A71]'></div>
              <div>
                <img src="./assets/Icon/Solid/bell.svg" alt="" />
              </div>
              <img src="./assets/Avatar/unsplash_YA84k2xRz7c.png" onClick={setFlag} alt="" />
              <div id="dropdown" className={`absolute top-[20px] right-[50px] ${flag}`}>
                <Dropdown />
              </div>
            </div>}
        </div>
      </div>
    </div>
  )
}
