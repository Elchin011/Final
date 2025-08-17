'use client'

import Image from "next/image";
import { useState } from "react";

import Filter from "../../common/Filter";

export default function Home() {
  const [activeTag, setActiveTag] = useState('All')
  let tagList = ['All', 'Men', 'Women', 'Kids']

  const handleTag = (tag: string) => {
    setActiveTag(tag)
  }

  const filterTags = (array: any[]) => {
    if (activeTag.toLowerCase() == "all"){
      return array
    } else {
      return array.filter(el => el.category.toLocaleLowerCase() == (activeTag.toLocaleLowerCase()))
    }
  }

  // Example data array
    const data = [
      { name: "Men's T-Shirt", category: "Men" },
      { name: "Women's Dress", category: "Women" },
      { name: "Kids' Shoes", category: "Kids" },
      { name: "Unisex Hat", category: "All" }
    ];
  
    let filteredList = filterTags(data)



  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white">
     <h1 className="text-[2rem] underline underline-offset-2 my-4">Tag Filter in NextJS</h1>
     <Filter tagList={tagList} activeTag={activeTag} handleTag={handleTag}/>
     <div className="w-full flex flex-col gap-2 py-4">
      {filteredList.map((el, i) => (
        <div className="w-full border-[1px] border-gray-500 px-2 rounded-xl py-4" key={i}>{el.name}</div>
      ))}
     </div>
    </main>
  );
}