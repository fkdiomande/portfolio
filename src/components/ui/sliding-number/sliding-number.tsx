import type { MotionValue, Transition } from "motion/react";
import { motion, motionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useId } from "react";
import useMeasure from "react-use-measure";

const TRANSITION: Transition = {
  type: "spring",
  stiffness: 280,
  damping: 18,
  mass: 0.3,
};

type DigitPropsType = {
  value: number;
  place: number;
};

const Digit = ({ value, place }: DigitPropsType) => {
  const valueRoundedToPlace = Math.floor(value / place) % 10;
  const initial = motionValue(valueRoundedToPlace);
  const animatedValue = useSpring(initial, TRANSITION);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div className="relative inline-block w-[1ch] overflow-x-visible overflow-y-clip leading-none tabular-nums">
      <div className="invisible">0</div>
      {Array.from({ length: 10 }, (_, i) => (
        <NumberDisplay key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
};

type NumberDisplayPropsType = {
  mv: MotionValue<number>;
  number: number;
};

const NumberDisplay = ({ mv, number }: NumberDisplayPropsType) => {
  const uniqueId = useId();
  const [ref, bounds] = useMeasure();

  const y = useTransform(mv, (latest) => {
    if (!bounds.height) return 0;
    const placeValue = latest % 10;
    const offset = (10 + number - placeValue) % 10;
    let memo = offset * bounds.height;

    if (offset > 5) {
      memo -= 10 * bounds.height;
    }

    return memo;
  });

  // don't render the animated number until we know the height
  if (!bounds.height) {
    return (
      <span ref={ref} className="invisible absolute">
        {number}
      </span>
    );
  }

  return (
    <motion.span
      style={{ y }}
      layoutId={`${uniqueId}-${number}`}
      className="absolute inset-0 flex items-center justify-center"
      transition={TRANSITION}
      ref={ref}
    >
      {number}
    </motion.span>
  );
};

type SlidingNumberPropsType = {
  value: number;
  padStart?: boolean;
  decimalSeparator?: string;
};

export const SlidingNumber = ({ value, padStart = false, decimalSeparator = "." }: SlidingNumberPropsType) => {
  const absValue = Math.abs(value);
  const [integerPart, decimalPart] = absValue.toString().split(".");
  const integerValue = Number.parseInt(integerPart, 10);
  const paddedInteger = padStart && integerValue < 10 ? `0${integerPart}` : integerPart;
  const integerPlaces = Array.from({ length: paddedInteger.length }, (_, i) => 10 ** (paddedInteger.length - i - 1));

  return (
    <div className="flex items-center">
      {value < 0 && "-"}
      {integerPlaces.map((place) => (
        <Digit key={`pos-${place}`} value={integerValue} place={place} />
      ))}
      {decimalPart && (
        <>
          <span>{decimalSeparator}</span>
          {decimalPart.split("").map((_, index) => (
            <Digit
              key={`decimal-${index}`}
              value={Number.parseInt(decimalPart, 10)}
              place={10 ** (decimalPart.length - index - 1)}
            />
          ))}
        </>
      )}
    </div>
  );
};
