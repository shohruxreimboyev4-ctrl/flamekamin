import React from "react";
import Rectangle from "../assets/img/Rectangle.png";

const About_Us = () => {
  return (
    <section className="py-12 bg-white text-gray-900">
      <div className="w-[95%] max-w-7xl mx-auto px-4">
        <div className="hidden lg:flex items-center gap-8">
          <div className="flex-1 max-w-lg">
            <div className=" text-6xl font-bold mb-6">Немного о нас</div>
            <p className="text-lg leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
              integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
              nec senectus duis nibh. In faucibus adipiscing tellus enim,
              consequat integer accumsan. Ultrices ipsum nulla consequat
              malesuada enim mollis est.
            </p>
            <div className="text-orange-500 text-6xl font-bold mt-12">“</div>
            <p className="text-lg leading-relaxed mt-4 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
              integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
              nec senectus duis nibh. In faucibus adipiscing tellus enim,
              consequat integer accumsan. Ultrices ipsum nulla consequat
              malesuada enim mollis est. Venenatis, sagittis, amet ornare donec
              purus suscipit nam sodales. Varius sit amet nullam dictumst massa
              consequat odio faucibus.
            </p>
            <p className="text-sm text-gray-500 italic mt-4">
              Никита Данилов, Руководитель компании
            </p>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src={Rectangle}
                alt="Factory aerial view"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border-4 border-white border-opacity-70 rounded-lg"></div>
              <div className="absolute inset-0 border-4 border-white border-opacity-70 rounded-lg transform translate-x-2 translate-y-2 -z-10"></div>
            </div>
          </div>
        </div>

        <div className="lg:hidden flex flex-col gap-6">
          <div className="w-full h-[250px] rounded-lg overflow-hidden shadow-lg relative">
            <img
              src={Rectangle}
              alt="Factory aerial view"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-4 border-white border-opacity-70 rounded-lg"></div>
            <div className="absolute inset-0 border-4 border-white border-opacity-70 rounded-lg transform translate-x-2 translate-y-2 -z-10"></div>
          </div>

          <h2 className="text-xl font-bold text-center">Немного о нас</h2>

          <p className="text-sm leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
            integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
            nec senectus duis nibh. In faucibus adipiscing tellus enim,
            consequat integer accumsan. Ultrices ipsum nulla consequat malesuada
            enim mollis est.
          </p>

          <div className="bg-[#faf9f5] p-4 rounded-lg">
            <div className="text-orange-500 text-4xl font-bold mb-4">“</div>
            <p className="text-sm leading-relaxed text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. At lacus
              integer nunc, ornare ipsum lorem nulla est. Augue eros adipiscing
              nec senectus duis nibh. In faucibus adipiscing tellus enim,
              consequat integer accumsan. Ultrices ipsum nulla consequat
              malesuada enim mollis est. Venenatis, sagittis, amet ornare donec
              purus suscipit nam sodales. Varius sit amet nullam dictumst massa
              consequat odio faucibus.
            </p>
            <p className="text-xs text-gray-500 italic mt-3">
              Никита Данилов, Руководитель компании
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Us;
