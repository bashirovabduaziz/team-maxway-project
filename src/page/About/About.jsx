import Img1  from "../../../public/assets/about/about.webp" 

const About = () => {
  return (
    <div className="mb-[30px]">
      <div className="about__container mx-auto px-4 flex flex-col justify-center">
        <h1 className=' font-bold text-[35px] py-[25px]'>Kompaniya haqida</h1>
        <img src={Img1} alt="maxway img"  className="w-[80vw] h-[45vh] rounded-xl mb-[20px]"/>
        <div className="pt-[10px] w-[50vw] flex flex-col justify-center items-center">
          <p className="font-normal text-[17px]">
            Birinchi Max Way muassasasi 2005 yilda ochildi. Dastlabki bosqichda
            eng yuqori o'rinlarda burgerlar, donarlar va lavashlar edi. Bugungi
            kunda u Toshkent shahrida 20 ta filialiga ega taniqli va jadal
            rivojlanayotgan brenddir. Eng ko'p sotilgan taomlar - burgerlar,
            longerlar, sendvichlar, lavashlar va donar kaboblar.
          </p>
          <p className="font-normal text-[17px]">
            Max Way mashhur bo'lgan taom - bu klab sendvichi. Tovuq shnitsel
            maxsus retsept bo'yicha marinadlanadi va ajoyib ta'mga ega bo'ladi.
            Aynan shuning uchun ko'plab mehmonlar menyudagi shu elementni afzal
            ko'radi.
          </p>
          <p className="font-normal text-[17px]">
            Max Way faqat halol mahsulotlardan foydalanadi. Asosiy menyuga
            qo'shimcha ravishda kam yog'li souslar qatorini ham taklif etadi.
            Tarmoq oshpazlari foydalanayotgan mahsulotlar sifatiga alohida
            e’tibor qaratadi. Max Way'da mahsulotlar juda yangi va ISO
            standartlariga muvofiq saqlanadi. Taomlar nafaqat mazali, balki oson
            hazm bo'ladigan va tez ovqatlanish uchun ham, to'liq ovqatlanish
            uchun ham mos keladi. Max Way filiallarining har qandayida osoyishta
            va qulay muhit hukm suradi va tarmoqning do'stona jamoasi
            uzilishlarsiz va muammosiz ishlaydi. Kun davomida siz tarmoq
            restoranlarida turli xil mehmonlarni uchratishingiz mumkin: maktab
            o'quvchilari, talabalar va ishdan keyin to'yimli ovqatlanishni
            xohlaydigan biznesmenlar.
          </p>
          <p className="font-normal text-[17px]">
            Max Way - bu bolali ota-onalar ham tez-tez tashrif buyuradigan joy
            va muassasa oilaviy tez xizmat ko'rsatish restoraniga aylandi. Har
            kimga individual yondashuv, xilma-xil va mazali menyu, malakali va
            ayni paytda qulay tartib, shuningdek, Max Way'dagi ideal tozalik -
            bular mehmonlarni restoranga qayta-qayta kelishga undaydigan asosiy
            belgilardir. Natijada, katta Max Way oilasining muvofiqlashtirilgan
            ishi 2021 yilda nufuzli 'Yil brendi' mukofotiga sazovor bo'ldi.
          </p>
          <p className="font-normal text-[17px]">
            Tarmoqda yetkazib berish guruhi mavjud. Telefon orqali yoki Telegram
            boti orqali buyurtma berishingiz mumkin. Maksimal yetkazib berish
            muddati - 45 daqiqa. Barcha filiallar qulay joylarda joylashgan. Max
            Way shuningdek, turli xil aksiyalar, bonuslar va chegirmalarni
            o'tkazadi va menyuni muntazam ravishda yangilab boradi. O'rtacha
            hisob 30 dan 60 ming so'mgacha o'zgarib turadi. To'lov mijoz uchun
            qulay bo'lgan har qanday usulda amalga oshirilishi mumkin.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About