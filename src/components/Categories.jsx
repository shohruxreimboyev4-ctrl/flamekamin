import React from "react";
import Беседка from "../assets/img/Беседка.png";
import Бани from "../assets/img/Бани.png";
import Пергола from "../assets/img/Пергола.png";
import Бренды from "../assets/img/Бренды.png";
import Горка from "../assets/img/Горка.png";
import Дома from "../assets/img/Дома.png";

const Categories = () => {
  const categories = [
    {
      id: 1,
      title: "Беседки",
      image: Беседка,
      subcategories: [
        "Подкатегория 1",
        "Подкатегория 2",
        "Подкатегория 3",
        "Подкатегория 4",
        "Подкатегория 5",
        "Подкатегория 6",
      ],
    },
    {
      id: 2,
      title: "Бани",
      image: Бани,
      subcategories: ["Подкатегория 1", "Подкатегория 2"],
    },
    {
      id: 3,
      title: "Перголы",
      image: Пергола,
      subcategories: ["Подкатегория 1", "Подкатегория 2"],
    },
    {
      id: 4,
      title: "Бренды",
      image: Бренды,
      subcategories: ["Подкатегория 1", "Подкатегория 2"],
    },
    {
      id: 5,
      title: "Детские площадки",
      image: Горка,
      subcategories: [
        "Подкатегория 1",
        "Подкатегория 2",
        "Подкатегория 3",
        "Подкатегория 4",
        "Подкатегория 5",
      ],
    },
    {
      id: 6,
      title: "Дома",
      image: Дома,
      subcategories: [
        "Подкатегория 1",
        "Подкатегория 2",
        "Подкатегория 3",
        "Подкатегория 4",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-[95%] max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 md:mb-16">
          Категории
        </h2>

        {/* Desktop версия */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-[#F5F1E8] rounded-2xl p-6 lg:p-8 flex flex-col justify-between min-h-[500px]">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-6">
                {categories[0].title}
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-3 mb-6">
                {categories[0].subcategories.map((sub, idx) => (
                  <p
                    key={idx}
                    className="text-gray-700 text-sm lg:text-base hover:text-orange-500 cursor-pointer transition-colors"
                  >
                    {sub}
                  </p>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-auto">
              <img
                src={categories[0].image}
                alt={categories[0].title}
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6 lg:gap-8">
            {/* Малые карточки */}
            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {[categories[1], categories[4]].map((cat) => (
                <div
                  key={cat.id}
                  className="bg-[#F5F1E8] rounded-2xl p-4 lg:p-6 flex flex-col"
                >
                  <h3 className="text-lg lg:text-xl font-bold mb-3">
                    {cat.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {cat.subcategories.map((sub, idx) => (
                      <p
                        key={idx}
                        className="text-gray-700 text-xs lg:text-sm hover:text-orange-500 cursor-pointer transition-colors"
                      >
                        {sub}
                      </p>
                    ))}
                  </div>
                  <div className="mt-auto flex justify-center">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full max-w-[200px] h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {[categories[2], categories[5]].map((cat) => (
                <div
                  key={cat.id}
                  className="bg-[#F5F1E8] rounded-2xl p-4 lg:p-6 flex flex-col"
                >
                  <h3 className="text-lg lg:text-xl font-bold mb-3">
                    {cat.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    {cat.subcategories.map((sub, idx) => (
                      <p
                        key={idx}
                        className="text-gray-700 text-xs lg:text-sm hover:text-orange-500 cursor-pointer transition-colors"
                      >
                        {sub}
                      </p>
                    ))}
                  </div>
                  <div className="mt-auto flex justify-center">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full max-w-[200px] h-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#F5F1E8] rounded-2xl p-4 lg:p-6 flex flex-col">
              <h3 className="text-lg lg:text-xl font-bold mb-3">
                {categories[3].title}
              </h3>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-4">
                {categories[3].subcategories.map((sub, idx) => (
                  <p
                    key={idx}
                    className="text-gray-700 text-xs lg:text-sm hover:text-orange-500 cursor-pointer transition-colors"
                  >
                    {sub}
                  </p>
                ))}
              </div>
              <div className="mt-auto flex justify-center">
                <img
                  src={categories[3].image}
                  alt={categories[3].title}
                  className="w-full max-w-[120px] h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile версия */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:hidden">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-[#F5F1E8] rounded-xl p-3 sm:p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow cursor-pointer"
            >
              <h3 className="text-sm sm:text-base font-bold mb-3 sm:mb-4">
                {category.title}
              </h3>
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
