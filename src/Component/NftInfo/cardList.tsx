import React from 'react'

export default function CardList( ) {
    return (
        <div className='card-list px-6 py-4 justify-between'>
            <div className='public-key'>
                <p className='text-white text-[14px] font-semibold capitalize'>1d8h71...12389y</p>
                <p className='public-key-listing'>Listing</p>
            </div>
            <div className='flex content-end items-center gap-2 text-[#E5E1A8]'>
                <p>Just Now</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="#E5E1A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    )
}
