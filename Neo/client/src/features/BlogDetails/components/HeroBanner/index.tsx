"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getAPi } from "@/http/api";
import { QueryKeys } from "@/constants/QueryKeys";

const BlogDetailsHeroBanner = () => {
  const { id } = useParams();

  // Məhsulun məlumatını çəkirik
  const { data, isLoading, error } = useQuery({
    queryKey: [QueryKeys.blogs.All, id],
    queryFn: () => getAPi(`/blogs/${id}`),
    enabled: !!id,
  });

  const blogTitle = data?.data?.title || "Loading...";

  return (
    <div className="relative">
      <img
        src="https://neoocular.qodeinteractive.com/wp-content/uploads/2021/07/shop-Title-img.jpg"
        alt="Banner"
      />
      <div className="absolute top-1/2 left-[95px]">
        <div className="text-[15px] text-white mb-6 flex items-center gap-2">
          <li className="list-none">
            <Link
              href="/"
              className="text-white transition mb-3.5 text-[15px] relative group cursor-pointer"
            >
              Home
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-400 group-hover:w-full"></span>
            </Link>
          </li>
          /
          <li className="list-none">
            <Link
              href="/blog"
              className="text-white transition mb-3.5 text-[15px] relative group cursor-pointer"
            >
              Blog
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-400 group-hover:w-full"></span>
            </Link>
          </li>
          /
          <li className="list-none text-white text-[15px]">
            {isLoading ? "Loading..." : error ? "Error" : blogTitle}
          </li>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsHeroBanner;
