"use client";

import React, { forwardRef, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn, tw } from "@/src/shared/lib";

export const InputVariants = cva(
  tw`block w-full px-3 py-3 rounded-md border-2 border-black
  placeholder-gray-400
  focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
  text-base
`,
  {
    variants: {
      variant: {
        primary: tw`bg-white text-black`,
        secondary: tw`bg-gray-100 text-gray-700`,
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {
  className?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant, className, placeholder, onChange, ...props }, ref) => {
    const [hasValue, setHasValue] = useState(false);

    const labelStyles = hasValue
      ? tw`absolute left-[6%] top-0 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm font-semibold`
      : tw`hidden`;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(!!event.target.value);
      if (onChange) return onChange(event);
    };

    return (
      <div className="relative w-full">
        <input
          ref={ref}
          className={cn(InputVariants({ variant }), className)}
          placeholder={placeholder}
          onChange={handleChange}
          {...props}
        />
        <span className={labelStyles}>{placeholder}</span>
      </div>
    );
  },
);

Input.displayName = "Input";
