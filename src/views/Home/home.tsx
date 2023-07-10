import React from "react"
import { CarouselPage } from "../../components/Carousel/Carousel"
import { Superiority } from "../../components/Superiority/Superiority"
import { Step } from "../../components/Step/Step"
import { Rating } from "../../components/Rating/Rating"
import { useCustom } from "./hooks"
import { Pricing } from "../../components/Pricing/Pricing"

export const Home = () => {

  const { data } = useCustom();
  return (
    <div className="">
      <div>
        <CarouselPage />
      </div>
      <div className="flex flex-col items-center">
        <Superiority />
      </div>
      <div className="bg-[#27374D] h-[350px] mt-32 py-14 flex flex-col items-center">
        <Step style="" />
      </div>
      <div className="bg-[#27374D] h-[500px] relative flex flex-col items-center">
        <Pricing style="absolute -bottom-60" />

      </div>
      <div className="pt-60 flex justify-center bg-white">
        <Rating data={data.dataRating} />
      </div>
    </div>
  )
}