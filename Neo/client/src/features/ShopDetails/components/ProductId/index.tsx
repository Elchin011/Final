"use client";
import { QueryKeys } from '@/constants/QueryKeys';
import { getAPi } from '@/http/api';
import { useCart } from '@/Providers/CartProvider';
import { useQuery } from '@tanstack/react-query';
import { Heart, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useParams } from 'next/navigation';
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const ProductId = () => {
    const { id } = useParams(); // Dinamik route-dan id alırıq
    const [quantity, setQuantity] = useState(1);

    const { data, isLoading, error } = useQuery({
        queryKey: [QueryKeys.products.All, id],
        queryFn: () => getAPi(`/products/${id}`),
        enabled: !!id,
    });

    if (isLoading) return (
        <div className="flex justify-center items-center h-screen">
            <img
                className='w-20 h-10'
                src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_large.gif"
                alt="Loading..."
            />
        </div>
    );
    if (error) return <p className="text-red-500 text-3xl text-center">Error loading product</p>;

    const user =
        typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("user") || "null")
            : null;

    const { addToCart } = useCart();

    // 🔥 Quantity state əlavə etdik
    

    const increaseQty = () => setQuantity((prev) => prev + 1);
    const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="container mx-auto mt-32.5">
            {data && (
                <div className="grid grid-cols-12 gap-10 object-cover" key={data.data._id || data.data.id}>
                   
                    <div className="col-span-7">
                        <img className="w-full object-cover" src={data.data.imageUrl} alt={data.data.name} />
                    </div>

                    
                    <div className="col-span-5">
                        <h1 className="text-[38px] font-semibold uppercase tracking-[0.42px] mb-4">{data.data.name}</h1>
                        <p className="text-[22px] font-semibold text-black">${data.data.price}.00</p>
                        <p className="text-[16px] text-gray-600 mt-[13px]">
                            Sed viverra tellus in hac. Sagittis vitae et leo duis ut diam quam. Aliquet eget sit amet tellus cras adipiscing enim eu turpis.
                            Orci ac auctor augue mauris augue.
                        </p>

                        
                        <div className="flex items-center gap-6 pr-5 mt-[31px]">
                            <div className="flex items-center gap-5 w-45 border border-gray-100">
                                <button
                                    className="border-none p-5"
                                    aria-label="Decrease quantity"
                                    onClick={decreaseQty}
                                >
                                    <Minus size={17} strokeWidth={1} />
                                </button>

                                <span className="text-lg">{quantity.toString().padStart(2, "0")}</span>

                                <button
                                    className="p-5"
                                    aria-label="Increase quantity"
                                    onClick={increaseQty}
                                >
                                    <Plus size={17} strokeWidth={1} />
                                </button>
                            </div>

                            <button
                                className="flex items-center text-[12px] font-medium tracking-[1.95px] uppercase gap-2 border border-black px-8.5 py-4.5 hover:bg-black hover:text-white transition-colors duration-400"
                                onClick={() => {
                                    if (!user?.name) {
                                        toast.error("Please login to add items to the cart");
                                        return;
                                    }
                                    addToCart({ ...data.data, quantity }); 
                                    toast.success("Product added to cart");
                                }}
                            >
                                Add to Cart
                                <ShoppingBag size={17} strokeWidth={1} />
                            </button>
                        </div>

                       
                        <div className='pt-[20px] pb-[38px] border-b border-[#eee]'>
                            <button className='flex items-center gap-2'>
                                <Heart size={17} strokeWidth={1} />
                                <span className='text-[13px] text-[#1c1c1c] font-medium uppercase tracking-[1.95px]'>
                                    Add to Wishlist
                                </span>
                            </button>
                        </div>

                       
                        <div className='pt-[40px]'>
                            <div className='flex items-center gap-2 mb-3'>
                                <h5 className='text-[15px] text-[#1c1c1c] font-semibold uppercase'>Sku:</h5>
                                <p className='text-[16px] text-[#565656]'>0011</p>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <h5 className='text-[15px] text-[#1c1c1c] font-semibold uppercase'>Categories:</h5>
                                <p className='text-[16px] text-[#565656]'>{data.data.categories.name}</p>
                            </div>
                            <div className='flex items-center gap-2 mb-3'>
                                <h5 className='text-[15px] text-[#1c1c1c] font-semibold uppercase'>Sizes:</h5>
                                <p className='text-[16px] text-[#565656]'>{data.data.sizes.name}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProductId;
