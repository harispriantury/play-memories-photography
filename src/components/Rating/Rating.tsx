import React, { FC } from "react"
import { ImMail } from "react-icons/im"
import { BiSolidUserCircle } from "react-icons/bi";

interface IRating {
    id: number,
    email: string,
    body: string
}

interface IDataRating {
    data: IRating[]
}
export const Rating: FC<IDataRating> = ({ data }) => {
    return (
        <>
            <div className="w-10/12 max-sm:mt-28 pb-20 flex flex-col items-center">
                <h1 className="max-md:text-xl text-4xl text-[#27374D] text-center font-semibold p-8">Satisfied Customer Testimoni</h1>
                <div className=" w-full flex max-sm:gap-0 max-md:gap-1 max-lg:gap-2 gap-3 overflow-x-scroll">
                    {
                        data.map((item) => {
                            return (
                                <div key={item.id} className="border border-[#27374D] rounded-3xl max-sm:px-0 px-2 max-sm:py-2 py-12 max-sm:w-3/4 max-md:w-1/2 w-1/3 h-auto max-sm:m-1 max-md:m-2 max-lg:m-2 m-6 flex flex-col flex-shrink-0 gap-6 items-center">
                                    <BiSolidUserCircle color="27374D" size={120} />
                                    <div className="flex flex-col max-md:gap-2 items-center">
                                        <div className="flex items-center gap-2">
                                            <ImMail /> <p className="max-sm:text-sm">{item.email}</p>
                                        </div>
                                        <div >
                                            <p className="text-center max-sm:text-[8px]">{item.body}</p>
                                        </div>
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