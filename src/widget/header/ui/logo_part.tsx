"use client";

import Image from "next/image";
import Link from "next/link";

import Flask from "@/public/svg/Erlenmeyer_Flask.svg";
import { Button } from "@/src/shared/ui";
import { useScrollY } from "@/src/shared/hook";
import { cn, tw } from "@/src/shared/lib";

const LogoPart = () => {
  const scrollY = useScrollY();

  const transparentyOnMobile =
    scrollY === 0 ? tw`bg-transparent` : tw`bg-slate-100`;

  return (
    <div
      className={cn(
        "fixed top-0 z-10 flex h-10 w-full items-center justify-between border-black px-2 py-6",
        "lg:top-4 lg:bg-transparent lg:px-8",
        transparentyOnMobile,
      )}
    >
      <Link href="/" className="flex items-center">
        <Image
          src={Flask}
          alt="Logo"
          width={40}
          height={40}
          className="h-7 w-7 text-secondary"
        />
        <span className="text-lg font-semibold text-secondary">Pintollab</span>
      </Link>
      <Link href="#contact">
        <Button variant="outline" size="default">
          Contact
        </Button>
      </Link>
    </div>
  );
};

export default LogoPart;
