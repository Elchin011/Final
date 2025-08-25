"use client";
import { QueryKeys } from '@/constants/QueryKeys';
import { ShopCard } from '@/features/Shop/common/ShopCard';
import { getAPi } from '@/http/api';
import { useCart } from '@/Providers/CartProvider';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import toast from 'react-hot-toast';

const Products = () => {

    const user =
        typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("user") || "null")
            : null;

    const { data, isLoading, isError, error } = useQuery({
        queryKey: [QueryKeys.products.All],
        queryFn: () => getAPi(`/products?category`)
    });

    const {addToCart} = useCart();

    return (
        <div className='container mx-auto mb-[125px] mt-[83px] px-10 md:px-5 lg:px-0'>
            <h1 className='text-4xl font-semibold text-center tracking-[0.36px] uppercase text-[#1c1c1c] mb-[62px]'>Related products</h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10'>
                {data &&
                    data?.data?.slice(0,4).map((item: any, idx: number) => (
                        console.log(item),
                        <ShopCard
                            id={item?._id}
                            addToCart={() => {
                                if (!user?.name) {
                                    toast.error("Please login to add items to the cart");
                                    return;
                                }
                                addToCart(item);
                                toast.success("Product added to cart");
                            }}
                            catgerires={item?.categories}
                            name={item?.name}
                            price={item?.price}
                            key={idx}
                            img={item?.imageUrl}
                        />
                    ))}


            </div>

        </div>
    )
}

export default Products
