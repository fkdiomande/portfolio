import { Select as SelectPrimitive } from "@base-ui/react/select";
import { Check as CheckIcon, ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";
export const Select = SelectPrimitive.Root;

type SelectGroupPropsType = SelectPrimitive.Group.Props;

export const SelectGroup = ({ className, ...props }: SelectGroupPropsType) => {
  return <SelectPrimitive.Group data-slot="select-group" className={cn("scroll-my-1 p-1", className)} {...props} />;
};

type SelectValuePropsType = SelectPrimitive.Value.Props;

export const SelectValue = ({ className, ...props }: SelectValuePropsType) => {
  return (
    <SelectPrimitive.Value data-slot="select-value" className={cn("flex flex-1 text-left", className)} {...props} />
  );
};

type SelectTriggerPropsType = SelectPrimitive.Trigger.Props & {
  size?: "sm" | "md";
};

export const SelectTrigger = ({ className, size = "sm", children, ...props }: SelectTriggerPropsType) => {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 aria-invalid:border-destructive gap-1 2xl:gap-1.5 rounded border bg-transparent py-1.5 2xl:py-2 pr-1.5 2xl:pr-2 pl-2 2xl:pl-2.5 text-xs 2xl:text-sm transition-[color,box-shadow] focus-visible:ring-[3px] aria-invalid:ring-[3px] data-[size=md]:h-7 data-[size=sm]:h-6 2xl:data-[size=md]:h-9 2xl:data-[size=sm]:h-8 *:data-[slot=select-value]:flex *:data-[slot=select-value]:gap-1 2xl:*:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-3 2xl:[&_svg:not([class*='size-'])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon
        render={<ChevronDownIcon className="size-3 2xl:size-4 text-primary pointer-events-none" />}
      />
    </SelectPrimitive.Trigger>
  );
};

type SelectContentPropsType = SelectPrimitive.Popup.Props &
  Pick<SelectPrimitive.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset" | "alignItemWithTrigger"> & {
    container?: HTMLElement | null | React.RefObject<HTMLElement | null>;
  };

export const SelectContent = ({
  className,
  children,
  side = "bottom",
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  alignItemWithTrigger = true,
  container,
  ...props
}: SelectContentPropsType) => {
  return (
    <SelectPrimitive.Portal container={container}>
      <SelectPrimitive.Positioner
        side={side}
        sideOffset={sideOffset}
        align={align}
        alignOffset={alignOffset}
        alignItemWithTrigger={alignItemWithTrigger}
        className="isolate z-50"
      >
        <SelectPrimitive.Popup
          data-slot="select-content"
          className={cn(
            "bg-popover text-popover-foreground min-w-36 rounded p-1 relative isolate z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto ring ring-ring-alt",
            className,
          )}
          {...props}
        >
          <SelectScrollUpButton />
          <SelectPrimitive.List>{children}</SelectPrimitive.List>
          <SelectScrollDownButton />
        </SelectPrimitive.Popup>
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
};

type SelectLabelPropsType = SelectPrimitive.GroupLabel.Props;

export const SelectLabel = ({ className, ...props }: SelectLabelPropsType) => {
  return (
    <SelectPrimitive.GroupLabel
      data-slot="select-label"
      className={cn("text-muted-foreground px-2 py-1.5 text-xs", className)}
      {...props}
    />
  );
};

type SelectItemPropsType = SelectPrimitive.Item.Props;

export const SelectItem = ({ className, children, ...props }: SelectItemPropsType) => {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent gap-1.5 2xl:gap-2 rounded py-1 2xl:py-1.5 pr-6 2xl:pr-8 pl-1.5 2xl:pl-2 text-xs 2xl:text-sm [&_svg:not([class*='size-'])]:size-3 2xl:[&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-1.5 2xl:*:[span]:last:gap-2 relative flex w-full cursor-pointer items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText className="flex flex-1 gap-2 shrink-0 whitespace-nowrap">
        {children}
      </SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator
        render={<span className="pointer-events-none absolute right-2 flex size-4 items-center justify-center" />}
      >
        <CheckIcon className="size-4 pointer-events-none" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

type SelectSeparatorPropsType = SelectPrimitive.Separator.Props;

export const SelectSeparator = ({ className, ...props }: SelectSeparatorPropsType) => {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("bg-border -mx-1 my-1 h-px pointer-events-none", className)}
      {...props}
    />
  );
};

type SelectScrollUpButtonPropsType = React.ComponentProps<typeof SelectPrimitive.ScrollUpArrow>;

export const SelectScrollUpButton = ({ className, ...props }: SelectScrollUpButtonPropsType) => {
  return (
    <SelectPrimitive.ScrollUpArrow
      data-slot="select-scroll-up-button"
      className={cn(
        "bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4 top-0 w-full",
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpArrow>
  );
};

type SelectScrollDownButtonPropsType = React.ComponentProps<typeof SelectPrimitive.ScrollDownArrow>;

export const SelectScrollDownButton = ({ className, ...props }: SelectScrollDownButtonPropsType) => {
  return (
    <SelectPrimitive.ScrollDownArrow
      data-slot="select-scroll-down-button"
      className={cn(
        "bg-popover z-10 flex cursor-default items-center justify-center py-1 [&_svg:not([class*='size-'])]:size-4 bottom-0 w-full",
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownArrow>
  );
};
