import { useEffect, useState } from "react";

export function usePath() {
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return path;
}
