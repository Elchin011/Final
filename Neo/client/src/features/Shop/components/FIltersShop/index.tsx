"use client";
import { QueryKeys } from '@/constants/QueryKeys';
import { getAPi } from '@/http/api';
import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import { ShopCard } from '../../common/ShopCard';
import { useCart } from '@/Providers/CartProvider';
import toast from 'react-hot-toast';
import Link from 'next/link';


const FiltersShop = () => {

    const user =
        typeof window !== "undefined"
            ? JSON.parse(localStorage.getItem("user") || "null")
            : null;

    const [selectProductCategory, setSelectProductCategory] = useState("");
    const [selectProductColor, setSelectProductColor] = useState("");
    const [selectProductSize, setSelectProductSize] = useState("");

    const { data, isLoading, isError, error } = useQuery({
        queryKey: [QueryKeys.products.All, selectProductCategory, selectProductColor, selectProductSize],
        queryFn: () => getAPi(`/products?category=${selectProductCategory}&color=${selectProductColor}&size=${selectProductSize}`)
    });

    const { data: ProductCatagories } = useQuery({
        queryKey: QueryKeys.products.categories,
        queryFn: () => getAPi('/products/categories')
    })


    const { data: ProductColor } = useQuery({
        queryKey: QueryKeys.products.colors,
        queryFn: async () => getAPi('/products/colors')
    })

    const { data: productSizes } = useQuery({
        queryKey: QueryKeys.products.sizes,
        queryFn: async () => getAPi('/products/sizes')
    })


    const filteredProducts = data?.data || [];
    const productsToShow = filteredProducts.length > 6 ? filteredProducts.slice(6) : filteredProducts;
   

    const { addToCart } = useCart();

    return (
        <div className='container mx-auto mt-32.5 mb-31.5'>
            <div className='grid grid-cols-12 gap-10'>
                <div className='col-span-3'>
                    <div className='flex flex-col gap-15'>
                        <div>
                            <h4 className='text-[17px] font-semibold uppercase tracking-[0.34px] mb-5'>Product categories</h4>
                            <div className="flex flex-col gap-2 text-[16px] text-[#868686]">
                                {
                                    ProductCatagories?.data?.map((item: any) =>
                                        <button
                                            onClick={() => { setSelectProductCategory(item._id) }}
                                            key={item._id} className="text-start">{item.name}</button>
                                    )}

                            </div>
                        </div>
                        <div>
                            <h4 className='text-[17px] font-semibold uppercase tracking-[0.34px] mb-5'>Filter by color</h4>
                            <div className="flex flex-col gap-2 text-[16px] text-[#868686]">
                                {
                                    ProductColor?.data?.map((item: any) => (
                                        <button
                                            onClick={() => { setSelectProductColor(item._id) }}
                                            key={item._id}
                                            className="text-start"
                                        >
                                            {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <div>
                            <h4 className='text-[17px] font-semibold uppercase tracking-[0.34px] mb-5'>Filter by size</h4>
                            <div className="flex flex-col gap-2 text-[16px] text-[#868686]">
                                {
                                    productSizes?.data?.map((item: any) => (
                                        <button
                                            onClick={() => { setSelectProductSize(item._id) }}
                                            key={item._id} className="text-start">{item.name}</button>
                                    ))
                                }
                            </div>
                        </div>
                        

                    </div>


                </div>
                <div className='col-span-9'>
                    <div className='grid grid-cols-3 gap-10'>
                        {
                            productsToShow.length > 0 ? (
                                productsToShow.map((item: any) => (
                                    <ShopCard
                                        key={item._id}
                                        id={item._id}
                                        name={item.name}
                                        price={item.price}
                                        catgerires={item.categories}
                                        img={item.imageUrl}
                                        addToCart={() => {
                                            if (!user?.name) {
                                                toast.error("Please login to add items to the cart");
                                                return;
                                            }
                                            addToCart(item);
                                            toast.success("Product added to cart");
                                        }}
                                    />
                                ))
                            ) : (
                                <div className='col-span-3 text-center'>No products found</div>
                            )}
                    </div>
                </div>

            </div>


        </div>
    )
}

export default FiltersShop
