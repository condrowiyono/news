import React from "react";
import style from "./Pill.module.css";

type PillType = {
  children?: React.ReactNode | string;
  active?: boolean;
  onClick?: () => void;
} & React.HTMLAttributes<HTMLButtonElement>;

const Pill = ({ children, active, onClick, ...rest }: PillType) => {
  return (
    <button
      className={`${style.pill} ${active ? style.active : ""}`}
      onClick={onClick}
      data-testid="pill"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Pill;
