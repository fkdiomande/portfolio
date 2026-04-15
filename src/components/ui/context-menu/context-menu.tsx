import { Menu as MenuPrimitive } from "@base-ui/react/menu";
import type * as React from "react";
import { type MouseEvent, useCallback, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type ContextMenuStateType = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  position: { x: number; y: number };
  onContextMenu: (e: MouseEvent) => void;
};

export const useContextMenu = (): ContextMenuStateType => {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onContextMenu = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setPosition({ x: e.clientX, y: e.clientY });
    setOpen(true);
  }, []);

  const onOpenChange = useCallback((value: boolean) => {
    setOpen(value);
  }, []);

  return { open, onOpenChange, position, onContextMenu };
};

type ContextMenuPropsType = {
  open: boolean;
  onOpenChange?: (open: boolean) => void;
  position: { x: number; y: number };
  children: React.ReactNode;
};

export const ContextMenu = ({ open, onOpenChange, position, children }: ContextMenuPropsType) => {
  const virtualAnchor = useMemo(
    () => ({
      getBoundingClientRect: () => ({
        x: position.x,
        y: position.y,
        width: 0,
        height: 0,
        top: position.y,
        right: position.x,
        bottom: position.y,
        left: position.x,
        toJSON: () => {},
      }),
    }),
    [position.x, position.y],
  );

  return (
    <MenuPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <MenuPrimitive.Portal>
        <MenuPrimitive.Positioner
          className="isolate z-50 outline-none"
          anchor={virtualAnchor}
          side="bottom"
          align="start"
          sideOffset={4}
        >
          <MenuPrimitive.Popup
            data-slot="context-menu-content"
            className="ring-white bg-popover text-popover-foreground min-w-40 rounded p-1 ring-1 z-50 max-h-(--available-height) origin-(--transform-origin) overflow-x-hidden overflow-y-auto outline-none shadow-md shadow-black/20"
          >
            {children}
          </MenuPrimitive.Popup>
        </MenuPrimitive.Positioner>
      </MenuPrimitive.Portal>
    </MenuPrimitive.Root>
  );
};

type ContextMenuItemPropsType = MenuPrimitive.Item.Props & {
  inset?: boolean;
  variant?: "default" | "destructive";
};

export const ContextMenuItem = ({ className, inset, variant = "default", ...props }: ContextMenuItemPropsType) => {
  return (
    <MenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:text-destructive not-data-[variant=destructive]:focus:**:text-accent-foreground gap-2 rounded px-2 py-1.5 text-sm [&_svg:not([class*='size-'])]:size-4 group/context-menu-item relative flex cursor-pointer items-center outline-hidden select-none data-disabled:pointer-events-none data-disabled:opacity-50 data-inset:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className,
      )}
      {...props}
    />
  );
};

type ContextMenuSeparatorPropsType = MenuPrimitive.Separator.Props;

export const ContextMenuSeparator = ({ className, ...props }: ContextMenuSeparatorPropsType) => {
  return (
    <MenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn("bg-border -mx-1 my-1 h-px", className)}
      {...props}
    />
  );
};
