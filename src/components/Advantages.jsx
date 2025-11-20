import React from "react";
import {
  FaFileAlt,
  FaWrench,
  FaCog,
  FaHardHat,
  FaShieldAlt,
} from "react-icons/fa";

const Advantages = () => {
  const features = [
    {
      icon: <FaFileAlt className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
      text: "Изготовливаем конструкции по вашему дизайн-проекту",
    },
    {
      icon: <FaWrench className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
      text: "Изготовили более 2 400 деревянных конструкций",
    },
    {
      icon: <FaCog className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
      text: "Собственное производство площадью 6 000 м²",
    },
    {
      icon: <FaHardHat className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
      text: "Производим изделия из дерева с 1998 года",
    },
    {
      icon: <FaShieldAlt className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />,
      text: "Гарантия от 3х лет на все конструкции",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="w-[95%] max-w-7xl mx-auto">
        <div className="grid grid-cols-1 min-[300px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-orange-500 flex-shrink-0">
                {feature.icon}
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
