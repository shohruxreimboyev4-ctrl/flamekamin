import React from "react";
import { FaStar } from "react-icons/fa";

const Customer_Reviews = () => {
  const reviews = [
    {
      name: "Алексей С.А.",
      date: "28 июня 2021",
      rating: 4.8,
      text: "«Цена хорошая, все соответствует ожиданиям. Подбирала перголу для своего участка. Также мне хотелось бы отметить вежливость работников компании, все подробно рассказали. Я считаю этот магазин отличным. И наверняка буду покупать снова или советовать коллегам.»",
    },
    {
      name: "Алексей С.А.",
      date: "28 июня 2021",
      rating: 4.8,
      text: "«Цена хорошая, все соответствует ожиданиям. Подбирала перголу для своего участка. Также мне хотелось бы отметить вежливость работников компании, все подробно рассказали. Я считаю этот магазин отличным. И наверняка буду покупать снова или советовать коллегам.»",
    },
    {
      name: "Алексей С.А.",
      date: "28 июня 2021",
      rating: 4.8,
      text: "«Цена хорошая, все соответствует ожиданиям. Подбирала перголу для своего участка. Также мне хотелось бы отметить вежливость работников компании, все подробно рассказали. Я считаю этот магазин отличным. И наверняка буду покупать снова или советовать коллегам.»",
    },
  ];

  return (
    <section className="py-12 bg-[#faf9f5]">
      <div className="w-[95%] max-w-7xl mx-auto relative">
        {/* Slider Container */}
        <div className="flex justify-center relative">
          {/* Left Arrow */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Cards Slider */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide justify-center">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full sm:w-[350px] p-6 bg-white border border-gray-200 rounded-lg shadow-sm snap-center"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">{review.date}</p>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(review.rating)
                              ? "fill-current"
                              : "stroke-current fill-none"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Rating: ({review.rating})
                    </p>
                  </div>
                </div>

                <hr className="border-t border-gray-200 my-4" />

                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  {review.text}
                </p>

                <button className="text-orange-500 text-sm font-medium hover:underline">
                  Read More
                </button>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 transition z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* View All Button */}
        <div className="mt-8 text-center">
          <button className="px-8 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition">
            View All Reviews
          </button>
        </div>
      </div>
    </section>
  );
};

export default Customer_Reviews;
