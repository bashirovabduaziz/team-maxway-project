import React from "react";
import DataHeader from "./DataHeader";
import MaxiBox from "./MaxiBox";
import Yangilik from "./Yangilik";
import BarakaliMaxiBox from "./BarakaliMaxiBox";
import KlabSandwich from "./KlabSandwich";
import Lavash from "./Lavash";
import Shaurma from "./Shaurma";
import Burger from "./Burger";
import DonarKebab from "./DonarKebab";
import HotDog from "./HotDog";
import Gazak from "./Gazaklar";
import Tamaddilar from "./Tamaddilar";
import Desertlar from "./Desertlar";
import Ichimliklar from "./Ichimliklar";
import Souslar from "./Souslar";
import { Anchor } from "antd";

const MainAPI = () => {
  return (
    <div>
      <div
        style={{
          padding: "20px",
        }}
      >
        <Anchor
          direction="horizontal"
          items={[
            {
              key: "part-1",
              href: "#part-1",
              title: "Longer1+1=3 Aksiyasi",
            },
            {
              key: "part-2",
              href: "#part-2",
              title: "Yangilik 📣",
            },
            {
              key: "part-3",
              href: "#part-3",
              title: "BARAKALI Maxi BOX",
            },
            {
              key: "part-4",
              href: "#part-4",
              title: "🥪Klab-Sendvich",
            },
            {
              key: "part-5",
              href: "#part-5",
              title: "🌯Lavash",
            },
            {
              key: "part-6",
              href: "#part-6",
              title: "🌮Shaurma",
            },
            {
              key: "part-7",
              href: "#part-7",
              title: "🍔Burger",
            },
            {
              key: "part-8",
              href: "#part-8",
              title: "🍱Donar Kebab",
            },
            {
              key: "part-9",
              href: "#part-9",
              title: "🌭Hot-Dog",
            },
            {
              key: "part-10",
              href: "#part-10",
              title: "🍟Gazaklar",
            },
            {
              key: "part-11",
              href: "#part-11",
              title: "🍚Tamaddilar",
            },
            {
              key: "part-12",
              href: "#part-12",
              title: "🍰Desertlar",
            },
            {
              key: "part-13",
              href: "#part-13",
              title: "🥤Ichimliklar",
            },
            {
              key: "part-14",
              href: "#part-14",
              title: "🥫Souslar",
            },
          ]}
        />
      </div>
      <div>
        <div id="part-1">
          <MaxiBox />
        </div>
        <div id="part-2">
          <Yangilik />
        </div>
        <div id="part-3">
          <BarakaliMaxiBox />
        </div>
        <div id="part-4">
          <KlabSandwich />
        </div>
        <div id="part-5">
          <Lavash />
        </div>
        <div id="part-6">
          <Shaurma />
        </div>
        <div id="part-7">
          <Burger />
        </div>
        <div id="part-8">
          <DonarKebab />
        </div>
        <div id="part-9">
          <HotDog />
        </div>
        <div id="part-10">
          <Gazak />
        </div>
        <div id="part-11">
          <Tamaddilar />
        </div>
        <div id="part-12">
          <Desertlar />
        </div>
        <div id="part-13">
          <Ichimliklar />
        </div>
        <div id="part-14">
          <Souslar />
        </div>
      </div>
    </div>
  );
};

export default MainAPI;
