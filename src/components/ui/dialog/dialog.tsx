import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { X as CancelIcon } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";

type DialogPropsType = DialogPrimitive.Root.Props;

export const Dialog = ({ ...props }: DialogPropsType) => {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
};

type DialogTriggerPropsType = DialogPrimitive.Trigger.Props;

export const DialogTrigger = ({ ...props }: DialogTriggerPropsType) => {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
};

type DialogPortalPropsType = DialogPrimitive.Portal.Props;

export const DialogPortal = ({ ...props }: DialogPortalPropsType) => {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
};

type DialogClosePropsType = DialogPrimitive.Close.Props;

export const DialogClose = ({ ...props }: DialogClosePropsType) => {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
};

type DialogOverlayPropsType = DialogPrimitive.Backdrop.Props;

export const DialogOverlay = ({ className, ...props }: DialogOverlayPropsType) => {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-overlay"
      className={cn(
        "data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50",
        className,
      )}
      {...props}
    />
  );
};

type DialogContentPropsType = DialogPrimitive.Popup.Props & {
  showCloseButton?: boolean;
};

export const DialogContent = ({ className, children, showCloseButton = false, ...props }: DialogContentPropsType) => {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Popup
        data-slot="dialog-content"
        className={cn(
          "bg-white border data-open:animate-in data-closed:animate-out data-closed:fade-out-0 data-open:fade-in-0 data-closed:zoom-out-95 data-open:zoom-in-95 grid w-full gap-4 2xl:gap-6 rounded p-4 text-xs 2xl:text-sm duration-100 sm:max-w-2xl fixed top-1/2 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 outline-none",
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="absolute top-4 right-4 inline-flex items-center justify-center rounded p-1 hover:bg-accent cursor-pointer"
          >
            <CancelIcon strokeWidth={2} />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Popup>
    </DialogPortal>
  );
};

type DialogHeaderPropsType = React.ComponentProps<"div">;

export const DialogHeader = ({ className, ...props }: DialogHeaderPropsType) => {
  return <div data-slot="dialog-header" className={cn("gap-2 flex flex-col", className)} {...props} />;
};

type DialogFooterPropsType = React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
};

export const DialogFooter = ({ className, showCloseButton = false, children, ...props }: DialogFooterPropsType) => {
  return (
    <div
      data-slot="dialog-footer"
      className={cn("gap-2 flex flex-col-reverse sm:flex-row sm:justify-end", className)}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close className="inline-flex items-center justify-center rounded border px-4 py-2 hover:bg-accent cursor-pointer">
          Close
        </DialogPrimitive.Close>
      )}
    </div>
  );
};

type DialogTitlePropsType = DialogPrimitive.Title.Props;

export const DialogTitle = ({ className, ...props }: DialogTitlePropsType) => {
  return (
    <DialogPrimitive.Title data-slot="dialog-title" className={cn("leading-none font-medium", className)} {...props} />
  );
};

type DialogDescriptionPropsType = DialogPrimitive.Description.Props;

export const DialogDescription = ({ className, ...props }: DialogDescriptionPropsType) => {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-muted-foreground *:[a]:hover:text-foreground text-sm *:[a]:underline *:[a]:underline-offset-3",
        className,
      )}
      {...props}
    />
  );
};
