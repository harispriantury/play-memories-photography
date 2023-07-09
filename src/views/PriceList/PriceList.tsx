import React from "react"
import { CustomButton } from "../../components/Button/CustomButton"
import { dataTable } from "../../Data/dataTable"
import { useNavigate } from "react-router-dom"

interface IHeaderTable {
    label: string
}

export const PriceList = () => {
    const navigate = useNavigate()

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

    return (
        <div className="flex justify-center h-screen">
            <div className="w-10/12">
                <h1 className="text-4xl text-center font-semibold mt-20 text-[#27374D]">
                    PRICING
                </h1>
                <p className="text-[#Get your photo taken from IDR 250.000/Hour] text-center my-2">
                    Get your photo taken from IDR 100.000</p>
                <div className="flex justify-center">
                    <table className="w-11/12 border border-black my-10">
                        <thead className="">
                            <tr className="">
                                {
                                    headerTable.map((item) => {
                                        return (
                                            <th key={item.label} className="border border-black bg-[#526D82] text-white py-3">
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
                                            <td className="border border-black text-center py-3">{item.category}</td>
                                            <td className="border border-black text-center py-3">{item.duration}</td>
                                            <td className="border border-black text-center py-3">{item.numberOfPhotos}</td>
                                            <td className="border border-black text-center py-3">{Intl.NumberFormat("id-ID", {
                                                style: "currency",
                                                currency: "IDR"
                                            }).format(item.normalPrice)}</td>
                                            <td className="border border-black text-center py-3">{item.discount} %</td>
                                            <td className="border border-black text-center py-3">{Intl.NumberFormat("id-ID", {
                                                style: "currency",
                                                currency: "IDR"
                                            }).format(item.normalPrice * (100 - item.discount) / 100)}</td>
                                            <td className="border border-black text-center">
                                                <CustomButton name="BOOK NOW" style="bg-[#27374D] text-white" handleClick={() => { navigate('/order'); }}
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