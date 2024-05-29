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
import Gazaklar from "./Gazaklar";
import Tamaddilar from "./Tamaddilar";
import Desertlar from "./Desertlar";
import Ichimliklar from "./Ichimliklar";
import Souslar from "./Souslar";

const MainAPI = () => {
  return (
    <div>
      <div className="sticky top-0 z-30 h-20 bg-white shadow-md">
        <DataHeader />
      </div>
      <div className="mx-auto mt-5 max-w-[1248px]">
        <div id="part-1" className="section">
          <MaxiBox />
        </div>
        <div id="part-2" className="section">
          <Yangilik />
        </div>
        <div id="part-3" className="section">
          <BarakaliMaxiBox />
        </div>
        <div id="part-4" className="section">
          <KlabSandwich />
        </div>
        <div id="part-5" className="section">
          <Lavash />
        </div>
        <div id="part-6" className="section">
          <Shaurma />
        </div>
        <div id="part-7" className="section">
          <Burger />
        </div>
        <div id="part-8" className="section">
          <DonarKebab />
        </div>
        <div id="part-9" className="section">
          <HotDog />
        </div>
        <div id="part-10" className="section">
          <Gazaklar />
        </div>
        <div id="part-11" className="section">
          <Tamaddilar />
        </div>
        <div id="part-12" className="section">
          <Desertlar />
        </div>
        <div id="part-13" className="section">
          <Ichimliklar />
        </div>
        <div id="part-14" className="section">
          <Souslar />
        </div>
      </div>
    </div>
  );
};

export default MainAPI;
