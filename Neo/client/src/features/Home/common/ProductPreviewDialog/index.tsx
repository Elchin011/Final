"use client";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/Providers/CartProvider";
import { Minus, Plus, ShoppingBag } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import toast from "react-hot-toast";

type ProductPreviewDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  name: string;
  price: number;
  img: string;
  addToCart: () => void;
  id: string;
};

const user =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user") || "null")
    : null;

export const ProductPreviewDialog = ({
  open,
  onOpenChange,
  name,
  price,
  img,
  id,

}: ProductPreviewDialogProps) => {


  const { addToCart } = useCart();



  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[1000px] h-[500px]">
        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <img src={img} alt={name} className="rounded-md object-contain h-[395px] w-[500px]" />
          </div>
          <div className="p-8">
            <h3 className="text-[30px] font-semibold mb-2 tracking-[0.3px] uppercase">{name}</h3>
            <p className="text-[22px] font-semibold tracking-[0.22px]">${price}.00 </p>
            <p className="text-[16px] text-gray-600 mt-[13px]">Sed viverra tellus in hac. Sagittis vitae et leo duis ut diam quam. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Orci ac auctor augue mauris augue.</p>

            <div className="flex items-center justify-between pr-5 mt-[31px]">
              <div className="flex items-center gap-5 w-45 border border-gray-100">
                <button
                  className="border-none p-5"
                  aria-label="Decrease quantity"
                >
                  <Minus size={17} strokeWidth={1} />
                </button>

                <span className="text-lg">01</span>

                <button
                  className=" p-5"
                  aria-label="Increase quantity"
                  onClick={() => {
                    const item = { _id: id, name, price, imageUrl: img };
                    addToCart(item);
                  }}
                >
                  <Plus size={17} strokeWidth={1} />
                </button>
              </div>
              <button className="flex items-center text-[12px] font-medium tracking-[1.95px] uppercase gap-2 border border-black px-6 py-4.5"
                onClick={() => {
                  if (!user?.name) {
                    toast.error("Please login to add items to the cart");
                    return;
                  }
                  const item = { _id: id, name, price, imageUrl: img };
                  addToCart(item);
                  toast.success("Product added to cart");
                }}
              > 
                Add to Cart
                <ShoppingBag size={17} strokeWidth={1} />
              </button>
            </div>
            <button className="bg-black text-white text-[12px] font-medium tracking-[1.95px] uppercase gap-2 border border-black px-8.5 py-4.5 mt-5"

            >
              view details
            </button>
          </div>

        </div>

      </DialogContent>
    </Dialog>
  );
};
