"use client";
import { Button } from "@/components/ui/button";
import { getAPi } from "@/http/api";
import { OrderStatus } from "@/lib/check-status";
import { useCart } from "@/Providers/CartProvider";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const page = () => {
  const { getCartItems, getTotalPrice, clearCart } = useCart();
  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;
  const cartItems = getCartItems();
  const totalAmount = getTotalPrice();
  const userId = user?._id;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["orders", userId],
    queryFn: async () => getAPi(`/orders?user=${userId}`),
    enabled: !!userId,
  });

  if (!user || !user._id) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-xl">
          <div className="text-center text-red-500 text-lg font-semibold">
            Zəhmət olmasa, əvvəlcə daxil olun.
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) return <div className="flex justify-center items-center h-screen">
    <img className='w-20 h-10' src="https://raw.githubusercontent.com/Codelessly/FlutterLoadingGIFs/master/packages/cupertino_activity_indicator_large.gif" alt="Loading..." />
  </div>;

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gray-100 py-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-6xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800">Orders</h1>
          </div>
          {data && data?.data?.length > 0 ? (
            data?.data.map((order: any) => (
              <div key={order._id} className="mb-4 p-4 border rounded-md">
                <h2 className="text-[20px] font-semibold">
                  Order ID: {order._id}
                </h2>
                <li className="list-none">
                  <strong>Customer Name:</strong> {order.firstName} {order.lastname}
                </li>
                <li className="list-none">
                  <strong>Customer Email:</strong> {order.email}
                </li>
                <li className="list-none">
                  <strong>Customer Phone:</strong> {order.phone}
                </li>
                <li className="list-none">
                  <strong>Total Amount:</strong> {order.totalAmount} $
                </li>
                <li className="list-none">
                  <strong>Date:</strong> {new Date(order.createdAt).toLocaleDateString()}
                </li>
                <li className="list-none">
                  <strong>Address:</strong> {order.address}
                </li>
                <ul>
                  <li>
                    <strong>Product:</strong>
                  </li>
                  {order.products.map((item: any, index: number) => (
                    console.log(item.product),
                    <li key={item.product?._id || item.product?.id || item.id || index}>
                      {item.product?.name || "Unknown Product"} - {item.quantity} pcs
                    </li>
                  ))}
                </ul>
                <Button className={`mt-2 px-5 py-2 rounded-md ${OrderStatus(order.status)}`}>
                  {order?.status}
                </Button>
              </div>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
