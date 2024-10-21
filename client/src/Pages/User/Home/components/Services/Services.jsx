import React from "react";
import { FaTruck } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import { MdOutlinePayment } from "react-icons/md";

const Services = () => {
  return (
    <div className="w-[90%] lg:w-[80%] flex justify-between flex-wrap gap-y-4 mx-auto pt-14">
      <ServiceCard icon={FaTruck} title="Free Delivery" subTitle="From $40" />
      <ServiceCard icon={FaStar} title="Best Quality" subTitle="Brand" />
      <ServiceCard
        icon={FaClockRotateLeft}
        title="1 month"
        subTitle="For Free Return"
      />
      <ServiceCard icon={IoChatbubbles} title="Feedback" subTitle="Payment" />
      <ServiceCard
        icon={MdOutlinePayment}
        title="99% Real Data"
        subTitle="Secure"
      />
    </div>
  );
};

export default Services;

const ServiceCard = ({ icon: Icon, title, subTitle }) => {
  return (
    <div className="w-[100%] lg:w-[18%] shadow-md shadow-gray flex items-center flex-col py-6 rounded-lg px-10 border-[1px] border-lightGray cursor-pointer hover:bg-lightGray">
      <Icon className="text-primary text-[24px] mb-2" />{" "}
      {/* Render the icon here */}
      <div className="text-black font-bold text-[16px]">{title}</div>
      <div className="text-gray text-[12px]">{subTitle}</div>
    </div>
  );
};
