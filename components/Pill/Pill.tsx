import React from "react";
import style from "./Pill.module.css";

interface IPill {
  children?: React.ReactNode | string;
  active?: boolean;
  onClick?: () => void;
}

const Pill = ({ children, active, onClick }: IPill) => {
  return (
    <button
      className={`${style.pill} ${active ? style.active : ""}`}
      onClick={onClick}
      data-testid="pill"
    >
      {children}
    </button>
  );
};

export default Pill;
