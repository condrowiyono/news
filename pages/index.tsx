import Navbar from "@components/Navbar";
import Content from "@modules/Content";
import Profile from "@modules/Profile";
import axios from "axios";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PageParams extends IProfile {}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      profile_picture: "https://loremflickr.com/80/80/animals?56789",
      is_verified: true,
      name: "Samantha William",
      num_following: 9998,
      num_follower: 99800,
      description:
        "Yuk follow aku biar kita streaming game bareng setiap hari senin & jumat jam 10 AM - 3 PM. Jangan lupa follow IG aku juga ya @Sam_will",
    },
  };
};

const Home: NextPage<PageParams> = ({ name, ...rest }: PageParams) => {
  const [data, setData] = useState<INews[]>([]);
  const [isLoadingContent, setLoadingContent] = useState(true);

  const handleTabChange = async (category: string) => {
    setLoadingContent(true);
    setData([]);
    const resp = await axios.get<INews[]>(`/api/${category}`);
    setData(resp.data);
    setLoadingContent(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      handleTabChange("news");
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div className="container">
        <div>
          <Navbar />
          <Profile name={name} {...rest} />
        </div>
        <Content
          data={data}
          isLoading={isLoadingContent}
          onTabChange={handleTabChange}
        />
      </div>
    </>
  );
};

export default Home;
