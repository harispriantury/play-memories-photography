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
            <div className="w-10/12 pb-20 flex flex-col items-center">
                <h1 className="text-4xl text-[#27374D] font-semibold p-8">Satisfied Customer Testimoni</h1>
                <div className=" w-full flex  gap-3 overflow-x-scroll">
                    {
                        data.map((item) => {
                            return (
                                <div key={item.id} className="border border-[#27374D] rounded-3xl px-2 py-12 w-1/3 h-auto m-8 box-content flex flex-col flex-shrink-0 gap-6 items-center">
                                    <BiSolidUserCircle color="27374D" size={120} />
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-center gap-2">
                                            <ImMail /> <p>{item.email}</p>
                                        </div>
                                        <div >
                                            <p className="text-center">{item.body}</p>
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