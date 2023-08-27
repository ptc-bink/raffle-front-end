import React from 'react'

const InfoCard: React.FC<InfoCardProps> = ({ index }) => {
    return (
        <div>
            <div className="card-box flex-column p-4 flex-column gap-4 rounded-[32px]">
                <div className='img-box p-2 rounded-2xl xy-center'>
                    <img src={"./assets/Nft/nft"+index+".png"} className='w-full h-full' alt="" />
                </div>
            </div>
        </div>
    )
}

interface InfoCardProps {
    index: number;
}

export default InfoCard