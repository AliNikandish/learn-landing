import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { OfferList } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const OffersCard = ({ Offer }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#000",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={Offer.date}
      iconStyle={{ background: Offer.iconBg }}
      icon={
        <div  className='flex justify-center items-center w-full h-full'>
          <img
            src={Offer.icon}
            alt={Offer.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div dir="rtl">
        <h3 className='text-white text-[24px] font-bold'>{Offer.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {Offer.company_name}
        </p>
      </div>

      <ul dir="rtl" className='mt-5 list-disc ml-5 space-y-2'>
        {Offer.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Offers = () => {
  return (
    <div dir="ltr">
      <motion.div variants={textVariant()}>
        <p className={`text-slate-700  text-center`}>
        دوره های پیشنهادی ما برا متخصص شدن
        </p>
        <h2 className={`text-black text-6xl text-center mt-5 `}>
        دوره های پیشنهادی ما
        </h2>
      </motion.div>

      <div  className='mt-20 flex flex-col'>
        <VerticalTimeline  className="">
          {OfferList.map((Offer, index) => (
            <OffersCard
              key={`experience-${index}`}
              Offer={Offer}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Offers, "work");
