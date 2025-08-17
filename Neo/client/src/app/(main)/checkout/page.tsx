"use client";
import { postApi } from "@/http/api";
import { useCart } from "@/Providers/CartProvider";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function CheckoutPage() {
  const { getCartItems, getTotalPrice, clearCart } = useCart();
  const [address, setAddress] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const user =
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user") || "null")
      : null;
  const cartItems = getCartItems();
  const totalAmount = getTotalPrice();

  const {
    mutate,
    isPending,
    isError,
    error: OrderCreateErr,
  } = useMutation({
    mutationFn: async (data: any) => postApi("/create/order", data),
    mutationKey: ["createOrder"],
  });

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !user._id) {
      setError("Zəhmət olmasa, əvvəlcə daxil olun.");
      return;
    }
    if (!cartItems.length) {
      setError("Səbət boşdur.");
      return;
    }
    mutate(
      {
        user: user._id,
        products: cartItems.map((item: any) => ({
          product: item.id,
          quantity: item.quantity,
        })),
        totalAmount,
        address,
      },
      {
        onSuccess: () => {
          clearCart();
          setSuccess(true);
        },
      }
    );
  };

  return (
    <div className="container mx-auto px-4 max-w-xl py-8">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      {success ? (
        <div className="p-4 bg-green-100 text-green-700 rounded mb-4">
          Sifarişiniz uğurla yaradıldı!
        </div>
      ) : (
        <form onSubmit={handleOrder} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Adres</label>
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div>
            <h2 className="font-semibold mb-2">Səbət</h2>
            <ul className="mb-2">
              {cartItems.map((item: any) => (
                <li
                  key={item.id}
                  className="flex justify-between border-b py-1"
                >
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="font-bold flex justify-between">
              <span>Ümumi:</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
          </div>
          {error && <div className="text-red-600">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
            disabled={isPending}
          >
            {isPending ? "Göndərilir..." : "Sifarişi tamamla"}
          </button>
        </form>
      )}
    </div>
  );
}
