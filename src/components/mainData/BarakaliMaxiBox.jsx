import React, { useState, useEffect } from "react";
import { BARAKALIMAXIBOX } from "../../data/APIData";

const BarakaliMaxiBox = () => {
  const [maxi, setMaxi] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMaxi(BARAKALIMAXIBOX);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pb-12">
      <h1 className="mb-5 text-[28px] font-semibold leading-none">
        🍟🍔🥤BARAKALI Maxi BOX
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {" "}
        {maxi.map((food) => (
          <div className="w-[288px] rounded-2xl shadow-md" key={food.id}>
            <img
              className="h-[220px] w-[288px] cursor-pointer rounded-t-2xl object-cover"
              src={food.image}
              alt={food.name}
            />
            <div className="px-4 pb-4 pt-3">
              <p className="mb-[7px] cursor-pointer text-[18px] font-semibold">
                {food.name}
              </p>
              <p className="mb-3 cursor-pointer text-[14px] font-normal text-[#48535B]">
                {food.desc.slice(0, 54)}...
              </p>
              <div className="flex items-center justify-between">
                <p className="text-[18px] font-semibold">
                  {food.price}{" "}
                  <span className="text-[14px] font-normal text-[#48535B]">
                    so'm
                  </span>
                </p>
                <button className="rounded-full bg-[#51267D] px-6 py-[10px] text-[14px] text-white hover:bg-[#593085]">
                  Qo'shish
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarakaliMaxiBox;
