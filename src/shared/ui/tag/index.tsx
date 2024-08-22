import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn, tw } from "@/src/shared/lib";

export const TagVariants = cva(
  tw`
  flex justify-center items-center font-medium
  rounded-md
  px-1 py-1
  `,
  {
    variants: {
      variant: {
        default: tw`text-black hover:bg-gray-500 hover:bg-opacity-20`,
        selected: tw`bg-black text-white`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof TagVariants> {
  className?: string;
  children?: React.ReactNode;
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(TagVariants({ variant }), className)}
        {...props}
      >
        {children}
      </span>
    );
  },
);

Tag.displayName = "Wrapper";
