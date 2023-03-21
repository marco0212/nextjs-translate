import { useEffect, useRef, useState } from "react";

const MAX_DOT_LENGTH = 3;

export const Loading = () => {
  const [dots, setDots] = useState("");
  const timer = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    if (timer.current) {
      return;
    }

    timer.current = setInterval(() => {
      setDots((prev) => {
        return prev.length === MAX_DOT_LENGTH ? "" : prev + ".";
      });
    }, 500);
  }, []);

  return <div>Loading{dots}</div>;
};
