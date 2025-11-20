import React from "react";
import Banner from "../assets/img/Banner.png";

const Showcase = () => {
  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-20">
      <div className="relative w-[95%] mx-auto flex flex-col sm:flex-row items-center gap-8">

        <div className="relative w-full flex justify-center">
          <img
            src={Banner}
            alt="Беседка"
            className="w-full max-w-[1551px] h-[376px] rounded-lg shadow-xl object-cover"
          />

          <div className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-full sm:max-w-lg">
              Беседки под ключ <br /> за 7 дней
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-4 sm:mt-6">
              <div className="bg-orange-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base">
                Выгода до 24%
              </div>
              <div className="bg-orange-500 text-white px-3 py-1 sm:px-4 sm:py-2 rounded text-sm sm:text-base">
                Сборка за 1 день
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
