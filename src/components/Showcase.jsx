import React from "react";
import Banner from "../assets/img/Banner.png"

const Showcase = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url()",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-[95%] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex flex-col sm:flex-row items-center gap-8">
        {/* Text Block */}
        <div className="text-white space-y-4 max-w-lg">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Беседки под ключ <br /> за 7 дней
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <div className="bg-orange-500 text-white px-4 py-2 rounded">
              Выгода до 24%
            </div>
            <div className="bg-orange-500 text-white px-4 py-2 rounded">
              Сборка за 1 день
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <img
            src={Banner}
            alt="Беседка"
            className="w-full sm:w-[400px] h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
        <div className="w-3 h-3 bg-white rounded-full opacity-50"></div>
      </div>
    </section>
  );
};

export default Showcase;
