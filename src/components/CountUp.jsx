import { useEffect, useRef } from "react";
import { animateCountUp } from "../lib/animateCountUp";

export default function CountUp({ value, prefix = "", suffix = "" }) {
  const numberRef = useRef(null);
  const finalText = `${prefix}${value}${suffix}`;

  useEffect(() => animateCountUp(numberRef.current, { value, prefix, suffix }), [value, prefix, suffix]);

  return (
    <span className="trust__num" aria-label={finalText} style={{ display: "inline-grid" }}>
      {/* Reserve the final text width so counting never shifts the layout. */}
      <span aria-hidden="true" style={{ gridArea: "1 / 1", visibility: "hidden" }}>{finalText}</span>
      <span ref={numberRef} aria-hidden="true" style={{ gridArea: "1 / 1" }}>{finalText}</span>
    </span>
  );
}
