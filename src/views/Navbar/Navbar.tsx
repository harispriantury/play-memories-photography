
import React, { FC, useState } from "react"
import { NavbarList } from "../../components/NavList/NavbarList"
import { navList } from "."
import logo from '../../Assets/icons/wm.png.png'
import { ImInstagram, ImWhatsapp } from "react-icons/im";
import { CustomButton } from "../../components/Button/CustomButton";
import { useLocation, useNavigate } from "react-router-dom";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";

interface TNavbar {
  style: string
  showButton: boolean
}

export const Navbar: FC<TNavbar> = ({ style, showButton = false }) => {
  const [navMobile, setNavMobile] = useState<boolean>(false);


  const handleBooking = () => {
    navigate('/order')
  }
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="">
      <div className={`w-full bg-[#27374D] h-20 flex justify-center items-center ${style}`}>
        <div className="w-11/12 flex items-center justify-between">
          <div className="">
            <img
              className=""
              style={{
                width: "130px",
                objectFit: "cover"
              }} src={logo} alt="gambar1" />
          </div>
          <div className="w-full flex flex-end overflow-x-hidden items-center max-sm:hidden">
            <div className="w-full flex justify-end lg:gap-3 xl:gap-5">
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
            <div className="ml-10 max-lg:hidden">
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
            <div className="px-8 max-sm:hidden max-md:p-1 max-lg:p-4">
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
          <div className="sm:hidden pl-20 pr-5">
            {
              navMobile ? (
                <AiFillCloseCircle size={40} color="white" onClick={() => { setNavMobile(!navMobile) }} className="cursor-pointer" />
              ) : (
                <HiMenu size={40} color="white" onClick={() => { setNavMobile(!navMobile); }} className="cursor-pointer" />
              )
            }
          </div>
        </div>
      </div>

      {/* menu mobile */}
      {
        navMobile && (
          <div className="bg-[#27374D] flex justify-center sm:hidden">
            <div className="m-auto flex flex-col justify-center items-center gap-2">

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
            <div className="w-10/12 flex flex-col gap-1">
              {
                navList.map((item, index) => {
                  return (
                    <NavbarList key={index} name={item.name} url={item.url} style={`${location.pathname === item.url ? 'text-slate-500 font-semibold' : 'text-white'}`} />
                  )
                })
              }
            </div>
          </div>
        )
      }

    </div>
  )
}