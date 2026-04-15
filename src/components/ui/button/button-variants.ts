import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive rounded bg-clip-padding focus-visible:ring-[3px] aria-invalid:ring-[3px] [&_svg:not([class*='size-'])]:size-3 2xl:[&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none cursor-pointer tracking-wide",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/95",
        outline:
          "border border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive/10 hover:bg-destructive/20 focus-visible:ring-destructive/20 text-destructive focus-visible:border-destructive/40",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        xs: "h-5 2xl:h-6 gap-0.5 2xl:gap-1 rounded-[min(var(--radius-md),8px)] px-1.5 2xl:px-2 text-2xs 2xl:text-xs in-data-[slot=button-group]:rounded has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 2xl:has-data-[icon=inline-end]:pr-1.5 2xl:has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-2.5 2xl:[&_svg:not([class*='size-'])]:size-3",
        sm: "h-6 2xl:h-8 gap-0.5 2xl:gap-1 rounded-[min(var(--radius-md),10px)] px-2 2xl:px-2.5 text-xs 2xl:text-sm in-data-[slot=button-group]:rounded has-data-[icon=inline-end]:pr-1 has-data-[icon=inline-start]:pl-1 2xl:has-data-[icon=inline-end]:pr-1.5 2xl:has-data-[icon=inline-start]:pl-1.5",
        md: "h-7 2xl:h-9 gap-1 2xl:gap-1.5 px-2 2xl:px-2.5 text-xs 2xl:text-sm in-data-[slot=button-group]:rounded has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 2xl:has-data-[icon=inline-end]:pr-2 2xl:has-data-[icon=inline-start]:pl-2",
        lg: "h-8 2xl:h-10 gap-1 2xl:gap-1.5 px-2 2xl:px-2.5 text-xs 2xl:text-sm has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 2xl:has-data-[icon=inline-end]:pr-3 2xl:has-data-[icon=inline-start]:pl-3",
        xl: "h-10 2xl:h-12 gap-1.5 2xl:gap-2 px-3 2xl:px-4 text-base 2xl:text-lg has-data-[icon=inline-end]:pr-2.5 has-data-[icon=inline-start]:pl-2.5 2xl:has-data-[icon=inline-end]:pr-3.5 2xl:has-data-[icon=inline-start]:pl-3.5 [&_svg:not([class*='size-'])]:size-4 2xl:[&_svg:not([class*='size-'])]:size-5",
        icon: "size-7 2xl:size-9",
        "icon-xs":
          "size-5 2xl:size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded [&_svg:not([class*='size-'])]:size-2.5 2xl:[&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-6 2xl:size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded",
        "icon-lg": "size-8 2xl:size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  },
);
