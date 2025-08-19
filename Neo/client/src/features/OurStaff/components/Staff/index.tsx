"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import PersonCard from '../../common/PersonCard'
import { getAPi } from '@/http/api'
import { useQuery } from '@tanstack/react-query'
import { QueryKeys } from '@/constants/QueryKeys'
import Link from 'next/link'

const Staff = () => {

  const { data, isLoading, isError, error } = useQuery({
    queryKey: QueryKeys.persons.All,
    queryFn: async () => await getAPi("/persons"),
  });

  console.log("Persons Data:", data);

  return (
    <div className='container mx-auto py-37.5'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-4 px-9 lg:px-0 items-center'>
        <div className='lg:pr-18'>
          <h1 className='text-[30px] font-semibold uppercase tracking-[0.39px]'>Relif from eyes problems</h1>
          <p className='text-[16px] text-[#565656] mt-[13px] mb-2.5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna do aliqua. Ut enim ad veniam, quis nostrud sint occaecat.</p>
          <div className='text-[16px] text-[#565656] mt-2.5 mb-12 flex flex-col gap-2.5'>
            <p>– Lorem ipsum dolor sit amet, consectetur adipiscing elit in</p>
            <p>– Lorem ipsum dolor sit amet, consectetur adipiscing elit in</p>
          </div>
          <Link href="/contact-us" className='text-[13px] font-medium bg-transparent text-black hover:bg-black hover:text-white transition-all duration-300 py-4.5 px-14 rounded-none border border-black hover:border-transparent uppercase tracking-[1.95px]'>
            contact us
          </Link>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-7.5 lg:px-2'>
          {data &&
            data?.data?.slice(0, 2).map((item: any) => (
              <PersonCard
                name={item?.name}
                specialties={item?.specialty}
                key={item?._id}
                imageUrl={item?.imageUrl}
              />
            ))}
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-15 px-9 lg:px-0 lg:gap-7.5 pt-24'>
        {data &&
          data?.data?.slice(2).map((item: any) => (
            <PersonCard
              name={item?.name}
              specialties={item?.specialty}
              key={item?._id}
              imageUrl={item?.imageUrl}
            />
          ))}
      </div>
    </div>
  )
}

export default Staff
