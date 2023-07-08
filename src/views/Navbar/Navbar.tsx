
import React, { FC } from "react"
import { NavbarList } from "../../components/NavList/NavbarList"
import { navList } from "."
import logo from '../../Assets/icons/wm.png.png'
import { ImInstagram, ImWhatsapp } from "react-icons/im";
import { CustomButton } from "../../components/Button/CustomButton";
import { useLocation } from "react-router-dom";

interface TNavbar {
  style: string
  showButton: boolean
}

export const Navbar: FC<TNavbar> = ({ style, showButton = false }) => {
  const location = useLocation();
  return (
    <div className={`bg-[#27374D] h-20 px-60 flex items-center justify-between ${style}`}>
      <div className="w-44">
        <img
          className=""
          style={{
            width: "130px",
            objectFit: "cover"
          }} src={logo} alt="gambar1" />
      </div>
      <div className="flex flex-end items-center">
        <div className="flex gap-2">
          {
            navList.map((item) => {
              return (
                <div key={item.name}>
                  <NavbarList url={item.url} name={item.name} style={`${location.pathname === item.url ? 'text-slate-500 font-semibold' : 'text-white'}`} />
                </div>
              )
            })
          }
        </div>
        <div className="ml-10">
          <div
            onClick={() => {
              window.location.href = 'https://instagram.com/play.memories_?igshid=MjEwN2IyYWYwYw=='
            }}
            className="flex items-center gap-2 text-white hover:opacity-40 duration-1000 cursor-pointer">
            <ImInstagram color="white" />
            <p>instagram</p>
          </div>
          <div
            onClick={() => {
              window.location.href = 'https://wa.me/6285280145328'
            }}
            className="flex items-center gap-2 text-white hover:opacity-40 duration-1000 cursor-pointer">
            <ImWhatsapp color="white" />
            <p>Whatsapp</p>
          </div>
        </div>
        <div className="px-8">
          {
            showButton && (
              <CustomButton name="BOOK" style="bg-white text-[#27374D] hover:scale-105 hover:shadow-sm hover:shadow-white" />
            )
          }
        </div>
      </div>
    </div>
  )
}