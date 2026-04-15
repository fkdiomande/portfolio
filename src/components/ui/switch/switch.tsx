import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "@/lib/utils";

type SwitchPropsType = SwitchPrimitive.Root.Props & {
  size?: "sm" | "md";
};

export const Switch = ({ className, size = "md", ...props }: SwitchPropsType) => {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "data-checked:bg-primary data-unchecked:bg-input focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 shrink-0 rounded-full shadow-xs focus-visible:ring-[3px] aria-invalid:ring-[3px] data-[size=md]:h-[18.4px] data-[size=md]:w-8 data-[size=sm]:h-3.5 data-[size=sm]:w-6 peer group/switch relative inline-flex items-center transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="bg-background rounded-full group-data-[size=md]/switch:size-4 group-data-[size=sm]/switch:size-3 group-data-[size=md]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=md]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0 pointer-events-none block ring-0 transition-transform"
      />
    </SwitchPrimitive.Root>
  );
};
