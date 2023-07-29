import React from "react"
import { CustomButton } from "../../components/Button/CustomButton"
import { dataTable } from "../../Data/dataTable"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changeVariant } from "../../Redux/order/orderslice"

interface IHeaderTable {
    label: string
}

export const PriceList = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const headerTable: IHeaderTable[] = [
        {
            label: 'CATEGORY'
        },
        {
            label: 'DURATION'
        },
        {
            label: 'NUMBER OF PHOTOS'
        },
        {
            label: 'NORMAL PRICE'
        },
        {
            label: 'DISCOUNT'
        },
        {
            label: 'SPECIAL PRICE'
        },
        {
            label: 'ACTION'
        }
    ]

    const handleClick = (url: string, id: number) => {
        dispatch(changeVariant(String(id)))
        navigate(`${url}`);
    }

    return (
        <div className="flex justify-center mb-mb-32">
            <div className="max-sm:w-full w-10/12">
                <h1 className="max-md:text-xl max-md:mt-10 text-4xl text-center font-semibold mt-20 text-[#27374D]">
                    PRICING
                </h1>
                <p className="text-[#27374D] text-center my-2">
                    Get your photo taken from IDR 100.000</p>
                <div className="flex justify-center">
                    <table className="max-md:w-full w-11/12 border border-black my-10">
                        <thead className="">
                            <tr className="">
                                {
                                    headerTable.map((item) => {
                                        return (
                                            <th key={item.label} className="max-md:text-[8px] border border-black bg-[#526D82] text-white py-3">
                                                {item.label}
                                            </th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dataTable.map((item, index) => {
                                    return (
                                        <tr className={`${index % 2 === 0 ? 'bg-[#DDE6ED]' : 'bg-[#9DB2BF]'}  `} key={index}>
                                            <td className="border max-md:text-[8px] border-black text-center py-3">{item.category}</td>
                                            <td className="border max-md:text-[8px] border-black text-center py-3">{item.duration}</td>
                                            <td className="border max-md:text-[8px] border-black text-center py-3">{item.numberOfPhotos}</td>
                                            <td className="border max-md:text-[8px] border-black text-center py-3">{Intl.NumberFormat("id-ID", {
                                                style: "currency",
                                                currency: "IDR"
                                            }).format(item.normalPrice)}</td>
                                            <td className="border max-md:text-[8px] border-black text-center py-3">{item.discount} %</td>
                                            <td className="border max-md:text-[8px] border-black text-center py-3">{Intl.NumberFormat("id-ID", {
                                                style: "currency",
                                                currency: "IDR"
                                            }).format(item.normalPrice * (100 - item.discount) / 100)}</td>
                                            <td className="border max-md:text-[8px] border-black text-center">
                                                <CustomButton name="BOOK NOW" style="max-sm:px-1 max-sm:py-0 max-sm:text-[8px] bg-[#27374D] text-white" handleClick={() => { handleClick('/order', item.id) }}
                                                />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}