import { Tabs as TabsPrimitive } from "@base-ui/react/tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

type TabsPropsType = TabsPrimitive.Root.Props;

export const Tabs = ({ className, orientation = "horizontal", ...props }: TabsPropsType) => {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      className={cn("gap-2 group/tabs flex data-[orientation=horizontal]:flex-col", className)}
      {...props}
    />
  );
};

const tabsListVariants = cva(
  "relative rounded group/tabs-list text-muted-foreground inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",
  {
    variants: {
      variant: {
        default: "bg-transparent gap-0.5 border border-border",
        line: "gap-1 bg-transparent rounded-none",
      },
      size: {
        xs: "h-5 2xl:h-6 p-0.5",
        sm: "h-6 2xl:h-8 p-0.5 2xl:p-1",
        md: "h-7 2xl:h-9 p-0.5 2xl:p-1",
        lg: "h-8 2xl:h-10 p-1 2xl:p-1.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "sm",
    },
  },
);

type TabsListPropsType = TabsPrimitive.List.Props & VariantProps<typeof tabsListVariants>;

export const TabsList = ({ className, variant = "default", size = "sm", ...props }: TabsListPropsType) => {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      data-size={size}
      className={cn(tabsListVariants({ variant, size }), className)}
      {...props}
    />
  );
};

type TabsTriggerPropsType = TabsPrimitive.Tab.Props;

export const TabsTrigger = ({ className, ...props }: TabsTriggerPropsType) => {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        "not-data-active:cursor-pointer",
        "z-1 gap-1 2xl:gap-1.5 rounded tracking-wide select-none outline-none shrink-0 [&_svg:not([class*='size-'])]:size-2.5 2xl:[&_svg:not([class*='size-'])]:size-3 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring text-muted-foreground hover:text-foreground relative inline-flex flex-1 items-center justify-center whitespace-nowrap transition-colors group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        "h-full",
        "group-data-[size=xs]/tabs-list:px-1.5 group-data-[size=xs]/tabs-list:text-3xs 2xl:group-data-[size=xs]/tabs-list:px-2 2xl:group-data-[size=xs]/tabs-list:text-xs group-data-[size=xs]/tabs-list:gap-0.5 2xl:group-data-[size=xs]/tabs-list:gap-1 group-data-[size=xs]/tabs-list:[&_svg:not([class*='size-'])]:size-2.5 2xl:group-data-[size=xs]/tabs-list:[&_svg:not([class*='size-'])]:size-3",
        "group-data-[size=sm]/tabs-list:px-2 group-data-[size=sm]/tabs-list:text-xs 2xl:group-data-[size=sm]/tabs-list:px-2.5 2xl:group-data-[size=sm]/tabs-list:text-sm group-data-[size=sm]/tabs-list:gap-0.5 2xl:group-data-[size=sm]/tabs-list:gap-1",
        "group-data-[size=md]/tabs-list:px-2 group-data-[size=md]/tabs-list:text-xs 2xl:group-data-[size=md]/tabs-list:px-2.5 2xl:group-data-[size=md]/tabs-list:text-sm group-data-[size=md]/tabs-list:gap-1 2xl:group-data-[size=md]/tabs-list:gap-1.5",
        "group-data-[size=lg]/tabs-list:px-2 group-data-[size=lg]/tabs-list:text-xs 2xl:group-data-[size=lg]/tabs-list:px-2.5 2xl:group-data-[size=lg]/tabs-list:text-sm group-data-[size=lg]/tabs-list:gap-1 2xl:group-data-[size=lg]/tabs-list:gap-1.5",
        "group-data-[variant=default]/tabs-list:data-active:text-tabs-accent-foreground group-data-[variant=line]/tabs-list:data-active:text-foreground",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        className,
      )}
      {...props}
    />
  );
};

type TabsIndicatorPropsType = TabsPrimitive.Indicator.Props;

export const TabsIndicator = ({ className, ...props }: TabsIndicatorPropsType) => {
  return (
    <TabsPrimitive.Indicator
      data-slot="tabs-indicator"
      className={cn(
        "absolute transition-all duration-200 ease-out",
        "data-[activation-direction=left]:duration-200 data-[activation-direction=right]:duration-200",
        "data-[activation-direction=up]:duration-200 data-[activation-direction=down]:duration-200",
        "group-data-[variant=default]/tabs-list:rounded group-data-[variant=default]/tabs-list:bg-tabs-accent",
        "group-data-[variant=line]/tabs-list:bg-foreground",
        "group-data-[orientation=horizontal]/tabs:group-data-[variant=line]/tabs-list:bottom-0 group-data-[orientation=horizontal]/tabs:group-data-[variant=line]/tabs-list:h-0.5",
        "group-data-[orientation=vertical]/tabs:group-data-[variant=line]/tabs-list:right-0 group-data-[orientation=vertical]/tabs:group-data-[variant=line]/tabs-list:w-0.5",
        className,
      )}
      style={{
        top: "var(--active-tab-top)",
        left: "var(--active-tab-left)",
        width: "var(--active-tab-width)",
        height: "var(--active-tab-height)",
      }}
      {...props}
    />
  );
};

type TabsContentPropsType = TabsPrimitive.Panel.Props;

export const TabsContent = ({ className, ...props }: TabsContentPropsType) => {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn("text-sm flex-1 outline-none animate-in fade-in-0 slide-in-from-bottom-2 duration-200", className)}
      {...props}
    />
  );
};

export { tabsListVariants };
