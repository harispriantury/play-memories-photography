
import React from "react"
import { NavbarList } from "../../components/NavList/NavbarList"
import { navList } from "."
import logo from '../../Assets/icons/wm.png.png'
import { ImInstagram, ImWhatsapp } from "react-icons/im";
import { CustomButton } from "../../components/Button/CustomButton";


export const Navbar = () => {
  return (
    <div className="bg-[#27374D] h-20 px-60 flex items-center justify-between">
      <div className="w-44">
        <img
          className="hover:scale-105 hover:duration-1000"
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
                  <NavbarList url={item.url} name={item.name} />
                </div>
              )
            })
          }
        </div>
        <div className="ml-10">
          <div className="flex items-center gap-2 text-white hover:opacity-40 duration-1000 cursor-pointer">
            <ImInstagram color="white" />
            <p>instagram</p>
          </div>
          <div className="flex items-center gap-2 text-white hover:opacity-40 duration-1000 cursor-pointer">
            <ImWhatsapp color="white" />
            <p>Whatsapp</p>
          </div>
        </div>
        <div className="px-8">
          <CustomButton name="BOOK" style="bg-white text-[#27374D] hover:scale-105 hover:shadow-sm hover:shadow-white" />
        </div>
      </div>
    </div>
  )
}