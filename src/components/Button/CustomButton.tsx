import React, { FC } from "react"

interface TButton {
    name: string
    handleClick?: () => void
    style: string
}

export const CustomButton: FC<TButton> = ({ name, handleClick, style }) => {
    return (
        <>
            <button className={`px-5 py-2 rounded-2xl ${style}`} onClick={handleClick}>
                {name}
            </button>
        </>
    )
}