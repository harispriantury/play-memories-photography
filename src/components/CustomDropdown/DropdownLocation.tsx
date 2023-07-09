import React, { FC } from "react"

interface TDropdownLocation {
    data: any
    name: string
    label: string
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const DropdownLocation: FC<TDropdownLocation> = ({ data, handleChange, label, name }) => {
    const onClickChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleChange(e)
    }
    return (
        <div className="w-full">
            <select
                name={name}
                placeholder="select category"
                className="w-full px-2 py-2  text-[#27374D] rounded-lg bg-white"
                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                    onClickChange(e)
                }}
            >
                <option value="" selected disabled hidden>Choose here</option>
                {
                    Array.isArray(data) && data.length > 0 && data.map((item: any, index: number) => {
                        return (
                            <option
                                value={item.name}
                                key={index}
                            >
                                {item[label]}
                            </option>
                        )
                    })
                }
            </select>
        </div>
    )
}