import List, { SkeletonList } from "@components/List";
import Livestream, { SkeletonLivestream } from "@components/Livestream";
import Pill from "@components/Pill";
import Thumbnail, { SkeletonThumbnail } from "@components/Thumbnail";
import { useEffect, useState } from "react";
import style from "./Content.module.css";

const Tabs = [
  { key: "news", label: "Handphone" },
  { key: "livestream", label: "Komputer" },
  { key: "quiz", label: "Rumah Tangga" },
];

interface IContent {
  data: INews[];
  isLoading?: boolean;
  onTabChange?: (category: string) => void;
}

const Content = ({ data, onTabChange, isLoading }: IContent) => {
  const [active, setActive] = useState("news");

  useEffect(() => {
    onTabChange?.(active);
  }, [active]);

  return (
    <div className={style.container}>
      <div className={style.pillContainer}>
        {Tabs.map((item) => (
          <Pill
            key={item.key}
            active={active === item.key}
            onClick={() => setActive(item.key)}
          >
            {item.label}
          </Pill>
        ))}
      </div>
      {active === "news" && (
        <div className={style.quizContainer}>
          {isLoading
            ? [1, 2, 3, 4, 6, 5, 7, 8, 9, 10].map((el) => <SkeletonThumbnail key={el} />)
            : data.map((news) => <Thumbnail key={news.id} {...news} />)}
        </div>
      )}
      {active === "livestream" && (
        <div className={style.quizContainer}>
          {isLoading
            ? [1, 2, 3, 4, 6, 5, 7, 8, 9, 10].map((el) => <SkeletonThumbnail key={el} />)
            : data.map((news) => <Thumbnail key={news.id} {...news} />)}
        </div>
      )}
      {active === "quiz" && (
        <div className={style.quizContainer}>
          {isLoading
            ? [1, 2, 3, 4, 6, 5, 7, 8, 9, 10].map((el) => <SkeletonThumbnail key={el} />)
            : data.map((news) => <Thumbnail key={news.id} {...news} />)}
        </div>
      )}
    </div>
  );
};

export default Content;
