import style from "./Skeleton.module.css";

interface ISkeleton {
  width: number;
  height: number;
  borderRadius?: number;
}

const Skeleton = ({ width, height, borderRadius = 4 }: ISkeleton) => {
  return (
    <div
      className={style.skeleton}
      style={{ height, width, borderRadius }}
      data-testid="skeleton"
    />
  );
};

export default Skeleton;
