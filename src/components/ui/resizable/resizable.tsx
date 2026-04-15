import type { ComponentProps } from "react";
import {
  Group as ResizablePrimitiveGroup,
  Panel as ResizablePrimitivePanel,
  Separator as ResizablePrimitiveSeparator,
} from "react-resizable-panels";

import { cn } from "@/lib/utils";

type ResizablePanelGroupPropsType = ComponentProps<typeof ResizablePrimitiveGroup>;

export const ResizablePanelGroup = ({ className, ...props }: ResizablePanelGroupPropsType) => {
  return (
    <ResizablePrimitiveGroup
      data-slot="resizable-panel-group"
      className={cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className)}
      {...props}
    />
  );
};

type ResizablePanelPropsType = ComponentProps<typeof ResizablePrimitivePanel>;

export const ResizablePanel = ({ ...props }: ResizablePanelPropsType) => {
  return <ResizablePrimitivePanel data-slot="resizable-panel" {...props} />;
};

type ResizableHandlePropsType = ComponentProps<typeof ResizablePrimitiveSeparator> & {
  withHandle?: boolean;
};

export const ResizableHandle = ({ withHandle, className, ...props }: ResizableHandlePropsType) => {
  return (
    <ResizablePrimitiveSeparator
      data-slot="resizable-handle"
      className={cn(
        "border-l relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90",
        className,
      )}
      {...props}
    >
      {withHandle && <div className="bg-border h-10 w-1.5 rounded-[4px] z-10 flex shrink-0" />}
    </ResizablePrimitiveSeparator>
  );
};
