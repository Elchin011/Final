"use client";
import { postApi } from "@/http/api";
import { useCart } from "@/Providers/CartProvider";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";

const SuccessPage = () => {

  const { clearCart } = useCart();
  const [orderCreated, setOrderCreated] = useState(false);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const sessionId = new URL(window.location.href).searchParams.get("session_id");
    if (!sessionId) return;

    const createOrder = async () => {
      try {
        await postApi("/order-from-stripe", { sessionId });
        clearCart();
        setOrderCreated(true);
      } catch (err: any) {
        setError(err.message || "Xəta baş verdi");
      }
    };

    createOrder();
  }, [clearCart]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="w-full max-w-2xl p-12 mx-4 text-center transition-all transform bg-white shadow-lg rounded-xl hover:shadow-xl">
        <div className="flex items-center justify-center w-24 h-24 mx-auto mb-8 bg-green-100 rounded-full">
          <svg
            className="w-12 h-12 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </div>

        <h1 className="mb-6 text-4xl font-extrabold text-green-600">
          Payment Successful!
        </h1>

        <p className="mb-8 text-xl text-gray-700">
          Thank you for your purchase.
        </p>

        <div className="p-6 mb-8 rounded-lg bg-blue-50">
          <p className="text-lg font-medium text-blue-700">
            Your tool <span className="font-bold">"http://example.com"</span>{" "}
            will be listed shortly.
          </p>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-100">
          <p className="text-lg text-gray-700">
            Have questions? Contact us at:
          </p>
          <a
            href="mailto:admin@eliteai.tools"
            className="inline-block mt-2 text-xl font-medium text-blue-600 transition-colors duration-200 hover:text-blue-800"
          >
            admin@eliteai.tools
          </a>
        </div>

        <div className="mt-12">
          <a
            href="http://127.0.0.1:8000"
            className="inline-block px-8 py-4 text-lg font-semibold text-white transition-colors duration-200 bg-green-600 rounded-lg hover:bg-green-700"
          >
            Return to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
