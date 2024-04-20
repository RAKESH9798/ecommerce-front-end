import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Grid, Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function OrderDetails() {
  return (
    <div className="px-5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>

      <div className="mt-5 mb-5">
        <OrderTracker activeSteps={3} />
      </div>

      

      <Grid container className="space-y-5">
      {[1,1,1,1,1].map((item)=><Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              {/* Image Source: Replace the base64 string with proper image source */}
              <img
                className="w-[5rem] h-[5rem] object-cover object-top"
                src="https://www.koimoi.com/wp-content/new-galleries/2022/01/samantha-ruth-prabhu-didnt-charge-rs-1-5-crore-for-pushpa-item-song-but-3x-times-more-001.jpg"
                alt="Product"
              />
              <div className="ml-5 space-y-2">
                <p>Title of item here</p>
                <p className="opacity-50 text-xs font-semibold">size of item</p>
                <p className="opacity-50 text-xs font-semibold">color of item pink</p>
                <p>seller:russia</p>
                <p>6000</p>
              </div>
            </div>
          </Grid>

          <Grid item>
            <Box sx={{ color: deepPurple[500] }}>
              {/* Star Icon: Ensure proper import if needed */}
              <StarOutlineIcon fontSize="2rem" className="px-2 text-5xl" />
              <span>Rate & Review Product</span>
            </Box>
          </Grid>
        </Grid>)}
      </Grid>
    </div>
  );
}

export default OrderDetails;
