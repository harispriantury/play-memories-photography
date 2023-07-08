import React, { useEffect, useState } from "react";

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
    const [option] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
    const [selectedImage, setSelectedImage] = useState(1);
    const [images] = useState([pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11])
    const [activeImage, setActiveImage] = useState(pic1);

    useEffect(() => {
        if (selectedImage === 12) {
            setActiveImage(images[0]);
            setSelectedImage(1)
            return
        } else if (selectedImage === 0) {
            setSelectedImage(1)
            return
        }
        setActiveImage(images[selectedImage - 1])
    }, [selectedImage])
    return (
        <div>
            <div style={{
                backgroundImage: `url(${activeImage})`,
                backgroundSize: 'cover'
            }} className=" h-full w-full flex justify-center items-center gap-10 relative">
                <div className="absolute z-10 flex gap-8 bottom-10">
                    {
                        option.map((item) => {
                            return (
                                <button className={`text-xl font-bold hover:scale-125    text-white opacity-40 ${item === selectedImage ? 'scale-150 duration-700 opacity-80' : 'scale-100'}`} onClick={() => { setSelectedImage(item) }
                                } name={`${item}`} value={`${item}`} key={item}>{item}</button>
                            )
                        })
                    }
                </div>
                <BsArrowLeftSquareFill className="hover:scale-105 cursor-pointer" color="27374D" size={50} onClick={() => {
                    setSelectedImage(selectedImage - 1)
                }} />
                <img style={{
                    width: "80%",
                    height: "auto",
                    maxHeight: "100%",
                    objectFit: "cover",
                    zIndex: 1
                }} src={activeImage}
                    alt=""
                    className="duration-1000"
                />
                <BsArrowRightSquareFill className="hover:scale-105 cursor-pointer" color="27374D" size={50} onClick={() => {
                    setSelectedImage(selectedImage + 1);
                }} />
            </div>
        </div >
    )
}