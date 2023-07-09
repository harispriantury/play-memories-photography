import React, { useState } from "react";

import pic1 from '../../Assets/Images/car (1).jpg'
import pic2 from '../../Assets/Images/car (2).jpg'
import pic3 from '../../Assets/Images/car (3).jpg'
import pic4 from '../../Assets/Images/car (4).jpg'
import pic5 from '../../Assets/Images/car (5).jpg'
import pic6 from '../../Assets/Images/car (6).jpg'
import pic7 from '../../Assets/Images/car (7).jpg'
import pic8 from '../../Assets/Images/car (8).jpg'
import pic9 from '../../Assets/Images/car (9).jpg'
import pic10 from '../../Assets/Images/car (10).jpg'
import pic11 from '../../Assets/Images/car (11).jpg'


import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";


export const CarouselPage = () => {
    const [images] = useState([pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11])
    const [option] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    const [selectedImage, setSelectedImage] = useState(0)
    return (
        <div className="flex justify-center items-center gap-8 relative">
            <BsArrowLeftSquareFill
                className="hover:scale-105 cursor-pointer"
                color="27374D"
                size={50}
                onClick={() => {
                    if (selectedImage === 0) {
                        setSelectedImage(1000)
                    } else {
                        setSelectedImage(selectedImage - 100)
                    }
                }}
            />
            <div className="flex w-10/12 overflow-hidden relative">
                {
                    images.map((item, index) => {
                        return (
                            <div key={index} className={`flex-shrink-0 w-full duration-1000`}
                                style={{
                                    transform: `translateX(-${selectedImage}%)`
                                }}
                            >
                                <img
                                    src={item}
                                    className={`w-full`}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <BsArrowRightSquareFill
                className="hover:scale-105 cursor-pointer"
                color="27374D"
                size={50}
                onClick={() => {
                    if (selectedImage === 1000) {
                        setSelectedImage(0)
                    } else {
                        setSelectedImage(selectedImage + 100)
                    }
                }}
            />
            <div className="absolute w-1/3 z-10 flex justify-around gap-8 bottom-10">
                {
                    option.map((item) => {
                        return (
                            <button
                                onClick={() => {
                                    setSelectedImage(item * 100)
                                }}
                                className={`font-bold hover:scale-125 text-white ${item * 100 === selectedImage ? 'scale-150 opacity-50' : 'opacity-30'}`}
                                name={`${item}`}
                                value={`${item}`}
                                key={item}>
                                ⚪️
                            </button>
                        )
                    })
                }
            </div>
        </div >
    )
}