import React, { FC } from "react"

interface TCustomDropdown {
    data: any
    name: string
    value: string
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const CustomDropdownCategory: FC<TCustomDropdown> = ({ data, handleChange }) => {
    const onClickChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleChange(e)
    }
    return (
        <div className="w-full">
            <select
                name='variant'
                placeholder="select category"
                className="w-full px-2 py-2 rounded-lg text-[#27374D] bg-white"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    onClickChange(e)
                }}
            >
                <option value="" selected disabled hidden>Choose here</option>
                {
                    Array.isArray(data) && data.length > 0 && data.map((item: any, index: number) => {
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