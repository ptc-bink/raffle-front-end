import React from 'react'

import SalesEndIn from './salesEndIn'
import StartIn from './startIn'

export default function NftEdition() {
    return (
        <div className='flex-column gap-2'>
            <div className='grid w-full grid-cols-2 gap-x-8 text-white'>
                <div className='ticket-sales flex-col'>
                    <p className='ticket-text f-'>Ticket Sales Ends in:</p>
                    <SalesEndIn />
                </div>
                <div className='ticket-sales flex-col'>
                    <p className='ticket-text '>Ticket Start in:</p>
                    <StartIn />
                </div>
            </div>
            {/* ticket value */}
            <div className='grid w-full grid-cols-2 gap-x-8 text-white'>
                <div className='ticket-sales flex-col'>
                    <p className='ticket-text'>Nft's Floor Price</p>
                    <div className='flex items-center gap-x-[8px]'>
                        <svg className='bg-[#505050] rounded-full' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M12.8866 6.22603H2.4812L5.1137 3.60132H15.5191L12.8866 6.22603ZM12.8866 14.3987H2.4812L5.1137 11.7753H15.5191M5.1137 10.3124H15.5191L12.8866 7.68766H2.4812" fill="url(#paint0_linear_1071_14219)" />
                            <defs>
                                <linearGradient id="paint0_linear_1071_14219" x1="2.76938" y1="14.1921" x2="15.3222" y2="3.91909" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DB00BC" />
                                    <stop offset="1" stop-color="#3AC0E9" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p className='time-text text-center text-[#E5E1A8]'>11.24SOL</p>
                    </div>
                </div>
                <div className='ticket-sales flex-col'>
                    <p className='ticket-text'>Total Ticket Volue</p>
                    <div className='flex items-center gap-x-[8px]'>
                        <svg className='bg-[#505050] rounded-full' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M12.8866 6.22603H2.4812L5.1137 3.60132H15.5191L12.8866 6.22603ZM12.8866 14.3987H2.4812L5.1137 11.7753H15.5191M5.1137 10.3124H15.5191L12.8866 7.68766H2.4812" fill="url(#paint0_linear_1071_14219)" />
                            <defs>
                                <linearGradient id="paint0_linear_1071_14219" x1="2.76938" y1="14.1921" x2="15.3222" y2="3.91909" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#DB00BC" />
                                    <stop offset="1" stop-color="#3AC0E9" />
                                </linearGradient>
                            </defs>
                        </svg>
                        <p className='time-text text-center text-[#E5E1A8]'>13.95SOL</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
