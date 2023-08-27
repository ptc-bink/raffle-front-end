import React from 'react'

export default function Dropdown() {
    return (
        <div className='flex-column w-[290px] rounded-3xl dropdown'>
            <div className='bottom-line p-4 gap-4 items-center flex '>
                <img src="./assets/logo/unsplash_YA84k2xRz7c.png" className='w-12 h-12' alt="" />
                <div className='flex flex-col items-start'>
                    <p className='font-bold text-lg leading-6 text-white'>
                        Account 1
                    </p>
                    <div className='flex items-center gap-2'>
                        <p className='text-[#676A71] font-normal text-[14px] leadng-6'>1236asd...98yh12e86g</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M6 12H4.5C3.67157 12 3 11.3284 3 10.5V4.5C3 3.67157 3.67157 3 4.5 3H10.5C11.3284 3 12 3.67157 12 4.5V6M7.5 15H13.5C14.3284 15 15 14.3284 15 13.5V7.5C15 6.67157 14.3284 6 13.5 6H7.5C6.67157 6 6 6.67157 6 7.5V13.5C6 14.3284 6.67157 15 7.5 15Z" stroke="#676A71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='text-white flex items-center p-4 gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.12104 17.8037C7.15267 16.6554 9.4998 16 12 16C14.5002 16 16.8473 16.6554 18.879 17.8037M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.34315 10.3431 7 12 7C13.6569 7 15 8.34315 15 10ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className='text-[18px] font-extrabold capitalize leading-tight'>
                    My Profile
                </p>
            </div>
            <div className='text-white flex items-center p-4 gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3 10H21M7 15H8M12 15H13M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className='text-[18px] font-extrabold capitalize leading-tight'>
                    Wallet
                </p>
            </div>
            <div className='text-white flex items-center p-4 gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 9V12M18 12V15M18 12H21M18 12H15M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM3 20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21H3V20Z" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className='text-[18px] font-extrabold capitalize leading-tight'>
                    Referrals
                </p>
            </div>
            <div className='text-white flex items-center p-4 gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#F7F7F7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <p className='text-[18px] font-extrabold capitalize leading-tight'>
                    Settings
                </p>
            </div>
            <div className='text-white flex items-center p-4 gap-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M3.60039 3.6001C2.93765 3.6001 2.40039 4.13736 2.40039 4.8001V19.2001C2.40039 19.8628 2.93765 20.4001 3.60039 20.4001C4.26313 20.4001 4.80039 19.8628 4.80039 19.2001V4.8001C4.80039 4.13736 4.26313 3.6001 3.60039 3.6001Z" fill="#F7F7F7" />
                    <path d="M15.9519 14.7516C15.4832 15.2202 15.4832 15.98 15.9519 16.4486C16.4205 16.9173 17.1803 16.9173 17.6489 16.4486L21.2489 12.8486C21.474 12.6236 21.6004 12.3184 21.6004 12.0001C21.6004 11.6818 21.474 11.3766 21.2489 11.1516L17.6489 7.55157C17.1803 7.08294 16.4205 7.08294 15.9519 7.55157C15.4832 8.0202 15.4832 8.78 15.9519 9.24862L17.5033 10.8001L8.40039 10.8001C7.73765 10.8001 7.20039 11.3374 7.20039 12.0001C7.20039 12.6628 7.73765 13.2001 8.40039 13.2001H17.5033L15.9519 14.7516Z" fill="#F7F7F7" />
                </svg>
                <p className='text-[18px] font-extrabold capitalize leading-tight'>
                    Logout
                </p>
            </div>

        </div>
    )
}
