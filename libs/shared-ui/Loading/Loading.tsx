import { FC, useEffect, useRef, useState } from "react";

const MAX_DOT_LENGTH = 3;

type LoadingProps = {
  message?: string;
};

console.log("hello?");

export const Loading: FC<LoadingProps> = ({ message }) => {
  const [dotLength, setDotLength] = useState(0);
  const timer = useRef<NodeJS.Timer | null>(null);

  useEffect(() => {
    if (timer.current) {
      return;
    }

    timer.current = setInterval(() => {
      setDotLength((prev) => {
        return prev === MAX_DOT_LENGTH ? 0 : prev + 1;
      });
    }, 500);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div>
      {message?.trim() || "Loading"}
      <span>{new Array(dotLength).fill(null).map(() => ".")}</span>
    </div>
  );
};
