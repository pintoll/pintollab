"use client";
import Link from "next/link";

import { Tag } from "@/src/shared/ui";
import { usePathname } from "next/navigation";

const verifyPathname = (pathname: string): ("selected" | "default")[] => {
  return [
    pathname.startsWith("/blog") ? "selected" : "default",
    pathname.startsWith("/product") ? "selected" : "default",
    pathname.startsWith("/open-source") ? "selected" : "default",
  ];
};

const Category = () => {
  const pathname = usePathname();
  const [blog, product, openSource] = verifyPathname(pathname);

  return (
    <div className="absolute top-12 flex h-6 w-full items-center justify-center gap-2 px-2 py-1 lg:fixed lg:top-1/2 lg:w-[196px] lg:-translate-y-1/2 lg:flex-col lg:gap-8">
      <Link href="/blog">
        <Tag variant={blog}>Blog</Tag>
      </Link>

      <Link href="/product">
        <Tag variant={product}>Product</Tag>
      </Link>

      <Link href="/open-source">
        <Tag variant={openSource}>Open Source</Tag>
      </Link>
    </div>
  );
};

export default Category;
