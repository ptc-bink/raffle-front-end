import React from 'react'

export default function SalesEndIn() {
    return (
        <div className='ticket-time-limit px-4 py-2 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#E5E1A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className='time-text text-center text-white'>15h : 01m: 02s</p>
        </div>
    )
}
