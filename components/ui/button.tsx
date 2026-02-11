import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative isolate inline-flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden rounded-md text-sm font-medium transition duration-300 ease-[cubic-bezier(0.4,0.36,0,1)] disabled:pointer-events-none disabled:opacity-50 focus:outline-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring ring-1 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-md before:bg-gradient-to-b before:opacity-80 before:transition-opacity before:duration-300 after:pointer-events-none after:absolute after:inset-0 after:-z-10 after:rounded-md after:bg-gradient-to-b after:to-transparent after:mix-blend-overlay shadow cursor-pointer data-[variant=outline]:border data-[variant=outline]:border-input [&:not([data-variant=outline])]:border-transparent",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground ring-primary hover:bg-primary/90 before:from-primary-foreground/20 after:from-primary-foreground/10",

        destructive:
          "bg-destructive text-white ring-destructive hover:bg-destructive/90 before:from-white/20 after:from-white/10",

        outline:
          "bg-background text-foreground ring-border hover:bg-accent before:from-foreground/5 after:from-foreground/5",

        secondary:
          "bg-secondary text-secondary-foreground ring-secondary hover:bg-secondary/80 before:from-secondary-foreground/20 after:from-secondary-foreground/10",

        ghost:
          "bg-transparent ring-transparent hover:bg-accent hover:text-accent-foreground",

        link: "bg-transparent ring-transparent text-primary underline-offset-4 hover:underline shadow-none before:hidden after:hidden",
      },

      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3",
        lg: "h-10 px-6",
        icon: "size-9",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
