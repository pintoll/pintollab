import { cn, tw } from "@/src/shared/lib";
import Image from "next/image";

type Descriptor = {
  content: string;
  className?: string;
};

interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  subject?: string | Descriptor;
  date?: string | Descriptor;
  imageSrc?: string;
}

const parseToDescriptor = (
  obj?: string | Descriptor,
): Descriptor | undefined => {
  if (typeof obj === "undefined") return undefined;
  if (typeof obj === "string") return { content: obj };
  return obj;
};

export const Banner = ({
  className,
  subject,
  date,
  imageSrc,
  children,
}: BannerProps) => {
  const title = parseToDescriptor(subject);
  const desc = parseToDescriptor(date);

  return (
    <div
      className={cn(
        tw`font-merri h-full min-h-[66vh] bg-primary px-4 pb-2 pt-24 md:px-20 lg:px-[216px]`,
        className,
      )}
    >
      {title && (
        <h1
          className={cn(
            "text-[2rem] font-black leading-9 md:text-[3rem] md:leading-[3.2rem] lg:text-[3.5rem] lg:leading-[3.7rem]",
            title.className,
          )}
        >
          {title.content}
        </h1>
      )}

      {desc && (
        <h4
          className={cn(
            "text-[1.25rem] font-medium text-white",
            desc.className,
          )}
        >
          {desc.content}
        </h4>
      )}

      {imageSrc && (
        <div className="flex w-full items-center justify-center">
          <Image
            src={imageSrc}
            width={1024}
            height={1024}
            alt="tailwind"
            className="w-[200px] md:w-[300px] lg:w-[350px]"
          />
        </div>
      )}

      {children}
    </div>
  );
};
