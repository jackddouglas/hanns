import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const middleEllipsis = (str: string, len: number) => {
  if (!str) {
    return '';
  }

  return `${str.substr(0, len)}...${str.substr(str.length - len, str.length)}`;
};
