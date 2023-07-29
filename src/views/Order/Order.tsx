import React from "react"
import { dataTable } from "../../Data/dataTable"
import { CustomDropdownCategory } from "../../components/CustomDropdown/CustomDropdown"
import { CustomButton } from "../../components/Button/CustomButton"
import { useCustom } from "./hooks"
import { connect, useDispatch, useSelector } from "react-redux"
import { RootState } from "../../Redux/store"
import { changeDate, changeLocation, changeName, changeVariant } from "../../Redux/order/orderslice"


export const Order = () => {

    const orderState = (state: RootState) => state.order;

    const {
        name,
        date,
        location,
        variant
    } = useSelector(orderState)
    const dispatch = useDispatch();

    const { method: {
        handleSubmit
    } } = useCustom()


    return (
        <div className="flex justify-center">
            <div className="max-sm:w-11/12 max-md:w-10/12 max-lg:w-9/12 w-8/12 bg-[#DDE6ED] my-10 rounded-3xl shadow-xl">
                <h1 className="max-md:text-xl text-center font-semibold text-4xl my-10 text-[#27374D]">ORDER</h1>
                <form onSubmit={handleSubmit}
                >
                    <div className="w-full flex flex-col gap-8 px-8 pb-8 text-[#27374D]">
                        <div className="grid grid-cols-12">
                            <label className="max-md:col-span-2 col-span-5 py-2" htmlFor="">Name</label>
                            <input
                                required
                                name="name"
                                value={name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(changeName(e.target.value))}
                                className="max-md:col-span-12 col-span-6 py-2 px-2 rounded-lg"
                                type="text"
                                placeholder="Enter your name"

                            />
                        </div>
                        <div className="grid grid-cols-12">
                            <label className="max-md:col-span-2 col-span-5 py-2" htmlFor="">Variant</label>
                            <div className="max-md:col-span-12 col-span-6">
                                <CustomDropdownCategory
                                    name="variant"
                                    data={dataTable}
                                    value={variant}
                                    handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => { dispatch(changeVariant(e.target.value)) }}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <label className="max-md:col-span-2 col-span-5 py-2" htmlFor="">Date</label>
                            <input
                                value={date}
                                required
                                className="max-md:col-span-12 col-span-6 px-2 py-2 text-[#27374D] rounded-lg"
                                name="date"
                                type="datetime-local"
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    dispatch(changeDate(e.target.value))
                                }}
                            />
                        </div>
                        <div className="grid grid-cols-12">
                            <label className="max-md:col-span-2 col-span-5 py-2" htmlFor="">Location</label>
                            <input
                                required
                                name="location"
                                value={location}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { dispatch(changeLocation(e.target.value)) }}
                                className="max-md:col-span-12 col-span-6 py-2 px-2 rounded-lg"
                                type="text"
                                placeholder="Enter location"
                            />
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

const mapStateToProps = (state: any) => ({
    data: state.OrderReducer
})

export default connect(mapStateToProps)(Order);