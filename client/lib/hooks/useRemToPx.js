import { useEffect, useState } from "react";

export function useRemToPx(rem) {
  const [px, setPx] = useState();

  useEffect(() => {
    const basePx = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("font-size")
    );

    setPx(basePx * rem);
  }, [rem]);

  return px;
}
