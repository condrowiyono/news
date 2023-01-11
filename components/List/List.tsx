import style from "./List.module.css";
import ImageServer from "@components/Image";
import Link from "next/link";
import { formatDate } from "@utils/intl";
import Skeleton from "@components/Skeleton";

export const SkeletonList = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div data-testid="title">
          <Skeleton width={72} height={12} />
          <Skeleton width={200} height={24} />
        </div>
        <Skeleton width={112} height={84} />
      </div>
      <div className={style.footer}>
        <Skeleton width={72} height={12} />
        <button className={style.share}>
          <ImageServer
            src="/icons/ic_share.png"
            width={20}
            height={20}
            alt="share-button"
          />
        </button>
      </div>
    </div>
  );
};

const List = ({ image, title, date, category, link = "#" }: INews) => {
  return (
    <Link href={link}>
      <a className={style.container}>
        <div className={style.header}>
          <div>
            <div className={style.date}>
              {formatDate.format(new Date(date))}
            </div>
            <div className={style.title} data-testid="title">
              {title}
            </div>
          </div>
          <div className={style.thumbnail}>
            <ImageServer
              src={image}
              objectFit="cover"
              width={112}
              height={84}
              alt={title}
              style={{ borderRadius: 8 }}
            />
          </div>
        </div>
        <div className={style.footer}>
          <div className={style.category}>{category}</div>
          <button className={style.share}>
            <ImageServer
              src="/icons/ic_share.png"
              width={20}
              height={20}
              alt="share-button"
            />
          </button>
        </div>
      </a>
    </Link>
  );
};

export default List;
