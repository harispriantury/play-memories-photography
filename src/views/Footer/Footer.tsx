import React from "react"
import logo from '../../Assets/icons/wm.png.png'
export const Footer = () => {
    return (
        <div id="footer" className="bg-[#27374D] h-60 flex justify-center py-10">
            <div className="w-10/12 flex justify-between">
                <div className="text-white w-1/2">
                    <div><img className="hover:scale-105 hover:duration-1000" style={{ width: "200px" }} src={logo} alt="" /></div>
                    <p>The most trusted and complete photography services in Indonesia</p>
                </div>
                <div className="grid grid-cols-3">
                    <div className="text-white">
                        <h1 className="pb-3">LEARN MORE</h1>
                        <p>About Us</p>
                        <p>FAQ</p>
                        <p>Terms and Conditions</p>
                        <p>Privacy Police</p>
                    </div>
                    <div className="text-white">
                        <h1 className="pb-3">SOCIAL</h1>
                        <p>Facebook</p>
                        <p>Instagram</p>
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