import React from "react";

type Props = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  text: string;
  onClick?: () => void;
  count: number;
  setCount: (count: number) => void;
};

export const ButtonCount: React.FC<Props> = ({ text, count, setCount }) => {
  return <button onClick={() => setCount(count)}>{text}</button>;
};
