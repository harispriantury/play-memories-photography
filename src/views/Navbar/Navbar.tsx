
import React, { FC } from "react"
import { NavbarList } from "../../components/NavList/NavbarList"
import { navList } from "."
import logo from '../../Assets/icons/wm.png.png'
import { ImInstagram, ImWhatsapp } from "react-icons/im";
import { CustomButton } from "../../components/Button/CustomButton";
import { useLocation, useNavigate } from "react-router-dom";

interface TNavbar {
  style: string
  showButton: boolean
}

export const Navbar: FC<TNavbar> = ({ style, showButton = false }) => {
  const handleBooking = () => {
    navigate('/order')
  }
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className={`w-full bg-[#27374D] h-20 flex justify-center items-center ${style}`}>
      <div className="max-md:w-full w-10/12 flex items-center justify-between">
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
                const url = 'https://instagram.com/play.memories_?igshid=MjEwN2IyYWYwYw=='
                window.open(url, '_blank')
              }}
              className="flex items-center gap-2 text-white hover:opacity-40 duration-1000 cursor-pointer">
              <ImInstagram color="white" />
              <p>instagram</p>
            </div>
            <div
              onClick={() => {
                const url = 'https://wa.me/6285280145328'
                window.open(url, '_black')
              }}
              className="flex items-center gap-2 text-white hover:opacity-40 duration-1000 cursor-pointer">
              <ImWhatsapp color="white" />
              <p>Whatsapp</p>
            </div>
          </div>
          <div className="px-8">
            {
              showButton && (
                <CustomButton
                  name="BOOK"
                  style="bg-white text-[#27374D] hover:scale-105 hover:shadow-sm hover:shadow-white"
                  handleClick={handleBooking}
                />
              )
            }
          </div>
        </div>
      </div>

    </div>
  )
}