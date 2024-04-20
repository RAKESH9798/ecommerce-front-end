import { Grid } from "@mui/material";
import React from "react";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";

function OrderCart(){

    const navigate = useNavigate();
    return(
        <div onClick={()=>navigate("account/order/${5}")} className="p-5 shadow-md hover:shadow-2xl border">
            <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
                <Grid item xs={6}>
                    <div className="flex cursor-pointer">
                        <img className="w-[5rem] h-[5rem] object-cover object-top" src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70" alt="images" />
                        <div className="ml-5 space-y-2">
                            <p className="">Title of item here</p>
                            <p className="opacity-50 text-xs font-semibold">size of item</p>
                            <p className="opacity-50 text-xs font-semibold">color of item pink</p>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={2}>
                    <p>1029</p>
                </Grid>

                <Grid item xs={4}>
                    <div>
                    {true && <p>
                        <AdjustIcon sx={{width:"15px", height:"15px"}} className="text-green-600 mr-2 text-sm" />
                        <span>Delivered on feb, 2 2024</span>
                    </p>}
                        <p className="text-xs">Your item has been deliverd.</p>
                    </div>
                    
                    {false && <p>
                        <span> Expected Delivery on feb, 29 2024</span>
                    </p>}
                </Grid>
            </Grid>
        </div>
    )
}

export default OrderCart;