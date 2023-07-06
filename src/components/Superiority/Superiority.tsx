import React from "react";
import { IconType } from "react-icons";
import { ImCamera } from "react-icons/im";
import { TbBook } from "react-icons/tb";
import { BiEdit } from "react-icons/bi";
import { FaCommentDollar } from "react-icons/fa6";

interface ISuperior {
    title: string,
    subTitle: string,
    color: string,
    image: IconType
}

export const Superiority = () => {
    const dataSuperiority: ISuperior[] = [
        {
            title: "Complete Photograpy Service",
            subTitle: "Book your preferred photographer for every occasion.",
            color: "red",
            image: ImCamera
        },
        {
            title: "Fixed Rate",
            subTitle: "Easily booking photographer with fixed hourly rate.",
            color: "blue",
            image: TbBook
        },
        {
            title: "Unlimited Editing",
            subTitle: "Awesome editing to get best phot possible.",
            color: "yellow",
            image: BiEdit
        },
        {
            title: "Secure Payment",
            subTitle: "Payment to photographer only once photo delivered.",
            color: "green",
            image: FaCommentDollar
        },

    ]
    return (
        <>
            <div className="text-center w-10/12 mt-20 rounded-3xl bg-[#DDE6ED] shadow-xl">
                <div className="p-8">
                    <h1 className="text-4xl font-bold text-[#27374D]">PLAY MEMORIES | PHOTOGRAPHY</h1>
                    <p className="text-xl pt-2 text-[#27374D]">FIND THE BEST PHOTOGRAPHER FOR YOUR EVERY NEED</p>
                </div>
                <div className="grid grid-cols-4">
                    {
                        dataSuperiority.map((item) => {
                            return (
                                <>
                                    <div className=" bg-white flex flex-col items-center gap-4 px-6 py-8 rounded-2xl m-8 shadow-lg">
                                        <item.image color="27374D" size={60} />
                                        <div>
                                            <h1 className="text-lg text-[#27374D]">{item.title}</h1>
                                            <p className="text-sm text-[#27374D]">{item.subTitle}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}