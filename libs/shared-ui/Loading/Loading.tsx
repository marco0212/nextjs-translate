import { FC, useEffect, useRef, useState } from "react";
import { Meta } from "@storybook/addon-docs";

const MAX_DOT_LENGTH = 3;

type LoadingProps = {
  message?: string;
};

export const Loading: FC<LoadingProps> = ({ message }) => {
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

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <div>
      {message?.trim() || "Loading"}
      {dots}
    </div>
  );
};
