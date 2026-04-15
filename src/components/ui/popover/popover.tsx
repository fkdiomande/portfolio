import { Popover as PopoverPrimitive } from "@base-ui/react/popover";
import type * as React from "react";

import { cn } from "@/lib/utils";

type PopoverPropsType = PopoverPrimitive.Root.Props;

export const Popover = ({ ...props }: PopoverPropsType) => {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
};

type PopoverTriggerPropsType = PopoverPrimitive.Trigger.Props;

export const PopoverTrigger = ({ ...props }: PopoverTriggerPropsType) => {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
};

type PopoverContentPropsType = PopoverPrimitive.Popup.Props &
  Pick<PopoverPrimitive.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset"> & {
    container?: HTMLElement | null | React.RefObject<HTMLElement | null>;
  };

export const PopoverContent = ({
  className,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  container,
  ...props
}: PopoverContentPropsType) => {
  return (
    <PopoverPrimitive.Portal container={container}>
      <PopoverPrimitive.Positioner
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
        className="isolate z-50"
      >
        <PopoverPrimitive.Popup
          data-slot="popover-content"
          className={cn(
            "bg-popover text-popover-foreground flex flex-col gap-4 rounded p-4 text-sm shadow-none ring-[0.7px] ring-popover-ring z-50 min-w-(--anchor-width) origin-(--transform-origin) outline-hidden",
            className,
          )}
          {...props}
        />
      </PopoverPrimitive.Positioner>
    </PopoverPrimitive.Portal>
  );
};

type PopoverHeaderPropsType = React.ComponentProps<"div">;

export const PopoverHeader = ({ className, ...props }: PopoverHeaderPropsType) => {
  return <div data-slot="popover-header" className={cn("flex flex-col gap-1 text-sm", className)} {...props} />;
};

type PopoverTitlePropsType = PopoverPrimitive.Title.Props;

export const PopoverTitle = ({ className, ...props }: PopoverTitlePropsType) => {
  return <PopoverPrimitive.Title data-slot="popover-title" className={cn("font-medium", className)} {...props} />;
};

type PopoverDescriptionPropsType = PopoverPrimitive.Description.Props;

export const PopoverDescription = ({ className, ...props }: PopoverDescriptionPropsType) => {
  return (
    <PopoverPrimitive.Description
      data-slot="popover-description"
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  );
};
