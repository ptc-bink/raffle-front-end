import React from 'react'

import MainButton from '../Component/Btn/mainButton'
import NftDetailEdition from '../Component/NftInfo/nftDetailEdition'
import Nft from '../Component/Cards/nft'
import CardList from '../Component/NftInfo/cardList'

export default function RaffleCollection() {
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
          <div className='p-6 gap-6 card-box items-center flex-column rounded-[32px]'>
            <div className='flex-column content-center items-center gap-2'>
              <p className='nft-edition-header-title text-center'> Start to raffle</p>
              <p className='w-[335px] ticket-text text-center text-[#676A71]'>You can enter the raffle by connecting you solana wallet</p>
            </div>
            <button className='luci-red-btn rounded-[100px] gap-[10px] px-8 py-4'>
              <p className='luci-btn-text'>Connect wallet</p>
            </button>
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
