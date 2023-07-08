import React from "react"
import { CustomButton } from "../../components/Button/CustomButton"

// interface ICategories {
//     name: string,
//     value: string
// }

interface IHeaderTable {
    label: string
}

interface IDataTable {
    category: string,
    duration: string,
    numberOfPhotos: number
    normalPrice: number,
    discount: number,
}

export const PriceList = () => {
    // const categories: ICategories[] = [
    //     {
    //         name: 'Sport Photography',
    //         value: 'sport'
    //     },
    //     {
    //         name: 'Potrait Photography',
    //         value: 'potrait'
    //     },
    //     {
    //         name: 'Event Photography',
    //         value: 'event'
    //     },
    //     {
    //         name: 'Prewedding Photography',
    //         value: 'prewedding'
    //     }
    // ]

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

    const dataTable: IDataTable[] = [
        {
            category: 'Sport Photography',
            duration: '1 Hour',
            numberOfPhotos: 200,
            discount: 10,
            normalPrice: 250000,
        },
        {
            category: 'Sport Photography',
            duration: '2 Hour',
            numberOfPhotos: 350,
            discount: 20,
            normalPrice: 350000,
        },
        {
            category: 'Sport Photography',
            duration: '3 Hour',
            numberOfPhotos: 500,
            discount: 26,
            normalPrice: 400000,
        },
        {
            category: 'Potrait Photography',
            duration: '1 Hour',
            numberOfPhotos: 70,
            discount: 5,
            normalPrice: 120000,
        },
        {
            category: 'Event Photography',
            duration: '4 Hour',
            numberOfPhotos: 700,
            discount: 42,
            normalPrice: 500000,
        },
        {
            category: 'Prewedding Photography',
            duration: '1 Hour',
            numberOfPhotos: 70,
            discount: 48,
            normalPrice: 200000,
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
                                                <CustomButton name="BOOK NOW" style="bg-[#27374D] text-white" handleClick={() => { console.log(item); }
                                                } />
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                {/* <div className="border border-black p-8 flex justify-center">
                    <select
                        placeholder="select category"
                        className="px-5 py-3"
                    >
                        {
                            categories.map((item) => {
                                return (
                                    <option key={item.value}>{item.name}</option>
                                )
                            })
                        }
                    </select>

                </div> */}
            </div>
        </div>
    )
}