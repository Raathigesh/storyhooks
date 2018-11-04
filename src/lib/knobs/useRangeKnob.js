import { useState, useEffect } from "react";
import { setKnob } from "../inspector/global-state";

export default function useRangeKnob(
  name,
  { initialValue, min, max } = { initialValue: 0, min: 0, max: 100 }
) {
  const [value, setValue] = useState(initialValue);
  useEffect(
    () => {
      setKnob({
        name,
        type: "range",
        value,
        min,
        max,
        onChange: value => {
          setValue(value);
        }
      });
    },
    [value]
  );
  return [value, setValue];
}
