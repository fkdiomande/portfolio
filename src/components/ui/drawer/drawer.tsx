import type * as React from "react";
import { createContext, type RefObject, useContext, useRef } from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

const DrawerContentContext = createContext<RefObject<HTMLDivElement | null> | null>(null);

export const useDrawerContentRef = () => useContext(DrawerContentContext) ?? undefined;

type DrawerPropsType = React.ComponentProps<typeof DrawerPrimitive.Root>;

export const Drawer = ({ ...props }: DrawerPropsType) => {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />;
};

type DrawerTriggerPropsType = React.ComponentProps<typeof DrawerPrimitive.Trigger>;

export const DrawerTrigger = ({ ...props }: DrawerTriggerPropsType) => {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />;
};

type DrawerPortalPropsType = React.ComponentProps<typeof DrawerPrimitive.Portal>;

export const DrawerPortal = ({ ...props }: DrawerPortalPropsType) => {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />;
};

type DrawerClosePropsType = React.ComponentProps<typeof DrawerPrimitive.Close>;

export const DrawerClose = ({ ...props }: DrawerClosePropsType) => {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />;
};

type DrawerOverlayPropsType = React.ComponentProps<typeof DrawerPrimitive.Overlay>;

export const DrawerOverlay = ({ className, ...props }: DrawerOverlayPropsType) => {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 supports-backdrop-filter:backdrop-blur-none fixed inset-0 z-50",
        className,
      )}
      {...props}
    />
  );
};

type DrawerContentPropsType = React.ComponentProps<typeof DrawerPrimitive.Content>;

export const DrawerContent = ({ className, children, ...props }: DrawerContentPropsType) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={contentRef}
        data-slot="drawer-content"
        className={cn(
          "bg-background flex h-auto flex-col text-sm data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-none data-[vaul-drawer-direction=bottom]:border-t data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:rounded-r-none data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:rounded-l-none data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-none data-[vaul-drawer-direction=top]:border-b data-[vaul-drawer-direction=left]:sm:max-w-sm data-[vaul-drawer-direction=right]:sm:max-w-sm group/drawer-content fixed z-50",
          "sm:min-w-2xl data-vaul-drawer:duration-200! data-vaul-drawer:animation-duration-[200ms]!",
          className,
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-1.5 w-25 shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        <DrawerContentContext.Provider value={contentRef}>{children}</DrawerContentContext.Provider>
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
};

type DrawerHeaderPropsType = React.ComponentProps<"div">;

export const DrawerHeader = ({ className, ...props }: DrawerHeaderPropsType) => {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        "gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left flex flex-col",
        className,
      )}
      {...props}
    />
  );
};

type DrawerFooterPropsType = React.ComponentProps<"div">;

export const DrawerFooter = ({ className, ...props }: DrawerFooterPropsType) => {
  return <div data-slot="drawer-footer" className={cn("gap-2 p-4 mt-auto flex flex-col", className)} {...props} />;
};

type DrawerTitlePropsType = React.ComponentProps<typeof DrawerPrimitive.Title>;

export const DrawerTitle = ({ className, ...props }: DrawerTitlePropsType) => {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn("text-foreground font-semibold uppercase", className)}
      {...props}
    />
  );
};

type DrawerDescriptionPropsType = React.ComponentProps<typeof DrawerPrimitive.Description>;

export const DrawerDescription = ({ className, ...props }: DrawerDescriptionPropsType) => {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
};
