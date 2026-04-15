/**
 * @author: @dorianbaffier
 * @description: Smooth Tab
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { AnimatePresence, motion, type Transition, type Variants } from "motion/react";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export type TabItemType = {
  id: string;
  title: string;
  content?: React.ReactNode;
  cardContent?: React.ReactNode;
  color: string;
};

type SmoothTabPropsType = {
  items: TabItemType[];
  defaultTabId: string;
  className?: string;
  contentClassName?: string;
  activeColor?: string;
  onChange?: (tabId: string) => void;
};

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.95,
    position: "absolute",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
    position: "absolute",
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    filter: "blur(8px)",
    scale: 0.95,
    position: "absolute",
  }),
};

const slideTransition: Transition = {
  duration: 0.4,
  ease: [0.32, 0.72, 0, 1],
};

const cardStyle = {
  backfaceVisibility: "hidden" as const,
  WebkitBackfaceVisibility: "hidden" as const,
};

const sliderStyle = { height: "calc(100% - 8px)", top: "4px" };

const springTransition = {
  type: "spring" as const,
  stiffness: 400,
  damping: 30,
};

export const SmoothTab = ({
  items,
  defaultTabId,
  className,
  contentClassName,
  activeColor = "bg-[#1F9CFE]",
  onChange,
}: SmoothTabPropsType) => {
  const [selected, setSelected] = useState<string>(defaultTabId);
  const [direction, setDirection] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, left: 0 });

  useEffect(() => {
    if (defaultTabId !== selected) {
      const currentIndex = items.findIndex((item) => item.id === selected);
      const newIndex = items.findIndex((item) => item.id === defaultTabId);
      setDirection(newIndex > currentIndex ? 1 : -1);
      setSelected(defaultTabId);
    }
  }, [defaultTabId, selected, items]);

  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const updateDimensions = () => {
      const selectedButton = buttonRefs.current.get(selected);
      const container = containerRef.current;

      if (selectedButton && container) {
        const rect = selectedButton.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        setDimensions({
          width: rect.width,
          left: rect.left - containerRect.left,
        });
      }
    };

    requestAnimationFrame(updateDimensions);

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, [selected]);

  const handleTabClick = useCallback(
    (tabId: string) => {
      const currentIndex = items.findIndex((item) => item.id === selected);
      const newIndex = items.findIndex((item) => item.id === tabId);
      setDirection(newIndex > currentIndex ? 1 : -1);
      setSelected(tabId);
      onChange?.(tabId);
    },
    [items, selected, onChange],
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, tabId: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleTabClick(tabId);
      }
    },
    [handleTabClick],
  );

  const selectedItem = useMemo(() => items.find((item) => item.id === selected), [items, selected]);

  const sliderAnimate = useMemo(
    () => ({
      width: dimensions.width - 8,
      x: dimensions.left + 4,
      opacity: 1,
    }),
    [dimensions.width, dimensions.left],
  );

  return (
    <div className="flex h-full flex-col justify-end">
      {/* Card Content Area */}
      <div className={cn("relative mb-2 flex-1 min-h-0 rounded ring ring-ring-alt w-full mx-auto", contentClassName)}>
        <div className="relative h-full w-full overflow-hidden border-none">
          <AnimatePresence custom={direction} initial={false} mode="popLayout">
            <motion.div
              animate="center"
              className="absolute inset-0 h-full w-full will-change-transform"
              custom={direction}
              exit="exit"
              initial="enter"
              key={`card-${selected}`}
              style={cardStyle}
              transition={slideTransition}
              variants={slideVariants}
            >
              {selectedItem?.cardContent}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Toolbar */}
      <div
        aria-label="Smooth tabs"
        className={cn(
          "relative flex items-center justify-between gap-1 py-1",
          "mx-auto bg-background",
          "rounded border-none ring ring-ring-alt",
          "transition-all duration-200",
          className,
        )}
        ref={containerRef}
        role="tablist"
      >
        {/* Sliding Background */}
        <motion.div
          animate={sliderAnimate}
          className={cn("absolute z-1 rounded", selectedItem?.color || activeColor)}
          initial={false}
          style={sliderStyle}
          transition={springTransition}
        />

        <div
          className="relative z-2 grid w-full gap-1 cursor-pointer"
          style={{ gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))` }}
        >
          {items.map((item) => {
            const isSelected = selected === item.id;
            return (
              <motion.button
                aria-controls={`panel-${item.id}`}
                aria-selected={isSelected}
                className={cn(
                  "relative flex items-center justify-center gap-0.5 rounded px-2 py-1.5",
                  "font-medium text-sm transition-all duration-300 cursor-pointer",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  "truncate",
                  isSelected
                    ? "text-white hover:brightness-90 transition-[filter]"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground",
                )}
                id={`tab-${item.id}`}
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                onKeyDown={(e) => handleKeyDown(e, item.id)}
                ref={(el) => {
                  if (el) buttonRefs.current.set(item.id, el);
                  else buttonRefs.current.delete(item.id);
                }}
                role="tab"
                tabIndex={isSelected ? 0 : -1}
                type="button"
              >
                <span className="truncate">{item.title}</span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SmoothTab;
