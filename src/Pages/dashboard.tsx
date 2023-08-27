import React from 'react'

import MainButton from '../Component/Btn/mainButton'
import NftDetailEdition from '../Component/NftInfo/nftDetailEdition'
import Nft from '../Component/Cards/nft'
import CardList from '../Component/NftInfo/cardList'

export default function Dashboard() {
    return (
        <div className='flex-column items-center gap-y-8 px-[130px] py-[50px] border-b-[1px] border-[#292C31]'>
            <MainButton />
            <NftDetailEdition />
            <div className='mt-8 pt-8 border-t-[1px] border-[#292C31] w-full flex gap-8'>
                <div className='grid grid-cols-3 grid-3 gap-6'>
                    {[1, 2, 1, 4, 1, 2, 3, 1, 2, 4].map((value, index) =>
                        <Nft type="raffle-collection" nftIndex={value} height={335} width={100} />
                    )}
                </div>
                <div className='flex-column items-center gap-y-6'>
                    <div className='ticket-bought flex-column rounded-[32px] p-4 g-4'>
                        <p className='ticket-bought-text text-white content-center'>You Already Bought</p>
                        <div className='card-box px-4 py-2 flex-rows gap-2 rounded-full xy-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 5V7M15 11V13M15 17V19M5 5C3.89543 5 3 5.89543 3 7V10C4.10457 10 5 10.8954 5 12C5 13.1046 4.10457 14 3 14V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V14C19.8954 14 19 13.1046 19 12C19 10.8954 19.8954 10 21 10V7C21 5.89543 20.1046 5 19 5H5Z" stroke="#E5E1A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <p className='bought-ticket-text'>120 Ticket(s)</p>
                        </div>
                    </div>
                    <div className='p-6 gap-6 card-box items-center flex-column rounded-[32px]'>
                        <div className='flex-column content-center items-center gap-2'>
                            <p className='time-text text-left text-white'> Enter Competition</p>
                            <div className='gap-2 flex-column'>
                                <p className='font-normal text-sm leading-5 text-white'>Select entry</p>
                                <div className='flex gap-4 justify-between'>
                                    <div className='nft-price-number w-full rounded-full flex items-center justify-between px-4 py-2'>
                                        <p className='text-white text-2xl font-bold leading-8'>1</p>
                                        <div className='flex items-center gap-2'>
                                            <svg className='bg-[#505050] rounded-full' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 18 18" fill="none">
                                                <path d="M12.8866 6.22603H2.4812L5.1137 3.60132H15.5191L12.8866 6.22603ZM12.8866 14.3987H2.4812L5.1137 11.7753H15.5191M5.1137 10.3124H15.5191L12.8866 7.68766H2.4812" fill="url(#paint0_linear_1071_14219)" />
                                                <defs>
                                                    <linearGradient id="paint0_linear_1071_14219" x1="2.76938" y1="14.1921" x2="15.3222" y2="3.91909" gradientUnits="userSpaceOnUse">
                                                        <stop stop-color="#DB00BC" />
                                                        <stop offset="1" stop-color="#3AC0E9" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                            <p className='sm-text text-white'>11.32</p>
                                        </div>
                                    </div>
                                    <button className=' luci-red-btn px-6 py-[14px]'>Buy</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex-column gap-4 p-6 card-box rounded-[32px]'>
                        <div className='grid grid-cols-2 gap-4'>
                            <button className='activity-btn px-6 py-3 rounded-3xl'>
                                <p className='activity-btn-text'>
                                    Activity
                                </p>
                            </button>
                            <button className='activity-partner-btn px-6 py-3 rounded-3xl'>
                                <p className='activity-btn-text'>
                                    Part.(23)
                                </p>
                            </button>
                        </div>
                        <div className='flex-column items-start rounded-[16px] contract-history'>
                            <CardList />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-column items-start gap-[10px]'>
                <div className='flex-rows gap-2 text-[#E5E1A8]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#E5E1A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className='time-text text-center leading-6'>Instructions on how to play</p>
                </div>
                <p className='instruction-text self-stretch text-white'>
                    When it comes to Raffle Tickets, there are a couple of strategies. Which strategy you choose depends on your risk tolerance. Some people who prefer to take guaranteed returns on their tickets will elect to sell them in the Lucidpunks. Those who enjoy taking a chance will enter their tickets into the NFT raffles. There is definitely some easy GHST to be made by selling tickets in the Lucidpunks. Although, the idea of winning a raffle for a Godlike item can be tantalizing. It all comes down to your personal preference! Regardless of how you choose to make use of your Raffle Tickets we wish you the best of luck!
                </p>
            </div>
        </div>
    )
}
