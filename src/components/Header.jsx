import React from "react";
import {
  FaMapMarkerAlt,
  FaChevronDown,
  FaRegClock,
  FaEnvelope,
  FaPhone,
  FaBars,
  FaCheck,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full">
      <div className="bg-[#2A120A] text-white text-sm py-2">
        <div className="max-w-[95%] mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>Ваш город: Константинополь</span>
              <FaChevronDown className="text-yellow-400 text-xs" />
            </div>

            <div className="flex items-center gap-1 cursor-pointer hover:text-yellow-400">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>Наш офис: Москва, ул. Новокосимская д.7</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <a href="#" className="hover:text-yellow-400 cursor-pointer">
              Статьи
            </a>
            <a href="#" className="hover:text-yellow-400 cursor-pointer">
              Оплата
            </a>
            <a href="#" className="hover:text-yellow-400 cursor-pointer">
              Гарантия
            </a>
            <a href="#" className="hover:text-yellow-400 cursor-pointer">
              Дилерам
            </a>
            <a href="#" className="hover:text-yellow-400 cursor-pointer">
              Вакансии
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#FAF8F2] py-5">
        <div className="max-w-[95%] mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-6 mb-4">
            <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer">
              <div className="flex gap-2">
                <div className="w-6 h-6 rounded bg-orange-500"></div>
                <div className="w-6 h-6 rounded bg-[#2A120A]"></div>
                <div className="w-6 h-6 rounded bg-yellow-400"></div>
              </div>
              <span className="text-xs whitespace-nowrap">
                Логотип вашего магазина
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2 whitespace-nowrap cursor-pointer hover:text-yellow-600">
                <FaCheck className="text-yellow-500 flex-shrink-0" /> Лучшие
                цены
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap cursor-pointer hover:text-yellow-600">
                <FaCheck className="text-yellow-500 flex-shrink-0" /> Бесплатная
                доставка
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap cursor-pointer hover:text-yellow-600">
                <FaCheck className="text-yellow-500 flex-shrink-0" /> Гарантия
                от 3х лет
              </div>
              <div className="flex items-center gap-2 whitespace-nowrap cursor-pointer hover:text-yellow-600">
                <FaCheck className="text-yellow-500 flex-shrink-0" /> Более 1
                000 товаров
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-full lg:flex-1 relative">
              <input
                type="text"
                placeholder="Поиск по каталогу..."
                className="w-full border border-gray-300 py-2 px-4 rounded-l-md focus:outline-none"
              />
              <button className="absolute right-0 top-0 bottom-0 bg-yellow-400 hover:bg-yellow-500 px-6 rounded-r-md font-medium cursor-pointer">
                Найти
              </button>
            </div>

            <div className="hidden xl:flex items-center gap-6 text-sm flex-shrink-0">
              <div className="flex items-center gap-2 cursor-pointer">
                <FaRegClock className="text-yellow-500" />
                <span className="whitespace-nowrap">
                  Ежедневно с 9:00 до 21:00
                </span>
              </div>

              <div className="text-base font-bold cursor-pointer">
                <div>8 (800) 800-00-00</div>
                <div>8 (495) 700-00-00</div>
              </div>

              <div className="flex items-center gap-2 cursor-pointer">
                <FaEnvelope className="text-yellow-500" />
                <span className="whitespace-nowrap">youremail@mailbox.ru</span>
              </div>

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded whitespace-nowrap cursor-pointer">
                Заказать звонок
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-3 border-t border-gray-200">
        <div className="max-w-[95%] mx-auto flex flex-col sm:flex-row items-center gap-6">
          <button className="flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 px-5 py-2 rounded text-black font-medium w-full sm:w-auto cursor-pointer">
            <FaBars className="text-lg" />
            Каталог товаров
          </button>

          <nav className="flex flex-wrap justify-center sm:justify-start gap-6 text-sm w-full">
            <a className="hover:text-yellow-500 cursor-pointer" href="#">
              О компании
            </a>
            <a className="hover:text-yellow-500 cursor-pointer" href="#">
              Отзывы
            </a>
            <a className="hover:text-yellow-500 cursor-pointer" href="#">
              Наши работы
            </a>
            <a className="hover:text-yellow-500 cursor-pointer" href="#">
              Доставка
            </a>
            <a className="hover:text-yellow-500 cursor-pointer" href="#">
              Контакты
            </a>
          </nav>
        </div>
      </div>

      <div className="sm:hidden bg-[#2A120A] text-white py-3 px-4 flex items-center justify-between">
        <FaBars className="text-xl cursor-pointer" />
        <input
          type="text"
          placeholder="Поиск..."
          className="w-28 px-2 py-1 text-sm text-black rounded"
        />
        <FaPhone className="text-xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;
