import React from 'react'
import NftEdition from './nftEdition'

export default function NftDetailEdition() {
    return (
        <div className='pb-8 gap-6 flex-rows'>
            <div className='w-[120px] h-[120px] rounded-full  border-[1px] border-[#292C31] bg-[#101111]'>
                <img className='rounded-full' src="./assets/logo/nft1.png" alt="" />
            </div>
            <div className='gap-2'>
                <div className='nft-edition-header-title'>
                    King Punk 2023 Edition
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.52032 4.14585C8.292 4.08427 9.02459 3.78082 9.61379 3.2787C10.9888 2.10697 13.011 2.10697 14.386 3.2787C14.9752 3.78082 15.7078 4.08427 16.4795 4.14585C18.2803 4.28955 19.7103 5.71953 19.854 7.52032C19.9155 8.292 20.219 9.02459 20.7211 9.61379C21.8928 10.9888 21.8928 13.011 20.7211 14.386C20.219 14.9752 19.9155 15.7078 19.854 16.4795C19.7103 18.2803 18.2803 19.7103 16.4795 19.854C15.7078 19.9155 14.9752 20.219 14.386 20.7211C13.011 21.8928 10.9888 21.8928 9.61379 20.7211C9.02459 20.219 8.292 19.9155 7.52032 19.854C5.71953 19.7103 4.28955 18.2803 4.14585 16.4795C4.08427 15.7078 3.78082 14.9752 3.2787 14.386C2.10697 13.011 2.10697 10.9888 3.2787 9.61379C3.78082 9.02459 4.08427 8.292 4.14585 7.52032C4.28955 5.71953 5.71953 4.28955 7.52032 4.14585ZM16.4484 10.4484C16.9171 9.9798 16.9171 9.22 16.4484 8.75137C15.9798 8.28275 15.22 8.28275 14.7514 8.75137L10.7999 12.7028L9.24843 11.1514C8.7798 10.6827 8.02 10.6827 7.55137 11.1514C7.08275 11.62 7.08275 12.3798 7.55137 12.8484L9.95137 15.2484C10.42 15.7171 11.1798 15.7171 11.6484 15.2484L16.4484 10.4484Z" fill="#E42B2B" />
                    </svg>
                </div>
                <p className='ticket-text font-normal w-[491px] text-[#676A71]'>
                    Step into the vast Ether universe by purchasing an Avatar. These characters were opened through Ether Capsules. After purchasing your Avatar, verify your Nft in the official Discord server to join our universe. We look forward to seeing you there.
                </p>
            </div>
            <NftEdition />
        </div>
    )
}
