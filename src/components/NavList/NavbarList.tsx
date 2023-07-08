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
        }} className={`flex justify-between gap-3 px-4 py-3 rounded-lg hover:text-slate-500 duration-500" ${style}`}>
            <p>{name}</p>
        </button>
    )
}