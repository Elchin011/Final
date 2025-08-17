"use client"
import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { QueryKeys } from "@/constants/QueryKeys";
import { getAPi } from "@/http/api";
import { useCart } from "@/Providers/CartProvider";
import { ProductCard } from '../../common/ProductCard';
import toast from 'react-hot-toast';

const Browse = () => {

    const { data, isLoading, isError, error } = useQuery({
        queryKey: QueryKeys.products.All,
        queryFn: async () => await getAPi("/products"),
    });
    const { addToCart } = useCart();



    const user =
        typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("user") || "null")
            : null;

    return (
        <div className='container mx-auto pt-40 pb-10'>
            <div className='text-center'>
                <h1 className="text-4xl font-bold text-[#1c1c1c] tracking-[0.36px] uppercase">Browse Our Products</h1>
                <p className="mt-3 text-[19px] font-light">Explore our new summer collection</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center gap-2.5 mt-10">
                {data &&
                    data?.data?.slice(0, 6).map((item: any, idx: number) => (
                        <ProductCard
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

export default Browse
