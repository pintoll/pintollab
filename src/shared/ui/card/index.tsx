import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn, tw } from "@/src/shared/lib";

export const CardVariants = cva(
  tw`
  bg-opacity-70 hover:bg-opacity-80
  w-full px-2 py-1
  rounded-md
  `,
  {
    variants: {
      variant: {
        default: tw`bg-primary text-black`,
        border: tw`bg-opacity-0 border-2 border-black text-white`,
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CardVariants> {
  className?: string;
  children?: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(CardVariants({ variant }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";
