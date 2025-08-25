"use client";
import React, { useState } from "react";

const Revu = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className="container mx-auto px-10 md:px-5 lg:px-0 mt-10 md:mt-5 lg:mt-0">
            <div className="flex justify-start lg:justify-center items-start lg:items-center min-h-screen">
                <div className="bg-white w-full max-w-full ">
                    {/* Tabs */}
                    <div>
                        <div className="flex items-start lg:items-center justify-start lg:justify-center border-b mb-10">
                            <div className="container mx-auto  lg:px-70 grid lg:flex items-start lg:items-center justify-start lg:justify-center">
                                {["tab1", "tab2", "tab3"].map((tab, i) => {
                                    const labels = ["Description", "Additional information", "Reviews"];
                                    return (
                                        <button
                                            key={tab}
                                            type="button"
                                            className={`flex-1 py-3 font-semibold text-center border-b transition-colors duration-200 ${activeTab === tab
                                                ? "border-black text-black"
                                                : " text-gray-500"
                                                }`}
                                            onClick={() => setActiveTab(tab)}
                                        >
                                            {labels[i]}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Content */}
                    <div className=" flex justify-center items-center text-sta lg:text-center">
                        {activeTab === "tab1" && (
                            <p className="text-[16px] text-[#565656]">
                                Aliquet nec ullamcorper sit amet. Viverra tellus in hac habitasse. Eros in cursus turpis massa tincidunt dui ut ornare. Amet consectetur adipiscing elit ut aliquam. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed cras ornare arcu dui vivamus arcu felis bibendum. Nunc sed velit dignissim sodales ut eu sem integer. Dictumst quisque sagittis purus sit amet. Suspendisse in est ante in nibh mauris cursus mattis. Quis varius quam quisque id diam vel. A lacus vestibulum sed arcu non. Laoreet non curabitur gravida arcu ac tortor dignissim convallis. Et netus et malesuada fames ac turpis egestas maecenas.
                            </p>
                        )}
                        {activeTab === "tab2" && (
                            <table className="border w-full">
                                <tbody>
                                    <tr>
                                        <td className="border px-4 py-2 font-semibold text-start uppercase">Weight</td>
                                        <td className="border px-4 py-2 text-start text-[#565656]">0.5 kg</td>
                                    </tr>
                                    <tr>
                                        <td className="border px-4 py-2 font-semibold text-start uppercase">Dimensions</td>
                                        <td className="border px-4 py-2 text-start text-[#565656]">1 × 2 × 3 cm</td>
                                    </tr>
                                </tbody>
                            </table>

                        )}
                        {activeTab === "tab3" && <h1 className="text-xl">Şifrəni unutdun</h1>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Revu;
