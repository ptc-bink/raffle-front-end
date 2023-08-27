import React from 'react'
import { stringify } from 'querystring';

import WinnerTableList from '../Component/Table/winnerTableList';

export default function WinnerTable() {

  const tableDB: object[] = [
    {
      competition: {
        avatarUrl: "./assets/logo/nft2.png",
        name: "King Punk 2023 Edition",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Lucid Punk on Discord",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Alissa Soe",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Green Hat Punk",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Adid Hdo",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "2 Second Ago",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Badass Smoker",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Ananata Makasih",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "2 Second Ago",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "King Punk 2023 Edition",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jesicca Jane",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "4 Second Ago",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Lucid Punk on Discord",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "James Totem",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "4 Second Ago",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Green Hat Punk",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Solomon Yiu",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Badass Smoker",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "5 Second Agp",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "King Punk 2023 Edition",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Lucid Punk on Discord",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Green Hat Punk",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Badass Smoker",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "2 Second Ago",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "King Punk 2023 Edition",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Lucid Punk on Discord",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Green Hat Punk",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Badass Smoker",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Gerald Adam",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Lucid Punk on Discord",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Green Hat Punk",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Badass Smoker",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "King Punk 2023 Edition",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Lucid Punk on Discord",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Green Hat Punk",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Jason Statham",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
    {
      competition: {
        avatarUrl: "./assets/logo/nft1.png",
        name: "Badass Smoker",
        index: "#17239",
      },
      winner: {
        avatarUrl: "./assets/logo/hum1.png",
        name: "Gerald Adam",
      },
      prize: {
        ether: 11.32,
        dollar: 50.89,
      },
      time: "Just Now",
    },
  ];

  return (
    <div className='px-[130px] py-[50px] gap-6 flex-column bottom-line'>
      <p className='text-left text-5xl leading-normal font-extrabold capitalize text-white'>
        Winners
      </p>
      <div className='items-start flex-rows self-stretch gap-4'>
        <button className='activity-btn px-6 py-3 rounded-3xl'>
          <p className='text-[18px] capitalize leading-normal font-semibold text-white'>
            Competitons
          </p>
        </button>
        <button className='activity-partner-btn px-6 py-3 rounded-3xl'>
          <p className='text-[18px] capitalize leading-normal font-semibold text-white'>
            Head 2 Head
          </p>
        </button>
        <button className='activity-partner-btn px-6 py-3 rounded-3xl'>
          <p className='text-[18px] capitalize leading-normal font-semibold text-white'>
            Winbox
          </p>
        </button>
      </div>
      <div className='rounded-2xl winner-table-list'>
        <WinnerTableList propsList={tableDB} />
      </div>
      <div className='xy-center'>
        <button className='luci-black-btn text-white px-8 py-4 rounded-full'>View more</button>
      </div>
    </div>
  )
}
