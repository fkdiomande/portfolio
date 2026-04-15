import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { Check as CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type CheckboxPropsType = CheckboxPrimitive.Root.Props;

export const Checkbox = ({ className, ...props }: CheckboxPropsType) => {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        "border-input data-checked:bg-primary data-checked:text-primary-foreground data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 flex size-3.5 2xl:size-4 items-center justify-center rounded border group-has-disabled/field:opacity-50 focus-visible:ring-[3px] aria-invalid:ring-[3px] peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="[&>svg]:size-3 2xl:[&>svg]:size-3.5 grid place-content-center text-current transition-none"
      >
        <CheckIcon strokeWidth={2} />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
};
