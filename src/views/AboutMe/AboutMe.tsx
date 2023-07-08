import React from "react"
import logo from '../../Assets/icons/wm.png.png'

export const AboutMe = () => {
    return (
        <div className="h-screen flex justify-center">
            <div className="w-10/12 flex flex-col items-center">
                <div className="w-2/6 bg-[#27374D] p-3 my-10">
                    <img src={logo} alt="" style={{

                    }} />
                </div>
                <p>we are photographers who have a lot of great experience. Find
                    all your best memorable photos from sports photography, pre-wedding, product, event and many more. we always innovate all the time to make us more developed.
                    <br />
                    we are ready throughout the city of Kebumen with very affordable prices and the best service for you
                </p>
            </div>
        </div>
    )
}