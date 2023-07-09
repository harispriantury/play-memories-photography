import React from "react"
import logo from '../../Assets/icons/wm.png.png'
export const Footer = () => {
    return (
        <div id="footer" className="bg-[#27374D] h-60 flex justify-center py-10">
            <div className="w-10/12 flex justify-between">
                <div className="text-white w-1/2">
                    <div><img className="" style={{ width: "200px" }} src={logo} alt="" /></div>
                    <p>The most trusted and complete photography services in Indonesia</p>
                </div>
                <div className="grid grid-cols-3">
                    <div className="text-white">
                        <h1 className="pb-3">LEARN MORE</h1>
                        <p className="cursor-pointer">About Us</p>
                        <p className="cursor-pointer">FAQ</p>
                        <p className="cursor-pointer">Terms and Conditions</p>
                        <p className="cursor-pointer">Privacy Police</p>
                    </div>
                    <div className="text-white">
                        <h1 className="pb-3">SOCIAL</h1>
                        <p className="cursor-pointer" onClick={() => window.open('https://www.instagram.com/play.memories_/?igshid=MjEwN2IyYWYwYw%3D%3D', '_black')}>Instagram</p>
                        <p className="cursor-pointer" onClick={() => window.open('https://www.facebook.com/harispriantury', '_black')}>Facebook</p>
                    </div>
                    <div className="text-white">
                        <h1 className="pb-3">CONTACT</h1>
                        <p>jl. dukuh 2/6 , Alian 54352 Kebumen Jateng Indonesia</p>
                    </div>
                </div>
            </div>
        </div>
    )
}