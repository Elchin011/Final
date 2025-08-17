"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import cloudinaryLoader from "@/features/common/BaseImageLoad";
import { Check } from "lucide-react";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export const PricingCard = ({
    img,
    name,
    price,
}: {
    img: string;
    name: string;
    price: number;
}) => {
    const handleCheckout = async () => {
        const stripe = await stripePromise;
        if (!stripe) {
            console.error("Stripe not loaded");
            return;
        }
        const response = await fetch("/api/checkout-sessions/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cartItems: [
                    {
                        name: "Product Name",
                        image: img,
                        price: price,
                        quantity: 1,
                    },
                ],
                returnUrl: window.location.origin,
            }),
        });
        if (!response.ok) {
            console.error("Failed to create checkout session");
            return;
        }
        const session = await response.json();
        const result = await stripe.redirectToCheckout({
            sessionId: session.sessionId,
        });
        if (result.error) {
            console.error("Stripe checkout error:", result.error.message);
        }
    };
    return (
        <Card>
            <CardContent className="space-y-2">
                <div className="w-full h-81 overflow-hidden relative">
                    <Image
                        loader={cloudinaryLoader}
                        src={img ?? ""}
                        alt="Placeholder"
                        className="w-full h-full absolute inset-0 object-cover"
                        fill
                    />
                </div>
                <div className="pt-4">
                    <h2 className="text-[28px] font-semibold uppercase">{name}</h2>
                    <p className="text-[20px] font-semibold mt-2.5"> ${price} <span className="text-[16px] font-normal ml-[5px]">/ Monthly</span></p>
                    <div className="flex flex-col gap-3 mt-3.5">
                        <div className="flex items-center gap-3">
                            <Check size={16}/>
                            <p className="text-[16px] text-[#565656]">Lorem ipsum dolore sit malesu</p>
                        </div>
                         <div className="flex items-center gap-3">
                            <Check size={16}/>
                            <p className="text-[16px] text-[#565656]">Malesu ipsum vivir sit aliquiam</p>
                        </div>
                         <div className="flex items-center gap-3">
                            <Check size={16}/>
                            <p className="text-[16px] text-[#565656]">Bibdendu vivir amety sit</p>
                        </div>
                         <div className="flex items-center gap-3">
                            <Check size={16}/>
                            <p className="text-[16px] text-[#565656]">Dolore ipsum lorem sit bibendu</p>
                        </div>
                    </div>
                    
                </div>
                <div className="mt-8">
                    <Button onClick={handleCheckout} variant="default" className="py-4 px-16 text-[13px] text-black font-medium tracking-[1.95px] bg-transparent border border-[#1c1c1c] uppercase hover:bg-[#1c1c1c] hover:text-white transition-colors duration-300">
                        Buy Now
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};
