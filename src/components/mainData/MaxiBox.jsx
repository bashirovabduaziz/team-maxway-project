import React, { useState, useEffect } from "react";
import { LONGER } from "../../data/APIData";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

const MaxiBox = () => {
  const [maxi, setMaxi] = useState([]);
  const [quantity, setQuantity] = useState(0);

  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setMaxi(LONGER);
      // setLoading(false);
    }, 100);
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="pb-12">
      <h1 className="mb-5 text-[28px] font-semibold leading-none">
        Longer 1+1=3 Aksiyasi
      </h1>
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
              {quantity === 0 ? (
                <button
                  onClick={() => {
                    setQuantity(1);
                  }}
                  className="rounded-full bg-[#51267D] px-6 py-[10px] text-[14px] text-white hover:bg-[#593085]"
                >
                  Qo'shish
                </button>
              ) : (
                <div className="flex h-[40px] w-[107px] items-center justify-around rounded-full border border-[#51267D]">
                  <button
                    onClick={() => {
                      setQuantity((quantity) => quantity - 1);
                    }}
                  >
                    <RemoveIcon />
                  </button>
                  <span className="text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => {
                      setQuantity((prev) => prev + 1);
                    }}
                  >
                    <AddIcon />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MaxiBox;
