import React, { FC } from "react"

interface TButton {
    name: string
    handleClick?: () => void
    style: string
    type?: boolean
}

export const CustomButton: FC<TButton> = ({ name, handleClick, style, type = false }) => {
    return (
        <>
            <button type={type ? 'submit' : 'button'} className={`px-5 py-2 rounded-2xl ${style}`} onClick={handleClick}>
                {name}
            </button>
        </>
    )
}