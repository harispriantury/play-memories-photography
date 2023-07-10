import React, { FC } from "react"

interface IStep {
    numb: number,
    title: string,
    subtitle: string
}

interface TStep {
    style: string
}

export const Step: FC<TStep> = ({ style }) => {
    const dataStep: IStep[] = [
        {
            numb: 1,
            title: "Book",
            subtitle: "Book your preferred photographer."
        },
        {
            numb: 2,
            title: "Photo Shot",
            subtitle: "Get the best photo shoot experience."
        },
        {
            numb: 3,
            title: "Editing",
            subtitle: "Doing some magic to your photos."
        },
        {
            numb: 4,
            title: "Delivery",
            subtitle: "Deliver your awesome photos."
        }
    ]
    return (
        <>
            <div className={`max-sm:w-11/12 max-lg:w-10/12 w-8/12 ${style}`}>
                <div>
                    <h1 className="font-bold max-md:text-lg text-4xl text-white text-center">ONLY 4 STEPS</h1>
                </div>
                <div className="grid grid-cols-4">
                    {
                        dataStep.map((item) => {
                            return (
                                <div key={item.numb} className="flex flex-col items-center gap-4 p-6">
                                    <div className="max-sm:w-12 max-sm:h-12 w-20 h-20 rounded-full bg-white flex justify-center items-center">
                                        <span className="max-sm:text-xl text-3xl text-[#27374D]">{item.numb}</span>
                                    </div>
                                    <div className="text-center text-white">
                                        <h1 className="max-sm:text-base  text-xl font-bold">{item.title}</h1>
                                        <p className="max-sm:text-[10px] text-sm">{item.subtitle}</p>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </>
    )
}