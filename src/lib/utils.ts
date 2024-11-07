import { clsx } from "clsx"
import type { ClassValue as ClsxValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClsxValue[]) {
  return twMerge(clsx(inputs))
}