import React from 'react';
import './pc.css';
import { useNavigate } from 'react-router-dom';

function ProductCard({product}) {
    const navigate = useNavigate();
    return (
        <div onClick={()=>navigate(`/product/${product?._id}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer flex flex-col justify-between">
            <div className="h-60 w-full object-cover object-left-top">
                <img src={product.imageUrl} alt="men's kurta" className="h-full w-full" />
            </div>
            <div className="textPart bg-white p-2">
                <p className="font-bold opacity-60">{product.brand}</p>
                <p>{product.title}</p>
                <div className="flex items-center space-x-2">
                    <p className="font-semibold">₹{product.discountedPrice}</p>
                    <p className="line-through opacity-50">₹{product.price}</p>
                    <p className="text-green-600 font-semibold"><span>{product.discountPersent}% off</span></p>
                </div>
            </div>
        </div>
    )
}

export default ProductCard;
