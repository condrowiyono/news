import Button from "@components/Button";
import ImageServer from "@components/Image";
import style from "./Profile.module.css";
import { formatNumber } from "@utils/number";

const Profile = ({
  name,
  num_follower,
  num_following,
  profile_picture,
  description,
}: IProfile) => {
  return (
    <div className={style.container}>
      <div className={style.profile}>
        <div>
          <ImageServer
            src={profile_picture}
            objectFit="cover"
            width={80}
            height={80}
            alt="profile-picture"
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className={style.identityContainer}>
          <div className={style.info}>
            <div className={style.label}>Verified Creator</div>
            <div className={style.content}>{name}</div>
          </div>
          <div className={style.stats}>
            <div className={style.info}>
              <div className={style.label}>Following</div>
              <div className={style.content}>{formatNumber(num_following)}</div>
            </div>
            <div className={style.info}>
              <div className={style.label}>Follower</div>
              <div className={style.content}>
                {formatNumber(num_follower, true)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.description}>{description}</div>
      <Button />
    </div>
  );
};

export default Profile;
