import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { PreSaleList } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const PreSalesCard = ({
  index,
  title,
  description,
  author,
  time,
  image,
  category,
  price,
  student,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-green-500 rounded-2xl sm:w-[260px] w-full"
      >
        <div className="course flex flex-col overflow-hidden bg-white dark:bg-gray-800 shadow-light dark:shadow-none dark:border dark:border-gray-700 rounded-2xl">
          <div className="relative h-42">
            <a
              className="w-full h-full block"
              href="#"
              title={title}
            >
              <img
                className="block w-full h-full  object-cover rounded-2xl"
                loading="lazy"
                src={image}
                alt=""
              />
            </a>
          </div>

          <div className="px-5 pb-3.5 pt-2.5 flex-grow">
            <a
              href="#"
              className="inline-flex items-center justify-center text-xs text-sky-500 dark:text-yellow-400 bg-sky-500/10 dark:bg-yellow-400/10 py-1 px-1.5 mb-2.5 rounded"
            >
              {category}{" "}
            </a>

            <h4 className="max-h-12 line-clamp-2 text-zinc-700 dark:text-white mb-2.5">
              <a href="https://sabzlearn.ir/course/telegram-bot-php/">
                {title}
              </a>
            </h4>
            <p className="text-sm h-10 overflow-clip text-slate-500 dark:text-slate-400 ">
             {description}
            </p>
          </div>

          <div className="px-5 pb-2">
            <div className="flex items-center justify-between pb-3 border-b border-b-gray-100 dark:border-b-gray-700">
              <div className="flex gap-2.5 flex-wrap text-slate-500 dark:text-slate-400 text-xs">
                <div className="flex items-center gap-x-1 hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                    />
                  </svg>

                  <a href="https://sabzlearn.ir/teacher/moein123">
                   {author}
                  </a>
                </div>
                <div className="flex items-center gap-x-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>

                  <span>{time}</span>
                </div>
              </div>
              <div className="flex items-center gap-x-1 text-amber-400 text-xs">
                <span className="leading-[1px]">5.0</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div className="flex items-end justify-between mt-1.5">
              <span className="flex items-center gap-x-1.5 text-zinc-700 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                  />
                </svg>
                {student}{" "}
              </span>
              <div className="flex flex-col items-start">
                <span className="course__price font-danaMedium  text-green-600 space-x-1.5 text-base">
                  {price}{" "}
                <span className="text-xs text-green-600">تومان</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const PreSales = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          در پیش فروش ارزان تر بخرید
        </p>
        <h2 className={`${styles.sectionHeadText}`}>دوره های پیش فروش</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد کتابهای زیادی در شصت و سه
          درصد گذشته حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {PreSaleList.map((project, index) => (
          <PreSalesCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(PreSales, "");
