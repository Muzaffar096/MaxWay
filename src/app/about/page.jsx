import Image from "next/image";
import React from "react";

import about from "../../../public/about.png";

const About = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold">Kompaniya Haqida</h2>
      <div className=" flex justify-center">
        <Image
          className=" rounded-2xl my-8"
          width={1200}
          src={about}
          alt="About"
        />
      </div>
      <p className=" max-w-[800px] text-lg text-slate-700 mb-10">
        Kompaniya 2005 yilning fevral oyida Toshkent shahrida tashkil etilgan.
        Hozirda kompaniyaning Toshkent shahrida 18 ta filiali mavjud. <br /> Taomnoma
        asosan klаb sendvichlari, hot-doglar, burgerlar, lavashlar va
        donarlardan iborat. Bizning ustuvor yo'nalishlarimiz - ingredientlarning
        yangiligi va sifati, qo'shimchalarning xilma-xilligi, arzon narxlar va
        mehmonlarning takliflariga e'tibor. <br /> Har kuni turli xil odamlar
        MaxWay-dan buyurtma berishadi. Biz esa tashrif buyuruvchilar sonini ham,
        filiallar sonini ham oshirishga harakat qilmoqdamiz. Har bir
        tayyorlangan taom bilan biz o'ziga xos retseptlarning tafsilotlarini
        aniqlaymiz va sizning sevimli brendingiz bo'lishda davom etish uchun
        narx va sifatning mukammal muvozanatini qidiramiz. <br /> Agar siz kutilmaganda
        biz tomondan yomon xizmat yoki past sifatli pishirilgan taomga duch
        kelsangiz, bizga @maxwaymasterfood_bot manziliga murojaat qiling. Biz
        ijobiy va salbiy fikr-mulohazalarni mamnuniyat bilan qabul qilamiz.
        Mehmonning shikoyati - bu sovg'a, bu tufayli bizda o'sish uchun maqsad
        bo’ladi.
      </p>
    </div>
  );
};

export default About;
