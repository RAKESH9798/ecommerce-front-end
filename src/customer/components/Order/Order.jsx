import { Grid } from "@mui/material";
import React from "react";
import OrderCart from "./OrderCart";

const orderStatus=[
    {label:"Order Confirmed",value:"confirmed"},
    {label:"Items Dispatched",value:"dispatched"},
    {label:"On the Way",value:"on_the_way"},
    {label:"Delivered Successfully!",value:"delivered"},
    {label:"Cancel",value:"Cancel"},
    {label:"Return",value:"Return"},
]

function Order(){
    return(
        <div className="px-5 lg:px-20">
            <Grid container sx={{justifyContent:"space-between"}}>
                <Grid item xs={2.5}>
                    <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
                        <h1>Filter</h1>
                        <div className="space-y-4 mt-10">
                            <h1 className="font-semibold">Order Status</h1>
                            {orderStatus.map((option)=>
                                <div className="flex items-center">
                                <input defaultValue={option.value} type="Checkbox" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                <label className="ml-3 text-sm text-gray-600" htmlFor="option.value">{option.label}</label>
                                </div>
                            )}
                        </div>
                    </div>
                </Grid>

                <Grid item xs={9} className="space-y-5">
                    {[1,1,1,1,1].map((item)=><OrderCart/>)}
                </Grid>
            </Grid>
        </div>
    )
}

export default Order;