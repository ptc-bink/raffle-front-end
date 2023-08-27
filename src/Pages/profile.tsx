import React from 'react'

import UserAccount from '../Component/userAccount'
import Nft from '../Component/Cards/nft'

export default function Profile() {
  return (
    <div className='self-stretch px-[130px] py-[50px] flex bottom-line content-center gap-[50px]'>
      <div>
        <UserAccount />
      </div>
      <div className='flex-column w-full gap-8 '>
        <div className='gap-6 pb-8 flex-column bottom-line'>
          <p className='time-text text-white items-start'>
            My Raffle
          </p>
          <div className='w-full gap-4 p-4 flex-rows items-start rounded-3xl bg-[#292C31]'>
            <Nft type={"myRaffle"} nftIndex={1} width={94} height={120} />
            <div className='gap-4 w-full'>
              <div className='pb-4 justify-between flex card-box-bottom-line'>
                <div className='flex items-center gap-1'>
                  <div className='text-white text-2xl font-bold items-center flex gap-1'>
                    King Punk 2023 Edition
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.52032 4.14585C8.292 4.08427 9.02459 3.78082 9.61379 3.2787C10.9888 2.10697 13.011 2.10697 14.386 3.2787C14.9752 3.78082 15.7078 4.08427 16.4795 4.14585C18.2803 4.28955 19.7103 5.71953 19.854 7.52032C19.9155 8.292 20.219 9.02459 20.7211 9.61379C21.8928 10.9888 21.8928 13.011 20.7211 14.386C20.219 14.9752 19.9155 15.7078 19.854 16.4795C19.7103 18.2803 18.2803 19.7103 16.4795 19.854C15.7078 19.9155 14.9752 20.219 14.386 20.7211C13.011 21.8928 10.9888 21.8928 9.61379 20.7211C9.02459 20.219 8.292 19.9155 7.52032 19.854C5.71953 19.7103 4.28955 18.2803 4.14585 16.4795C4.08427 15.7078 3.78082 14.9752 3.2787 14.386C2.10697 13.011 2.10697 10.9888 3.2787 9.61379C3.78082 9.02459 4.08427 8.292 4.14585 7.52032C4.28955 5.71953 5.71953 4.28955 7.52032 4.14585ZM16.4484 10.4484C16.9171 9.9798 16.9171 9.22 16.4484 8.75137C15.9798 8.28275 15.22 8.28275 14.7514 8.75137L10.7999 12.7028L9.24843 11.1514C8.7798 10.6827 8.02 10.6827 7.55137 11.1514C7.08275 11.62 7.08275 12.3798 7.55137 12.8484L9.95137 15.2484C10.42 15.7171 11.1798 15.7171 11.6484 15.2484L16.4484 10.4484Z" fill="#E42B2B" />
                    </svg>
                  </div>
                  <div className='nft-edition-header-key'>
                    #93272
                  </div>
                </div>
                <div className='gap-2 flex items-center'>
                  <div className='p-[1px] rounded-full bg-[#505050]'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M12.8868 6.22603H2.48145L5.11395 3.60132H15.5193L12.8868 6.22603ZM12.8868 14.3987H2.48145L5.11395 11.7753H15.5193M5.11395 10.3124H15.5193L12.8868 7.68766H2.48145" fill="url(#paint0_linear_1202_4040)" />
                      <defs>
                        <linearGradient id="paint0_linear_1202_4040" x1="2.76962" y1="14.1921" x2="15.3225" y2="3.91909" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#DB00BC" />
                          <stop offset="1" stop-color="#3AC0E9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className='ticket-bought-text text-[#E5E1A8]'>
                    $8,782
                  </p>
                </div>
              </div>
              <div className='pt-3 gap-3 grid grid-cols-4 items-start'>
                <div className='flex-column gap-2'>
                  <p className='text-[14px] font-medium leading-5 text-white'>
                    Sales Ends in:
                  </p>
                  <div className='ticket-time-limit rounded-full py-1 pl-2 pr-4'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#E5E1A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p className='text-[14px] font-semibold leading-5 text-center text-white'>15h : 01m: 02s</p>
                  </div>
                </div>
                <div className='flex-column gap-2'>
                  <p className='text-[14px] font-medium leading-5 text-white'>
                    Start in:
                  </p>
                  <p className='text-[18px] font-bold leading-5 text-[#E5E1A8] '>June 23, 2023</p>
                </div>
                <div className='flex-column gap-2'>
                  <p className='text-[14px] font-medium leading-5 text-white'>
                    Sold ticket amount:
                  </p>
                  <p className='text-[18px] font-bold leading-5 text-[#E5E1A8] '>23 Ticket</p>
                </div>
                <div className='flex-column gap-2'>
                  <p className='text-[14px] font-medium leading-5 text-white'>
                    Total ticket amount:
                  </p>
                  <p className='text-[18px] font-bold leading-5 text-[#E5E1A8] '>23/50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex-column gap-6'>
          <p className='time-text text-white items-start'>
            Wins
          </p>
          <div className='flex-rows gap-6 items-start bottom-line pb-8'>
            <Nft type={"wins"} nftIndex={3} width={255} height={350} />
            <Nft type={"wins"} nftIndex={2} width={255} height={350} />
            <Nft type={"wins"} nftIndex={1} width={255} height={350} />
          </div>
        </div>
        <div className='flex-column gap-6'>
          <p className='time-text text-white items-start'>
            NFTS Owned
          </p>
          <div className='flex-rows gap-6 items-start pb-8'>
            <Nft type={"nft-owned"} nftIndex={1} width={255} height={350} />
            <Nft type={"nft-owned"} nftIndex={3} width={255} height={350} />
            <Nft type={"nft-owned"} nftIndex={2} width={255} height={350} />
          </div>
        </div>
      </div>
    </div>
  )
}
