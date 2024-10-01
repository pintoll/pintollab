import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn, tw } from "@/src/shared/lib";

export const WrapperVariants = cva(tw`w-full px-4 lg:px-[256px]`, {
  variants: {
    variant: {
      default: tw`flex flex-col items-center`,
      block: tw`block pt-20`,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface WrapperProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof WrapperVariants> {
  className?: string;
  children?: React.ReactNode;
}

export const Wrapper = forwardRef<HTMLDivElement, WrapperProps>(
  ({ variant, className, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(WrapperVariants({ variant }), className)}
        {...props}
      >
        {children}
      </section>
    );
  },
);

Wrapper.displayName = "Wrapper";
