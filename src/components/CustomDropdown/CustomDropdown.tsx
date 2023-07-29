import React, { FC } from "react"
import { IDataTable } from "../../Data/dataTable"

interface TCustomDropdown {
    data: any
    name: string
    value: string
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const CustomDropdownCategory: FC<TCustomDropdown> = ({ data, handleChange, value }) => {
    const onClickChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleChange(e)
    }
    return (
        <div className="w-full">
            <select
                required
                value={value}
                name='variant'
                placeholder="select category"
                className="w-full px-2 py-2 rounded-lg text-[#27374D] bg-white"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    onClickChange(e)
                }}
            >
                <option value="" selected>Choose here</option>
                {
                    Array.isArray(data) && data.length > 0 && data.map((item: IDataTable, index: number) => {
                        return (
                            <option
                                value={item.id}
                                key={index}>
                                {item.category} - {item.duration} - {item.numberOfPhotos} photo - {item.normalPrice}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}