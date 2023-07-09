import React from "react"
import { dataTable } from "../../Data/dataTable"
import { CustomDropdownCategory } from "../../components/CustomDropdown/CustomDropdown"
import { DropdownLocation } from "../../components/CustomDropdown/DropdownLocation"
import { CustomButton } from "../../components/Button/CustomButton"
import { Toast } from "../../components/Toast/toast"
import { useCustom } from "./hooks"

export const Order = () => {
    const {
        data: {
            dataOrder,
            district,
            subDistrict,
            toast
        }, method: {
            handleChange,
            handleSubmit
        } } = useCustom()


    return (
        <div className="flex justify-center">
            {
                toast && <Toast />
            }
            <div className="w-8/12 bg-[#DDE6ED] my-10 rounded-3xl shadow-xl">
                <h1 className="text-center font-semibold text-4xl my-10 text-[#27374D]">ORDER</h1>
                <form onSubmit={handleSubmit}
                >
                    <div className="w-full flex flex-col gap-8 px-8 pb-8 text-[#27374D]">
                        <div className="grid grid-cols-12">
                            <label className="col-span-5 py-2" htmlFor="">Name</label>
                            <input
                                required
                                name="name"
                                value={dataOrder?.name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { handleChange(e); }}
                                className="col-span-6 py-2 px-2 rounded-lg"
                                type="text"
                                placeholder="Enter your name"

                            />
                        </div>
                        <div className="grid grid-cols-12">
                            <label className="col-span-5 py-2" htmlFor="">Variant</label>
                            <div className="col-span-6">
                                <CustomDropdownCategory
                                    name="variant"
                                    data={dataTable}
                                    value="category"
                                    handleChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <label className="col-span-5 py-2" htmlFor="">Date</label>
                            <input
                                required
                                className="col-span-6 px-2 py-2 text-[#27374D] rounded-lg"
                                name="date"
                                type="datetime-local"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    handleChange(e)
                                }}
                            />
                        </div>
                        <div className="grid grid-cols-12">
                            <label className="col-span-5 py-2" htmlFor="">District</label>
                            <div className="col-span-6">
                                <DropdownLocation
                                    data={district}
                                    label="nama"
                                    name="district"
                                    handleChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <label className="col-span-5 py-2" htmlFor="">Village</label>
                            <div className="col-span-6">
                                <DropdownLocation
                                    data={subDistrict}
                                    label="nama"
                                    name="village"
                                    handleChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <CustomButton type={true} name="ORDER NOW" style="bg-[#27374D] text-white" />
                        </div>
                    </div>
                </form>

            </div>
        </div >
    )
}