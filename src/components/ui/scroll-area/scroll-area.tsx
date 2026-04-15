import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";
import { forwardRef } from "react";

import { cn } from "@/lib/utils";

type ScrollAreaPropsType = ScrollAreaPrimitive.Root.Props & {
  hideScrollbar?: boolean;
};

export const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaPropsType>(
  ({ className, children, hideScrollbar, ...props }, ref) => {
    return (
      <ScrollAreaPrimitive.Root
        ref={ref}
        data-slot="scroll-area"
        className={cn(
          "relative overflow-hidden",
          "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:z-10 before:h-2 before:bg-linear-to-b before:from-black/3 before:to-transparent before:opacity-0 before:transition-opacity data-overflow-y-start:before:opacity-100",
          "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:h-2 after:bg-linear-to-t after:from-black/3 after:to-transparent after:opacity-0 after:transition-opacity data-overflow-y-end:after:opacity-100",
          className,
        )}
        {...props}
      >
        <ScrollAreaPrimitive.Viewport
          data-slot="scroll-area-viewport"
          className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
        >
          {children}
        </ScrollAreaPrimitive.Viewport>
        {!hideScrollbar && <ScrollBar />}
        <ScrollAreaPrimitive.Corner />
      </ScrollAreaPrimitive.Root>
    );
  },
);
ScrollArea.displayName = "ScrollArea";

type ScrollBarPropsType = ScrollAreaPrimitive.Scrollbar.Props;

export const ScrollBar = ({ className, orientation = "vertical", ...props }: ScrollBarPropsType) => {
  return (
    <ScrollAreaPrimitive.Scrollbar
      data-slot="scroll-area-scrollbar"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent flex touch-none p-px transition-colors select-none",
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.Thumb data-slot="scroll-area-thumb" className="rounded-full bg-primary relative flex-1" />
    </ScrollAreaPrimitive.Scrollbar>
  );
};
