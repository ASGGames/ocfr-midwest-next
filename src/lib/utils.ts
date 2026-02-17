// src/lib/utils.ts

/**
 * Combines class names into a single string.
 * Handles undefined, null, or false values gracefully.
 * Works well with Tailwind CSS and conditional classes.
 *
 * Example usage:
 *   cn("p-4", isActive && "bg-blue-500", extraClass)
 *
 * @param classes - list of class names or falsy values
 * @returns a single string with valid class names
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}
