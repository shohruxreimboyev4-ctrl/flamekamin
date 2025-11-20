import React, { useState } from "react";
import {
  FaRulerCombined,
  FaVectorSquare,
  FaUsers,
  FaShieldAlt,
} from "react-icons/fa";
import image from "../assets/img/image.png";

const Promotional_Models = () => {
  const [activeTab, setActiveTab] = useState("Беседки");

  const tabs = ["Беседки", "Бани", "Площадки", "Дома", "Перголы", "Бренды"];

  const products = Array(10)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      article: "0000001",
      name: "Название товара длинное в две строки наверное",
      image: image,
      dimensions: "12.3 x 14.6 x 4.3 м.",
      area: "33 м²",
      capacity: "15 чел.",
      warranty: "10 лет",
      oldPrice: "6 137 500 ₽",
      discount: "-25%",
      price: "5 023 900 ₽",
    }));

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-[95%] max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 sm:mb-8 md:mb-10 gap-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Акционные модели
          </h2>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-600 transition-colors text-sm sm:text-base"
          >
            Все товары &gt;
          </a>
        </div>

        <div className="flex gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 sm:px-6 py-2 sm:py-3 whitespace-nowrap text-sm sm:text-base font-medium transition-all ${
                activeTab === tab
                  ? "text-black border-b-2 border-orange-500"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative bg-gray-100 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-3 sm:p-4">
                <div className="flex justify-between items-center mb-2 text-xs sm:text-sm text-gray-400">
                  <span>Артикул:</span>
                  <span>{product.article}</span>
                </div>

                <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">
                  {product.name}
                </h3>

                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-xs sm:text-sm">
                  <div className="flex justify-between items-start">
                    <span className="text-gray-600 flex items-center gap-1">
                      <FaRulerCombined className="text-orange-500" /> Размеры:
                    </span>
                    <span className="text-right font-medium text-[10px] sm:text-xs">
                      {product.dimensions}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 flex items-center gap-1">
                      <FaVectorSquare className="text-orange-500" /> Площадь:
                    </span>
                    <span className="font-medium">{product.area}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 flex items-center gap-1">
                      <FaUsers className="text-orange-500" /> Вместимость:
                    </span>
                    <span className="font-medium">{product.capacity}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 flex items-center gap-1">
                      <FaShieldAlt className="text-orange-500" /> Гарантия:
                    </span>
                    <span className="font-medium">{product.warranty}</span>
                  </div>
                </div>

                <div className="mb-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs sm:text-sm text-gray-400 line-through">
                      {product.oldPrice}
                    </span>
                    <span className="bg-yellow-100 text-orange-500 text-xs px-1.5 py-0.5 rounded font-semibold">
                      {product.discount}
                    </span>
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl font-bold text-red-500">
                    {product.price}
                  </div>
                </div>

                <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 sm:py-3 rounded-lg transition-colors text-sm sm:text-base">
                  Купить
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotional_Models;
