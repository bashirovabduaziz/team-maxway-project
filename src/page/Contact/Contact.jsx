import React from 'react'
import { FaTelegramPlane } from "react-icons/fa";
import qrcode from "../../../public/assets/about/qrcode_maxway.uz.png"

const Contact = () => {
  return (
    <div className="mb-[10px]">
      <div className="about__container mx-auto px-4 flex flex-col justify-center">
        <h1 className=" font-bold text-[35px] py-[25px]">Bog'lanish</h1>
        <div className="py-[30px] px-[25px] bg-[#96B1C2] w-[20vw] h-[40vh] rounded-xl">
          <img src={qrcode} alt="" className='w-[7vw] h-[16vh] rounded-xl'/>
          <h4 className="font-semibold text-[20px] text-white mb-[10px] mt-[10px]">
            Telegramda sharh qoldiring yoki savol bering
          </h4>
          <div className="flex items-center text-white">
            <FaTelegramPlane className="text-white" />
            <a href="https://t.me/maxwaymasterfood_bot" className='text-[20px]'>
              @maxwaymasterfood_bot
            </a>
          </div>
        </div>
        <h3 className='mt-[30px] font-bold text-[20px] mb-[10px]'>Yagona aloqa markazi</h3>
        <p className='text-[18px]'>+998712005400</p>
      </div>
    </div>
  );
}

export default Contact