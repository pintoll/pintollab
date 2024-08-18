import Image from "next/image";
import Link from "next/link";

import Flask from "@/public/svg/Erlenmeyer_Flask.svg";

import { Button } from "@/src/shared/ui";

const LogoPart = () => {
  return (
    <div className="fixed flex h-10 w-full items-center justify-between border-black px-2 py-1 lg:top-4 lg:px-8">
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
      <Link href="#hire-me">
        <Button variant="secondary" size="sm">
          Contact
        </Button>
      </Link>
    </div>
  );
};

export default LogoPart;
