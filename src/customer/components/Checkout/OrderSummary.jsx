import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderById } from "../../../State/Order/Action";
import { useLocation} from "react-router-dom";
import { store } from "../../../State/store";
import { createPayment } from "../../../State/Payment/Action";

function OrderSummary() {

  const dispatch=useDispatch();
  const location=useLocation();
  const searchparams=new URLSearchParams(location.search);
  const orderId=searchparams.get("order_id");
  const {order}=useSelector(store=>store);

  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[orderId]);

  const handleCheckout=()=>{
    dispatch(createPayment(orderId));
  }

  return (
    <div>
      <div className="shadow-lg rounded-s-md border">
      <AddressCard address={order.shippingAddress}/>
      </div>
      <div className="py-5 lg:grid grid-cols-3 relative">
      <div className="col-span-2">
        {order.order?.orderItems?.map((item)=><CartItem item={item} />)}
      </div>
      <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 lg:col-start-3">
        <div className="border p-5">
          <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
          <hr />
          <div className="space-y-3 font-semibold mb-10">
            <div className="flex justify-between pt-3 text-black">
              <span>Price</span>
              <span>₹{order.order?.totalPrice}</span>
            </div>
            <div className="flex justify-between pt-3">
              <span>Discount</span>
              <span className=" text-green-600">− ₹{order.order?.discount}</span>
            </div>
            <div className="flex justify-between pt-3">
              <span>Delivery Charges</span>
              <span className=" text-green-600">₹Free</span>
            </div>
            <div className="flex justify-between pt-3 font-bold">
              <span>Total Amount</span>
              <span className=" text-green-600">₹{order.order?.totalDiscountPrice}</span>
            </div>
          </div>
          <Button
            variant="contained"
            className="w-full mt-5"
            sx={{ px: "2.5rem", py: "0.7rem", bgcolor: "#9155fd" }}
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default OrderSummary;
