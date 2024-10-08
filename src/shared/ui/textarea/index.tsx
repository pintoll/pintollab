"use client";

import React, { forwardRef, useState } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn, tw } from "@/src/shared/lib";

export const TextareaVariants = cva(
  tw`block w-full h-[12.5rem] px-3 py-3 rounded-md border-2 border-black
  placeholder-gray-400
  focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
  text-base resize-none
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

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof TextareaVariants> {
  className?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ variant, className, placeholder, onChange, ...props }, ref) => {
    const [hasValue, setHasValue] = useState(false);

    const labelStyles = hasValue
      ? tw`absolute left-[3%] top-0 -translate-y-1/2 bg-white px-2 text-sm font-semibold`
      : tw`hidden`;

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setHasValue(!!event.target.value);
      if (onChange) return onChange(event);
    };

    return (
      <div className="relative w-full">
        <textarea
          ref={ref}
          className={cn(TextareaVariants({ variant }), className)}
          placeholder={placeholder}
          onChange={handleChange}
          {...props}
        />
        <span className={labelStyles}>{placeholder}</span>
      </div>
    );
  },
);

Textarea.displayName = "Textarea";
