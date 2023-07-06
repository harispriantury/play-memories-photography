import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

interface TNavbarList {
    name: string
    url: string
}

export const NavbarList: FC<TNavbarList> = ({ name, url }) => {
    const navigate = useNavigate()
    return (
        <button onClick={() => {
            navigate(`${url}`)
        }} className="text-white flex justify-between gap-3 px-4 py-3 rounded-lg hover:text-slate-500 duration-500">
            <p>{name}</p>
        </button>
    )
}