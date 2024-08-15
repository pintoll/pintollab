// use it for tailwind css

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** Prevent Classname Conflicts */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/** make text that can be observed by tailwind intellisense */
export const tw = (strings: TemplateStringsArray, ...values: any[]) => {
  return strings.reduce((acc, str, i) => acc + str + (values[i] || ""), "");
};
