import Dialog from "@components/Dialog/Dialog";
import Navbar from "@components/Navbar";
import Pill from "@components/Pill";
import Search from "@components/Search/Search";
import Content from "@modules/Content";
import Profile from "@modules/Profile";
import axios from "axios";
import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

interface PageParams extends IProfile {}

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

  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <div className="container">
        <Search />
        <div tabindex="0" style={{ marginTop: 12 }}>
          <img
            src="https://cf.shopee.co.id/file/ffc2c84eeba2720bebcbd5a69e6b72f8_xhdpi"
            alt="Promo Shopee"
            width="100%"
            height="auto"
          />
        </div>
        <Pill style={{ marginTop: 18 }} onClick={() => setFilterOpen(true)}>
          Filter
        </Pill>
        <Content data={data} isLoading={isLoadingContent} onTabChange={handleTabChange} />

        <Dialog open={filterOpen} onClose={() => setFilterOpen(false)}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h1>Filters</h1>
            <button tabIndex={0} onClick={() => setFilterOpen(false)}>
              Keluar
            </button>
          </div>
          <form action="#" className="filter">
            <label htmlFor="name">Prodcut Name</label>
            <input autoFocus type="text" name="name" id="name" />

            <label htmlFor="seller_city">Select sellers city?</label>
            <select id="seller_city" name="seller_city">
              <option value="1">Amsterdam</option>
              <option value="2">Buenos Aires</option>
              <option value="3">Delhi</option>
              <option value="4">Hong Kong</option>
              <option value="5">London</option>
              <option value="6">Los Angeles</option>
              <option value="7">Moscow</option>
              <option value="8">Mumbai</option>
              <option value="9">New York</option>
              <option value="10">São Paulo</option>
              <option value="11">Tokyo</option>
            </select>

            <fieldset>
              <legend>Select city(s):</legend>
              <input id="jakarta" type="checkbox" name="city" value="Jakarta" />
              <label htmlFor="jakarta">Jakarta</label>
              <br />
              <input id="bandung" type="checkbox" name="city" value="Bandung" />
              <label htmlFor="bandung">Bandung</label>
              <br />
              <input id="bekasi" type="checkbox" name="city" value="Bekasi" />
              <label htmlFor="bekasi">Bekasi</label>
            </fieldset>
            <fieldset>
              <legend>Rating:</legend>
              <input id="rating_1" type="radio" name="rating" value="1" />
              <label htmlFor="rating_1">1</label>
              <br />
              <input id="rating_2" type="radio" name="rating" value="2" />
              <label htmlFor="rating_2">2</label>
              <br />
              <input id="rating_3" type="radio" name="rating" value="3" />
              <label htmlFor="rating_3">3</label>
            </fieldset>
            <div>
              <button type="submit">Simpan</button>
              <button type="reset">Reset Filter</button>
            </div>
          </form>
        </Dialog>
      </div>
    </>
  );
};

export default Home;
