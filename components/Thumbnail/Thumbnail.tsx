import ImageServer from "@components/Image";
import style from "./Thumbnail.module.css";
import Link from "next/link";
import Skeleton from "@components/Skeleton";

export const SkeletonThumbnail = () => {
  return (
    <div data-testid="title">
      <Skeleton width={156} height={156} borderRadius={8} />
      <div className={style.content}>
        <Skeleton width={96} height={16} />
        <Skeleton width={128} height={24} />
        <Skeleton width={96} height={16} />
      </div>
    </div>
  );
};

const Thumbnail = ({ category, title, total_play, image }: INews) => {
  return (
    <Link href="#">
      <a className={style.container}>
        <ImageServer
          src={image}
          objectFit="cover"
          width={156}
          height={156}
          alt="profile-picture"
          style={{ borderRadius: 8 }}
        />
        <div className={style.content}>
          <div className={style.category}>{category}</div>
          <div className={style.title} data-testid="title">
            {title}
          </div>
          <div className={style.total}>
            <strong>{total_play}</strong> plays
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Thumbnail;
