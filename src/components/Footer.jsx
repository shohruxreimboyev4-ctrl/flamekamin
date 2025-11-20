import React from "react";
import { FaInstagram, FaWhatsapp, FaTelegramPlane } from "react-icons/fa";
import VISA from "../assets/svg/VISA.svg";
import MASTERCARD from "../assets/svg/MASTERCARD.svg";
import МИР from "../assets/svg/МИР.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1E1E1E] text-white py-12">
      <div className="w-[95%] mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-10 pb-10 border-b border-gray-700">
          <div className="space-y-4 max-w-[250px]">
            <div className="flex gap-3">
              <div className="w-6 h-6 bg-orange-500 rounded"></div>
              <div className="w-6 h-6 bg-white rounded"></div>
              <div className="w-6 h-6 bg-yellow-400 rounded"></div>
            </div>
            <p className="text-sm">Логотип вашего магазина</p>

            <div className="pt-4">
              <p className="font-medium text-lg">Наш адрес:</p>
              <p className="text-sm text-gray-300">
                Москва, ул. Новокосимская д.7
              </p>
            </div>
          </div>

          <div className="max-w-[260px] space-y-2">
            <p className="font-medium text-lg">График работы:</p>
            <p className="text-sm">
              Ежедневно с <span className="text-orange-500">9:00</span> до{" "}
              <span className="text-orange-500">21:00</span>
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-md mt-3">
              Заказать звонок
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 py-10 border-b border-gray-700">
          <div>
            <p className="font-semibold mb-3">Для покупателей:</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Доставка</li>
              <li>Гарантия</li>
              <li>Политика конфиденциальности</li>
              <li>Отзывы</li>
              <li>Наши работы</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3">О компании:</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>О Нас</li>
              <li>Доставка и оплата</li>
              <li>Наши работы</li>
              <li>Контакты</li>
              <li>Гарантия</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold mb-3">Категории:</p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Беседки</li>
              <li>Бани</li>
              <li>Площадки</li>
              <li>Дома</li>
              <li>Перголы</li>
              <li>Бренды</li>
            </ul>
          </div>

          <div>
            <p className="font-semibold">Для регионов</p>
            <p className="text-xs text-gray-400">(звонок бесплатный)</p>
            <p className="text-xl">
              8 (800){" "}
              <span className="text-orange-500 font-semibold">800-00-00</span>
            </p>

            <div className="pt-4 space-y-1 text-sm">
              <p>Email: youremail@mailbox.ru</p>
              <p className="pt-3">Мы в соц.сетях:</p>

              <div className="flex gap-4 text-lg cursor-pointer">
                <FaInstagram className="hover:text-orange-500 transition" />
                <FaWhatsapp className="hover:text-orange-500 transition" />
                <FaTelegramPlane className="hover:text-orange-500 transition" />
              </div>
            </div>
          </div>

          <div>
            <p className="font-semibold">Для Москвы и МО</p>
            <p className="text-xl">
              8 (495){" "}
              <span className="text-orange-500 font-semibold">700-00-00</span>
            </p>

            <div className="pt-3 text-sm space-y-1 text-gray-300">
              <p>ООО "Фаза Групп"</p>
              <p>ИНН: 7751140879</p>
              <p>ОГРН: 1187746273461</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 pt-8 text-sm">
          <div className="text-gray-400">
            <p>Публичная оферта</p>
            <p>2013–2021 - Товары для дач,</p>
            <p>деревянные конструкции под любые нужды</p>
          </div>

          <div className="flex items-center gap-5">
            <span className="text-gray-400">Принимаем к оплате:</span>
            <div className="flex gap-4 opacity-80">
              <img src={VISA} className="h-6" alt="Visa" />
              <img src={MASTERCARD} className="h-6" alt="Mastercard" />
              <img src={МИР} className="h-6" alt="Mir" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
