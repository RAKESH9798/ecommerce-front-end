import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

function CartItem({item}) {

  const dispatch=useDispatch();

  const handleUpdateCartItem=(num)=>{
    const data={data:{quantity:item.quantity+num},cartItemId:item?._id};
    dispatch(updateCartItem(data));
  }

  const handleRemoveCartItem=()=>{
    dispatch(removeCartItem(item._id));
  }

  return (
    <div className="p-5 shadow-lg border rounded-md w-full lg:w-[800px]">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item.product.imageUrl}
            alt="images"
          />
        </div>
        <div className="ml-5 space-y-1">
          <p className="font-semibold">
            {item.title}
          </p>
          <p className="opacity-70">Size: {item.size}, White</p>
          <p className="opacity-70nmt-2">Seller: {item.brand}</p>
          <div className="flex items-center space-x-2">
            <p className="font-semibold">₹{item.price}</p>
            <p className="line-through opacity-50">₹{item.discountedPrice}</p>
            <p className="text-green-600 font-semibold">
              <span>{item.discountPercent}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg-space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton onClick={()=>handleUpdateCartItem(-1)} disable={item.quantity<=1}>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
          <IconButton sx={{color:"RGB(145 85 253)"}} onClick={()=>handleUpdateCartItem(1)}> {/* Fixed here */}
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{color:"RGB(145 85 253)"}} onClick={handleRemoveCartItem}>remove</Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
