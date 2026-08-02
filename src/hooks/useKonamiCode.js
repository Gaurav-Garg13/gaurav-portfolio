import { useEffect, useState } from "react";

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a",
];

export function useKonamiCode() {
  const [activated, setActivated] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    function handleKeyDown(e) {
      const expected = KONAMI_CODE[index];
      if (e.key === expected || e.key.toLowerCase() === expected) {
        const nextIndex = index + 1;
        if (nextIndex === KONAMI_CODE.length) {
          setActivated(true);
          setIndex(0);
        } else {
          setIndex(nextIndex);
        }
      } else {
        setIndex(0);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  return { activated, dismiss: () => setActivated(false) };
}
