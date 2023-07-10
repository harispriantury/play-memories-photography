import React, { FC } from "react"
import { IconType } from "react-icons";
import { ImCamera } from "react-icons/im"
import { MdSportsSoccer, MdOutlineDownhillSkiing, MdOutlineDirectionsBike, MdSportsMotorsports } from "react-icons/md";
import { TbFriends } from "react-icons/tb";

interface IPricing {
    type: string
    totalHour: number,
    totalPhoto: number,
    icon: IconType
}

interface TPricing {
    style: string;
}

export const Pricing: FC<TPricing> = ({ style }) => {
    const dataPricing: IPricing[] = [
        {
            type: 'Sport Photography',
            totalHour: 1,
            totalPhoto: 200,
            icon: MdSportsSoccer
        },
        {
            type: 'Sport Photography',
            totalHour: 2,
            totalPhoto: 400,
            icon: MdOutlineDirectionsBike
        },
        {
            type: 'Sport Photography',
            totalHour: 3,
            totalPhoto: 600,
            icon: MdSportsMotorsports
        },
        {
            type: 'potrait photography',
            totalHour: 1,
            totalPhoto: 70,
            icon: ImCamera
        },
        {
            type: 'Event Photography',
            totalHour: 4,
            totalPhoto: 700,
            icon: MdOutlineDownhillSkiing
        },
        {
            type: 'Prewedding Photography',
            totalHour: 2,
            totalPhoto: 100,
            icon: TbFriends
        },
    ]
    return (
        <>
            <div className={`w-10/12 ${style}`}>
                <h1 className="max-md:text-xl text-4xl font-semibold text-white text-center max-sm:p-2 p-8">BEST CHOISES</h1>
                <div className="max-sm:mt-4 grid grid-cols-3 w-full bg-[#DDE6ED] rounded-3xl shadow-xl">
                    {
                        dataPricing.map((item, index) => {
                            return (
                                <div key={index} className="max-sm:mx-2 mx-8 flex flex-col items-center gap-8 p-8">
                                    <item.icon color="#27374D" size={80} />
                                    <div className="text-center">
                                        <h1 className="text-[#27374D] max-sm:text-base max-md:text-xl text-3xl font-bold">{item.type}</h1>
                                        <h1 className="text-[#27374D] max-sm:text-sm text-2xl">{item.totalHour} Hour</h1>
                                        <p className="text-[#27374D] max-sm:text-sm text-lg">{item.totalPhoto} Photo</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}