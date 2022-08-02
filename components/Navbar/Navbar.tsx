import Image from "next/image";
import style from "./Navbar.module.css";

interface INavbar {
  title?: string;
}

const Navbar = ({ title }: INavbar) => {
  return (
    <div className={style.container}>
      <Image
        src="/icons/ic_angle_left.png"
        width={20}
        height={20}
        alt="back-button"
      />
      <div id="title" data-testid="title">
        {title}
      </div>
      <Image
        src="/icons/ic_share.png"
        width={20}
        height={20}
        alt="share-button"
      />
    </div>
  );
};

export default Navbar;
