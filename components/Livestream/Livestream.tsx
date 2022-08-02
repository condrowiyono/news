import style from "./Livestream.module.css";
import ImageServer from "@components/Image";
import Skeleton from "@components/Skeleton";
import { formatNumber } from "@utils/number";

export const SkeletonLivestream = () => {
  return (
    <div className={style.container} data-testid="title">
      <Skeleton height={230} width={155} />
      <div className={style.content}>
        <Skeleton height={24} width={120} />
        <Skeleton height={12} width={48} />
      </div>
    </div>
  );
};

const Livestream = ({
  title,
  category,
  live_event,
  image,
  date,
  viewer_count,
}: INews) => {
  return (
    <div className={style.container}>
      <div className={style.imageContainer}>
        <ImageServer
          src={image}
          objectFit="cover"
          width={155}
          height={230}
          alt="profile-picture"
          style={{ borderRadius: 8 }}
        />
      </div>
      {live_event ? (
        <div className={`${style.timestamp} ${style.live}`} data-testid="live">
          <div className={style.liveText}>
            <ImageServer
              src="/icons/ic_eye_open.png"
              width={10}
              height={10}
              alt="live"
              style={{ borderRadius: 8 }}
            />
            {formatNumber(viewer_count || 0, true)} |{" "}
            <span className={style.liveIndicator}> • Live</span>
          </div>
        </div>
      ) : (
        <div
          data-testid="not-live"
          className={`${style.timestamp} ${
            new Date() > new Date(date) ? style.scheduled : style.clip
          }`}
        >
          <div className={style.liveText}>
            {new Date() > new Date(date) ? "Terjadwal" : "Clip"}
          </div>
        </div>
      )}
      <div className={style.content}>
        <div className={style.title}>{title}</div>
        <div className={style.category}>{category}</div>
      </div>
    </div>
  );
};

export default Livestream;
