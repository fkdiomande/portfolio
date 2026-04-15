import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import { Check as CheckIcon, ChevronRight as ChevronRightIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";

type DropdownMenuPropsType = MenuPrimitive.Root.Props;

export const DropdownMenu = ({ ...props }: DropdownMenuPropsType) => {
  return <MenuPrimitive.Root data-slot="dropdown-menu" {...props} />;
};

type DropdownMenuPortalPropsType = MenuPrimitive.Portal.Props;

export const DropdownMenuPortal = ({ ...props }: DropdownMenuPortalPropsType) => {
  return <MenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />;
};

type DropdownMenuTriggerPropsType = MenuPrimitive.Trigger.Props;

export const DropdownMenuTrigger = ({ ...props }: DropdownMenuTriggerPropsType) => {
  return <MenuPrimitive.Trigger data-slot="dropdown-menu-trigger" {...props} />;
};

type DropdownMenuContentPropsType = MenuPrimitive.Popup.Props &
  Pick<MenuPrimitive.Positioner.Props, "align" | "alignOffset" | "side" | "sideOffset">;

export const DropdownMenuContent = ({
  align = "start",
  alignOffset = 0,
  side = "bottom",
  sideOffset = 4,
  className,
  ...props
}: DropdownMenuContentPropsType) => {
  return (
    <MenuPrimitive.Portal>
      <MenuPrimitive.Positioner
        className="isolate z-50 outline-none"
        align={align}
        alignOffset={alignOffset}
        side={side}
        sideOffset={sideOffset}
      >
        <MenuPrimitive.Popup
          data-slot="dropdown-menu-content"
          className={cn(
            "bg-dropdown text-dropdown-foreground min-w-32 rounded p-1 z-50 max-h-(--available-height) w-(--anchor-width) origin-(--transform-origin) overflow-x-hidden overflow-y-auto outline-none shadow-none ring-[0.7px] ring-dropdown-ring",
            className,
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
};

type DropdownMenuGroupPropsType = MenuPrimitive.Group.Props;

export const DropdownMenuGroup = ({ ...props }: DropdownMenuGroupPropsType) => {
  return <MenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />;
};

type DropdownMenuLabelPropsType = MenuPrimitive.GroupLabel.Props & {
  inset?: boolean;
};

export const DropdownMenuLabel = ({ className, inset, ...props }: DropdownMenuLabelPropsType) => {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn("text-muted-foreground px-2 py-1.5 text-xs font-medium data-inset:pl-8", className)}
      {...props}
    />
  );
};

type DropdownMenuItemPropsType = MenuPrimitive.Item.Props & {
  inset?: boolean;
  variant?: "default" | "destructive";
};

export const DropdownMenuItem = ({ className, inset, variant = "default", ...props }: DropdownMenuItemPropsType) => {
  return (
    <MenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-1.5 2xl:gap-2 rounded px-1.5 2xl:px-2 py-1 2xl:py-1.5 text-xs 2xl:text-sm [&_svg:not([class*='size-'])]:size-3 2xl:[&_svg:not([class*='size-'])]:size-4 group/dropdown-menu-item relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-6 2xl:data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
};

type DropdownMenuSubPropsType = MenuPrimitive.SubmenuRoot.Props;

export const DropdownMenuSub = ({ ...props }: DropdownMenuSubPropsType) => {
  return <MenuPrimitive.SubmenuRoot data-slot="dropdown-menu-sub" {...props} />;
};

type DropdownMenuSubTriggerPropsType = MenuPrimitive.SubmenuTrigger.Props & {
  inset?: boolean;
};

export const DropdownMenuSubTrigger = ({ className, inset, children, ...props }: DropdownMenuSubTriggerPropsType) => {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded px-2 py-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 data-popup-open:bg-accent data-popup-open:text-accent-foreground flex cursor-default items-center outline-hidden select-none data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="size-4 ml-auto" />
    </MenuPrimitive.SubmenuTrigger>
  );
};

type DropdownMenuSubContentPropsType = React.ComponentProps<typeof DropdownMenuContent>;

export const DropdownMenuSubContent = ({
  align = "start",
  alignOffset = -3,
  side = "right",
  sideOffset = 0,
  className,
  ...props
}: DropdownMenuSubContentPropsType) => {
  return (
    <DropdownMenuContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        "bg-popover text-popover-foreground min-w-24 rounded p-1 w-auto shadow-md shadow-black/20",
        className,
      )}
      align={align}
      alignOffset={alignOffset}
      side={side}
      sideOffset={sideOffset}
      {...props}
    />
  );
};

type DropdownMenuCheckboxItemPropsType = MenuPrimitive.CheckboxItem.Props;

export const DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  ...props
}: DropdownMenuCheckboxItemPropsType) => {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="dropdown-menu-checkbox-item-indicator"
      >
        <MenuPrimitive.CheckboxItemIndicator>
          <CheckIcon className="size-4" />
        </MenuPrimitive.CheckboxItemIndicator>
      </span>
      {children}
    </MenuPrimitive.CheckboxItem>
  );
};

type DropdownMenuRadioGroupPropsType = MenuPrimitive.RadioGroup.Props;

export const DropdownMenuRadioGroup = ({ ...props }: DropdownMenuRadioGroupPropsType) => {
  return <MenuPrimitive.RadioGroup data-slot="dropdown-menu-radio-group" {...props} />;
};

type DropdownMenuRadioItemPropsType = MenuPrimitive.RadioItem.Props;

export const DropdownMenuRadioItem = ({ className, children, ...props }: DropdownMenuRadioItemPropsType) => {
  return (
    <MenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground gap-2 rounded py-1.5 pr-8 pl-2 text-sm [&_svg:not([class*='size-'])]:size-4 relative flex cursor-default items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    >
      <span
        className="pointer-events-none absolute right-2 flex items-center justify-center"
        data-slot="dropdown-menu-radio-item-indicator"
      >
        <MenuPrimitive.RadioItemIndicator>
          <CheckIcon className="size-4" />
        </MenuPrimitive.RadioItemIndicator>
      </span>
      {children}
    </MenuPrimitive.RadioItem>
  );
};

type DropdownMenuSeparatorPropsType = MenuPrimitive.Separator.Props;

export const DropdownMenuSeparator = ({ className, ...props }: DropdownMenuSeparatorPropsType) => {
  return (
    <MenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
};

type DropdownMenuShortcutPropsType = React.ComponentProps<"span">;

export const DropdownMenuShortcut = ({ className, ...props }: DropdownMenuShortcutPropsType) => {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        "text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground ml-auto text-xs tracking-widest",
        className,
      )}
      {...props}
    />
  );
};
