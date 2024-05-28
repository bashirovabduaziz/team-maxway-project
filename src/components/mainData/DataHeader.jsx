// import React from "react";

// const DataHeader = () => {
//   return (
//     <div className="py-4">
//       <div className="data-header flex h-[45px] w-full max-w-[1248px] items-center gap-2">
//         <button className="rounded-xl px-4 py-3 hover:bg-[#F1EEf4] hover:text-[#51267D]">
//           Longer 1+1=3 Aksiyasi
//         </button>
//         <button className="rounded-xl px-4 py-3 hover:bg-[#F1EEf4] hover:text-[#51267D]">
//           Yangilik
//         </button>
//         <button className="rounded-xl px-4 py-3 hover:bg-[#F1EEf4] hover:text-[#51267D]">
//           Yangilik
//         </button>
//         <button className="rounded-xl px-4 py-3 hover:bg-[#F1EEf4] hover:text-[#51267D]">
//           Yangilik
//         </button>
//         <button className="rounded-xl px-4 py-3 hover:bg-[#F1EEf4] hover:text-[#51267D]">
//           Yangilik
//         </button>
//         <button className="rounded-xl px-4 py-3 hover:bg-[#F1EEf4] hover:text-[#51267D]">
//           Yangilik
//         </button>
//         <button className="rounded-xl px-4 py-3 hover:bg-[#F1EEf4] hover:text-[#51267D]">
//           Yangilik
//         </button>
//         <button className="rounded-xl px-4 py-3 hover:bg-[#F1EEf4] hover:text-[#51267D]">
//           Yangilik
//         </button>
//         <button className="rounded-xl px-4 py-3 hover:bg-[#F1EEf4] hover:text-[#51267D]">
//           Yangilik
//         </button>
//         <button className="rounded-xl px-4 py-3 hover:bg-[#F1EEf4] hover:text-[#51267D]">
//           Yangilik
//         </button>
//         <button className="rounded-xl px-4 py-3 hover:bg-[#F1EEf4] hover:text-[#51267D]">
//           Yangilik
//         </button>
//         <button className="rounded-xl px-4 py-3 hover:bg-[#F1EEf4] hover:text-[#51267D]">
//           Yangilik
//         </button>
//       </div>
//     </div>
//   );
// };

// export default DataHeader;

import React from "react";
import { Anchor } from "antd";
const DataHeader = () => (
  <>
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
        ]}
      />
    </div>
  </>
);
export default DataHeader;
