import React, { useState } from "react";

const DataHeader = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (id) => {
    setSelected(id);
  };

  const links = [
    { href: "#part-1", text: "Longer 1+1=3 Aksiyasi" },
    { href: "#part-2", text: "Yangilik📣" },
    { href: "#part-3", text: "🍟🍔🥤BARAKALI Maxi BOX" },
    { href: "#part-4", text: "🥪Klab-Sendvich" },
    { href: "#part-5", text: "🌯Lavash" },
    { href: "#part-6", text: "🌮Shaurma" },
    { href: "#part-7", text: "🍔Burger" },
    { href: "#part-8", text: "🍱Donar Kebab" },
    { href: "#part-9", text: "🌭Hot-dog" },
    { href: "#part-10", text: "🍟Gazaklar" },
    { href: "#part-11", text: "🍚Tamaddilar" },
    { href: "#part-12", text: "🍰Desertlar" },
    { href: "#part-13", text: "🥤Ichimliklar" },
    { href: "#part-14", text: "🥫Souslar" },
  ];

  return (
    <div className="mx-auto max-w-[1248px] py-4">
      <div className="data-header flex w-full max-w-[1248px] items-center gap-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            className={`rounded-xl px-4 py-3 hover:bg-[#F1EEf4] hover:text-[#51267D] ${
              selected === index ? "bg-[#F1EEf4] text-[#51267D]" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default DataHeader;
