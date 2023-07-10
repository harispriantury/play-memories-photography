import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface TNavbarList {
    name: string
    url: string
    style: string
}

export const NavbarList: FC<TNavbarList> = ({ name, url, style }) => {
    const navigate = useNavigate()
    return (
        <button onClick={() => {
            navigate(`${url}`)
        }} className={` whitespace-nowrap w-auto gap-3 px-4 py-3 max-md:px-1 max-md:py-1 max-sm:text-sm rounded-lg hover:text-slate-500 duration-500" ${style}`}>
            {name}
        </button>
    )
}