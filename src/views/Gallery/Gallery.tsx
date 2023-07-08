import React, { useState } from "react"
import pic1 from '../../Assets/Images/playMemories-2.jpg'
import pic2 from '../../Assets/Images/playMemories-5.jpg'
import pic3 from '../../Assets/Images/playMemories-8.jpg'
import pic4 from '../../Assets/Images/playMemories-9.jpg'
import pic5 from '../../Assets/Images/playMemories-10.jpg'
import pic6 from '../../Assets/Images/playMemories-11.jpg'
import pic7 from '../../Assets/Images/playMemories-14.jpg'
import pic8 from '../../Assets/Images/playMemories-15.jpg'
import pic9 from '../../Assets/Images/playMemories-17.jpg'
import pic10 from '../../Assets/Images/playMemories-20.jpg'
import pic11 from '../../Assets/Images/playMemories-21.jpg'
import pic12 from '../../Assets/Images/playMemories-23.jpg'
import pic13 from '../../Assets/Images/playMemories-24.jpg'
import pic14 from '../../Assets/Images/playMemories-25.jpg'
import pic15 from '../../Assets/Images/playMemories-26.jpg'
import pic16 from '../../Assets/Images/playMemories-27.jpg'
import pic17 from '../../Assets/Images/car (1).jpg'
import pic18 from '../../Assets/Images/car (2).jpg'
import pic19 from '../../Assets/Images/car (3).jpg'
import pic20 from '../../Assets/Images/car (4).jpg'
import pic21 from '../../Assets/Images/car (5).jpg'
import pic22 from '../../Assets/Images/car (6).jpg'
import pic23 from '../../Assets/Images/car (7).jpg'
import pic24 from '../../Assets/Images/car (8).jpg'
import pic25 from '../../Assets/Images/car (9).jpg'
import pic26 from '../../Assets/Images/car (10).jpg'
import pic27 from '../../Assets/Images/car (11).jpg'




export const Gallery = () => {
    const [column1] = useState([pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27])
    return (
        <div className="flex justify-center">
            <div className=" w-10/12 mb-16">
                <h1 className="text-4xl text-center text-[#27374D] font-semibold p-20">GALLERY PHOTO</h1>
                <div className="grid grid-cols-3 gap-2">
                    <div className="">
                        {
                            column1.slice(0, 7).map((item, index) => {
                                return (
                                    <div key={index} className="shadow-2xl flex flex-col gap-2 border-4 border-[#27374D] rounded-3xl overflow-hidden mt-2 opacity-70 hover:opacity-100 hover:scale-95 hover:duration-200">
                                        <img src={item} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="">
                        {
                            column1.slice(8, 16).map((item, index) => {
                                return (
                                    <div key={index} className="shadow-2xl flex flex-col gap-2 border-4 border-[#27374D] rounded-3xl overflow-hidden mt-2 opacity-70 hover:opacity-100 hover:scale-95 hover:duration-200">
                                        <img src={item} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="">
                        {
                            column1.slice(17, 27).map((item, index) => {
                                return (
                                    <div key={index} className="shadow-2xl flex flex-col gap-2 border-4 border-[#27374D] rounded-3xl overflow-hidden mt-2 opacity-70 hover:opacity-100 hover:scale-95 hover:duration-200">
                                        <img src={item} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}