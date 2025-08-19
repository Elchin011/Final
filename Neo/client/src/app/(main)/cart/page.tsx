"use client";


import { useCart } from "@/Providers/CartProvider";
import { Minus, Plus, X } from "lucide-react";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { Button } from "@/components/ui/button";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

export default function CartPage() {
  const {
    addToCart,
    removeFromCart,
    getCartItems,
    deleteFromCart,

  } = useCart();

  const data = getCartItems();


  // const handleCheckout = async () => {
  //   const stripe = await stripePromise;
  //   if (!stripe) {
  //     console.error("Stripe not loaded");
  //     return;
  //   }
  //   const response = await fetch("/api/checkout-sessions/create", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       cartItems: data.map((item: any) => ({
  //         name: item.name,
  //         image: item.imageUrl,
  //         price: item.price,
  //         quantity: item.quantity,
  //       })),
  //       returnUrl: window.location.origin,
  //     }),
  //   });
  //   if (!response.ok) {
  //     console.error("Failed to create checkout session");
  //     return;
  //   }
  //   const session = await response.json();
  //   const result = await stripe.redirectToCheckout({
  //     sessionId: session.sessionId,
  //   });
  //   if (result.error) {
  //     console.error("Stripe checkout error:", result.error.message);
  //   }
  // };

  return (
    <div>
      <div>
        <div className='relative'>
          <img className="h-[155px] object-cover" src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/08/Whislist-cart-title-img.jpg" alt="" />
          <div className='absolute top-1/2 left-[95px]'>
            <div className='text-[15px] text-white mb-6 flex items-center gap-2'>
              <li className='list-none'><Link href="/" className="text-white transition mb-3.5 text-[15px] relative group cursor-pointer ">Home
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-400 group-hover:w-full"></span>
              </Link>
              </li>
              /
              <p><Link href="/cart">Cart</Link></p>
            </div>
          </div>

        </div>
        <div className="container mx-auto">
          <div className="pt-14 pb-35">
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
              {/* Sebet Məhsulları */}
              <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                <div className="flex flex-col justify-start items-start py-4 md:py-6 w-full">
                  {data && data.length > 0 ? (
                    <>
                      <div className="flex items-center justify-between w-full">
                        <div className="flex items-center">
                          <div className="">
                            <p className="text-[17px] md:text-[17px] ml-[215px] dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800 uppercase">
                              Product
                            </p>
                          </div>
                          <div className="">
                            <p className="text-[17px] md:text-[17px] pl-[250px] dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800 uppercase">
                              Price
                            </p>
                          </div>
                          <div>
                            <p className="text-[17px] md:text-[17px] pl-[103px] dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800 uppercase">
                              Quantity
                            </p>
                          </div>
                        </div>
                        <div className="pr-3">
                          <p className="text-[17px] md:text-[17px] pl-[38px] dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800 uppercase">
                            Subtotal
                          </p>
                        </div>
                      </div>


                      {data &&
                        data.map((item: any, idx: number) => (
                          <div
                            key={idx}
                            className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-center md:items-center md:space-x-6 xl:space-x-8 w-full border-b border-gray-200"
                          >
                            <button
                              onClick={() => deleteFromCart(item)}
                              className="mb-6"
                              aria-label="Remove item"
                            >
                              <X size={20} />
                            </button>
                            <div className="pb-4 md:pb-8 w-full md:w-40">
                              <img
                                className="w-full hidden md:block"
                                src={item?.imageUrl}
                                alt={item?.name}
                              />
                              <img
                                className="w-full md:hidden"
                                src={item?.imageUrl}
                                alt={item?.name}
                              />
                            </div>

                            <div className="md:flex-row flex-col flex justify-between items-center w-full pb-8 space-y-4 md:space-y-0">
                              <div className="grid grid-cols-3 items-center gap-10">
                                <div className="w-[300px] flex flex-col justify-start items-start">
                                  <h3 className="text-[16px] dark:text-white xl:text-xl font-semibold leading-6 text-gray-800">
                                    {item?.name || "Product Name"}
                                  </h3>
                                </div>
                                <div className="flex flex-col justify-between space-y-3 items-start w-full md:flex-row md:items-center md:space-y-0 md:space-x-8">
                                  <p className="text-base text-[#565656] dark:text-white xl:text-[16px] leading-6">
                                    {item?.price ? `$${item.price.toFixed(2)}` : "$0.00"}
                                  </p>
                                  <div className="flex items-center space-x-4 border border-gray-200">
                                    <button
                                      onClick={() => removeFromCart(item)}
                                      className=" p-4"
                                      aria-label="Decrease quantity"
                                    >
                                      <Minus size={17} strokeWidth={1} />
                                    </button>

                                    <span className="text-lg">{item.quantity || 1}</span>

                                    <button
                                      onClick={() => addToCart(item)}
                                      className=" p-4"
                                      aria-label="Increase quantity"
                                    >
                                      <Plus size={17} strokeWidth={1} />
                                    </button>
                                  </div>
                                </div>

                              </div>
                              <div className="w-[100px] text-[16px] text-[#565656]">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>



                            </div>
                          </div>
                        ))}
                      <div className="mt-20 w-full">
                        <h3 className="text-[30px] tracking-[0.3px] dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800 uppercase mb-7.5">
                          Cart Totals
                        </h3>
                        <div className="flex items-center gap-40 py-9 border-b border-gray-200 w-full">
                          <h4 className="text-[17px] font-semibold uppercase tracking-[0.34px]">Subtotal</h4>
                          <p className="text-[16px] text-[#565656] dark:text-white">
                            {Array.isArray(data) && data.length > 0
                              ? `$${data.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0).toFixed(2)}`
                              : "$0.00"}
                          </p>
                        </div>
                        <div className="flex items-center gap-49 py-9 border-b border-gray-200 mb-20">
                          <h4 className="text-[17px] font-semibold uppercase tracking-[0.34px]">Total</h4>
                          <p className="text-[16px] text-[#565656] dark:text-white">
                            {Array.isArray(data) && data.length > 0
                              ? `$${data.reduce((acc, item) => acc + (item.price || 0) * (item.quantity || 1), 0).toFixed(2)}`
                              : "$0.00"}
                          </p>
                        </div>

                        <Link
                          href="/checkout"
                          className="text-[12px] py-5 px-8.5 bg-white text-black font-medium uppercase tracking-[1.95px] border border-black hover:bg-black hover:text-white duration-500"
                        >
                          Proceed to Checkout
                        </Link>

                      </div>
                    </>
                  ) : (
                    <div className="flex flex-col items-center justify-center w-full h-64">
                      <div className="border border-gray-200 text-end w-full px-7.5 py-5 mb-7.5">
                        <h2 className="text-[16px]">
                          Your cart is empty
                        </h2>
                      </div>
                      <Link
                        href="/shops"
                        className="text-[13px] py-3.5 px-13 bg-[#1c1c1c] text-white font-medium uppercase tracking-[1.95px] border border-black hover:bg-black hover:text-white duration-500"
                      >
                        Return to shop
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#f9f9f9] py-18 px-9 lg:px-0'>
          <div className='container mx-auto text-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-2'>
              <div className='flex gap-3 items-center'>
                <div className='pt-6'>
                  <img className='h-[46px]' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Content-bottom-icon-01.png" alt="" />
                </div>
                <div className='text-left'>
                  <h4 className='uppercase mt-7 text-[15px] font-semibold text-[#606060] tracking-[1px]'>Free shipping 100$</h4>
                  <p className='text-[16px] text-[#565656]'>Lorem ipsum dolor in</p>
                </div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='pt-6'>
                  <img className='h-[46px]' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Content-bottom-icon-02.png" alt="" />
                </div>
                <div className='text-left'>
                  <h4 className='uppercase mt-7 text-[15px] font-semibold text-[#606060] tracking-[1px]'>Helpdesk center</h4>
                  <p className='text-[16px] text-[#565656]'>Nunc amet volutpat sed</p>
                </div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='pt-6'>
                  <img className='h-[46px]' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Content-bottom-icon-03.png" alt="" />
                </div>
                <div className='text-left'>
                  <h4 className='uppercase mt-7 text-[15px] font-semibold text-[#606060] tracking-[1px]'>60 days to try out</h4>
                  <p className='text-[16px] text-[#565656]'>Sit amet placerat do</p>
                </div>
              </div>
              <div className='flex gap-3 items-center'>
                <div className='pt-6'>
                  <img className='h-[46px]' src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/Content-bottom-icon-04.png" alt="" />
                </div>
                <div className='text-left'>
                  <h4 className='uppercase mt-7 text-[15px] font-semibold text-[#606060] tracking-[1px]'>100% safe payment</h4>
                  <p className='text-[16px] text-[#565656]'>Non tellus orci auctor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

