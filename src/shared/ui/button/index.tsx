import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn, tw } from "@/src/shared/lib";

export const ButtonVariants = cva(
  tw`
  flex justify-center items-center font-medium
  rounded-md
  `,
  {
    variants: {
      variant: {
        primary: tw`bg-secondary text-white`,
        secondary: tw`bg-primary text-white`,
      },
      size: {
        sm: tw`px-3 py-[0.35rem] lg:text-lg`,
        md: tw`w-[160px] h-[40px] sm:w-[400px] sm:h-[50px]`,
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  },
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  className?: string;
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(ButtonVariants({ variant, size }), className)}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
