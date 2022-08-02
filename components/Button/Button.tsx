import style from "./Button.module.css";

const Button = () => {
  return (
    <button className={style.button} data-testid="button">
      Follow
    </button>
  );
};

export default Button;
