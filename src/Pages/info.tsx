import React from 'react'

import MainButton from '../Component/Btn/mainButton'
import NftEdition from '../Component/NftInfo/nftEdition'
import CardList from '../Component/NftInfo/cardList'
import InfoCard from '../Component/Cards/infoCard'


export default function Info() {
  return (
    <div className='info pt-8'>
      <div className=' px-[130px] py-10'>
        <MainButton />
        <div className='grid grid-cols-2 pt-10 gap-10'>
          <InfoCard index={1}/>
          <div className='nft-edition gap-y-6'>
            {/* avatar edition */}
            <div className='nft-edition-header gap-1'>
              <div className='nft-edition-header-title'>
                King Punk 2023 Edition
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M7.52032 4.14585C8.292 4.08427 9.02459 3.78082 9.61379 3.2787C10.9888 2.10697 13.011 2.10697 14.386 3.2787C14.9752 3.78082 15.7078 4.08427 16.4795 4.14585C18.2803 4.28955 19.7103 5.71953 19.854 7.52032C19.9155 8.292 20.219 9.02459 20.7211 9.61379C21.8928 10.9888 21.8928 13.011 20.7211 14.386C20.219 14.9752 19.9155 15.7078 19.854 16.4795C19.7103 18.2803 18.2803 19.7103 16.4795 19.854C15.7078 19.9155 14.9752 20.219 14.386 20.7211C13.011 21.8928 10.9888 21.8928 9.61379 20.7211C9.02459 20.219 8.292 19.9155 7.52032 19.854C5.71953 19.7103 4.28955 18.2803 4.14585 16.4795C4.08427 15.7078 3.78082 14.9752 3.2787 14.386C2.10697 13.011 2.10697 10.9888 3.2787 9.61379C3.78082 9.02459 4.08427 8.292 4.14585 7.52032C4.28955 5.71953 5.71953 4.28955 7.52032 4.14585ZM16.4484 10.4484C16.9171 9.9798 16.9171 9.22 16.4484 8.75137C15.9798 8.28275 15.22 8.28275 14.7514 8.75137L10.7999 12.7028L9.24843 11.1514C8.7798 10.6827 8.02 10.6827 7.55137 11.1514C7.08275 11.62 7.08275 12.3798 7.55137 12.8484L9.95137 15.2484C10.42 15.7171 11.1798 15.7171 11.6484 15.2484L16.4484 10.4484Z" fill="#E42B2B" />
                </svg>
              </div>
              <div className='nft-edition-header-key inset-y-0'>
                #93272
              </div>
            </div>
            <NftEdition />
            {/* nft description */}
            <div className='text-white ticket-sales flex-col'>
              <p>Description</p>
              <div className='font-[400] text-justify'>Enter now for a chance to win Mutant Ape Yacht Club #10735. The MUTANT APE YACHT CLUB is a collection of up to 20,000 Mutant Apes that can only be created by exposing an existing Bored Ape to a vial of MUTANT SERUM or by minting a Mutant Ape in the public sale...<span className='text-[#e42b2b]'>See more</span></div>
            </div>
            {/* nft contract */}
            <div className='card-box flex w-full justify-between text-white p-6 gap-x-4 rounded-[32px] '>
              <div className='text-left break-all'>CONTRACT: < br />0X4F9343FA110E8C5C1276B810FBBBB70A19678...</div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M10 6H6C4.89543 6 4 6.89543 4 8V18C4 19.1046 4.89543 20 6 20H16C17.1046 20 18 19.1046 18 18V14M14 4H20M20 4V10M20 4L10 14" stroke="#E5E1A8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
            </div>
            {/* nft contract history */}
            <div className='w-full text-white flex-col p-6 rounded-[32px] border-[1px] card-box'>
              <div className='justify-center grid grid-cols-2 w-full self-stretch gap-x-4 pb-4'>
                <button className='activity-btn px-6 py-3 rounded-[24px] '>
                  <p className='activity-btn-text'>
                    Activity
                  </p>
                </button>
                <button className='activity-partner-btn px-6 py-3 rounded-[24px]'>
                  <p className='activity-btn-text'>
                    Prize History
                  </p>
                </button>
              </div>
              <div>
                <div className='flex-column items-start rounded-[16px] contract-history'>
                  <CardList />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
