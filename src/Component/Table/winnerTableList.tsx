import React from 'react'

interface Props {
  propsList: any[];
}

const WinnerTableList: React.FC<Props> = ({ propsList }) => {

  return (
    <table className='w-full table-auto'>
      <thead className='text-white'>
        <th className=' px-6 py-4 text-left'>Competition</th>
        <th className=' py-4 text-left'>Winner</th>
        <th className=' py-4 text-left'>Prize Value On Date</th>
        <th className=' px-6 py-4 text-right'>End date</th>
      </thead>
      <tbody>
        {propsList.map((propList, propIndex) => (
          propIndex >= 16 ? null :
            <tr className=" even:bg-[#191C1E] odd:bg-[#131619] hover:bg-[#242729] transition-all ease-linear">
              <td className="py-[16px] first:pl-[24px] last:pr-[24px] last:text-right">
                <div className="flex text-[16px] font-bold capitalize gap-[16px]">
                  <img
                    src={propList.competition.avatarUrl}
                    alt="avatar png"
                    className="w-[32px] h-[32px] rounded-[6px]"
                  />
                  <div className="flex flex-col gap-[3px]">
                    <p className="text-white text-[14px] font-semibold capitalize">
                      {propList.competition.name}
                    </p>
                    <p className="text-[#E5E1A8] text-[10px] font-semibold">{propList.competition.index}</p>
                  </div>
                </div>
              </td>
              <td className="py-[16px] first:pl-[24px] last:pr-[24px] last:text-right">
                <div className="flex flex-row items-center text-[16px] font-bold capitalize gap-[16px]">
                  <img
                      src={propList.winner.avatarUrl}
                    alt="avatar png"
                    className="w-[32px] h-[32px] rounded-full border border-[131619]"
                  />
                  <p className="text-white text-[14px] leading-[17px] font-semibold capitalize">
                    {propList.winner.name}
                  </p>
                </div>
              </td>
              <td className="py-[16px] first:pl-[24px] last:pr-[24px] last:text-right">
                <div className="flex flex-row gap-[10px] items-center">
                  <div className="gap-[8px] flex items-center">
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
                    <p className="text-[16px] font-semibold capitalize leading-[18px] text-[#E5E1A8]">
                      {propList.prize.ether}
                    </p>
                  </div>
                  <p className="text-[16px] leading-[19px] text-[#676A71] font-medium capitalize">
                    ${propList.prize.dollar}
                  </p>
                </div>
              </td>
              <td className="py-[16px] first:pl-[24px] last:pr-[24px]">
                <div className="flex gap-[8px] items-center text-[#E5E1A8] hover:text-white justify-end cursor-pointer">
                  <p className="text-[14px] font-medium capitalize">{propList.time}</p>
                  {/* <RiExternalLinkLine size={"24px"} /> */}
                </div>
              </td>
            </tr>
        ))}
      </tbody>
    </table>
  )
}

export default WinnerTableList
