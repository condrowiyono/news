import { useRef, useEffect } from "react";
import style from "./Dialog.module.css";

type DialogProps = {
  open: boolean;
  onClose?: () => void;
  title?: string;
  children?: React.ReactNode;
} & React.DialogHTMLAttributes<HTMLDialogElement>;

const Dialog = ({ children, open, ...rest }: DialogProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  return (
    <dialog className={style.dialog} ref={dialogRef} {...rest}>
      <section>{children}</section>
    </dialog>
  );
};

export default Dialog;
