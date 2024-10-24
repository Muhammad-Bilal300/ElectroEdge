import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import ReviewUser1 from "../../../../../Assets/reviewUser1.jpg";
import ReviewUser2 from "../../../../../Assets/reviewUser2.jpg";
import { FaCheck } from "react-icons/fa";

const RatingsAndReviews = () => {
  const [rating, setRating] = useState(0);
  const reviewsContent = [
    {
      name: "Abc User",
      image: ReviewUser1,
      isVerified: true,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa quia fugit commodi cumque. Amet, earum.",
      rating: 4,
    },
    {
      name: "Abc User",
      image: ReviewUser2,
      isVerified: true,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa quia fugit commodi cumque. Amet, earum.",
      rating: 4,
    },
    {
      name: "Abc User",
      image: "",
      isVerified: true,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa quia fugit commodi cumque. Amet, earum.",
      rating: 4,
    },
    {
      name: "Abc User",
      image: ReviewUser1,
      isVerified: true,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa quia fugit commodi cumque. Amet, earum.",
      rating: 4,
    },
    {
      name: "Abc User",
      image: ReviewUser2,
      isVerified: true,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa quia fugit commodi cumque. Amet, earum.",
      rating: 4,
    },
    {
      name: "Abc User",
      image: ReviewUser2,
      isVerified: true,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa quia fugit commodi cumque. Amet, earum.",
      rating: 4,
    },
    {
      name: "Abc User",
      image: "",
      isVerified: true,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa quia fugit commodi cumque. Amet, earum.",
      rating: 4,
    },
  ];
  return (
    <div className="flex flex-col lg:flex-row gap-x-6 lg:gap-y-0 gap-y-10 py-10">
      <div className="w-[100%] lg:w-[25%] bg-primary px-8 py-28 rounded-md flex justify-center items-center flex-col">
        <div className="flex gap-x-2 items-end">
          <h1 className="text-6xl text-white font-bold">4.0</h1>
          <h6 className="text-lg text-lightGray font-semibold">/5</h6>
        </div>
        <div className="pt-6 flex justify-center items-center gap-x-2">
          {[1, 2, 3, 4].map((rating, index) => {
            return <FaStar className="text-yellow-400 text-xl" />;
          })}
        </div>
        <div className="py-1 text-white font-semibold text-sm">223 Reviews</div>
        <div className="w-full pt-8">
          <div className="flex justify-between py-1 text-sm text-white">
            <div className=" flex justify-center items-center gap-x-1">
              {[1, 2, 3, 4, 5].map((rating, index) => {
                return <FaStar className="text-md" />;
              })}
            </div>
            <div>132</div>
          </div>
          <div className="w-full rounded-full h-2 bg-gray">
            <div
              className="bg-white h-2 rounded-full"
              style={{ width: `${(132 / 223) * 100}%` }} // Calculate the width here
            ></div>
          </div>
        </div>
        <div className="w-full pt-8">
          <div className="flex justify-between py-1 text-sm text-white">
            <div className=" flex justify-center items-center gap-x-1">
              {[1, 2, 3, 4].map((rating, index) => {
                return <FaStar className="text-md" />;
              })}
            </div>
            <div>42</div>
          </div>
          <div className="w-full rounded-full h-2 bg-gray">
            <div
              className="bg-white h-2 rounded-full"
              style={{ width: `${(42 / 223) * 100}%` }} // Calculate the width here
            ></div>
          </div>
        </div>
        <div className="w-full pt-8">
          <div className="flex justify-between py-1 text-sm text-white">
            <div className=" flex justify-center items-center gap-x-1">
              {[1, 2, 3].map((rating, index) => {
                return <FaStar className="text-md" />;
              })}
            </div>
            <div>26</div>
          </div>
          <div className="w-full rounded-full h-2 bg-gray">
            <div
              className="bg-white h-2 rounded-full"
              style={{ width: `${(26 / 223) * 100}%` }} // Calculate the width here
            ></div>
          </div>
        </div>
        <div className="w-full pt-8">
          <div className="flex justify-between py-1 text-sm text-white">
            <div className="flex justify-center items-center gap-x-1">
              {[1, 2].map((rating, index) => (
                <FaStar key={index} className="text-md" />
              ))}
            </div>
            <div>15</div>
          </div>
          <div className="w-full rounded-full h-2 bg-gray">
            <div
              className="bg-white h-2 rounded-full"
              style={{ width: `${(15 / 223) * 100}%` }} // Calculate the width here
            ></div>
          </div>
        </div>

        <div className="w-full pt-8">
          <div className="flex justify-between py-1 text-sm text-white">
            <div className=" flex justify-center items-center gap-x-1">
              {[1].map((rating, index) => {
                return <FaStar className="text-md" />;
              })}
            </div>
            <div>10</div>
          </div>
          <div className="w-full rounded-full h-2 bg-gray">
            <div
              className="bg-white h-2 rounded-full"
              style={{ width: `${(10 / 223) * 100}%` }} // Calculate the width here
            ></div>
          </div>
        </div>
      </div>
      <div className="w-[100%] lg:w-[75%]">
        {/* <div className=" bg-lightGray px-6 py-4 rounded-md flex justify-between">
            <h3 className="text-gray text-[16px] font-bold">Description</h3>
            <h3 className="text-gray text-[16px] font-bold">Specification</h3>
            <h3 className="text-gray text-[16px] font-bold">Reviews (223)</h3>
          </div> */}
        <div className="text-[20px] font-bold text-black pb-3 border-b-2 border-lightGray">
          Reviews (223)
        </div>
        <div className="py-6 flex flex-col gap-y-4 h-[500px] overflow-y-auto scrollbar-hide border-b-2 border-lightGray">
          {reviewsContent.map((review, index) => {
            return (
              <div className="bg-lightGray rounded-md px-3 py-6 flex justify-between items-start gap-x-3">
                <div>
                  <div className="flex justify-start gap-x-3 items-start">
                    {review.image !== "" ? (
                      <img
                        className="h-[45px] w-[45px] rounded-full "
                        src={review.image}
                        alt=""
                      />
                    ) : (
                      <div className="h-[45px] w-[45px] bg-gray rounded-full flex justify-center items-center">
                        <FaUserAlt className="text-white text-[20px]" />
                      </div>
                    )}
                    <div className="flex flex-col py-0 m-0">
                      <h5 className="text-black font-semibold py-0 m-0">
                        {review.name}
                      </h5>
                      <div className="flex justify-start gap-x-1">
                        <div className="bg-primary p-1 rounded-full">
                          <FaCheck className="text-white text-[8px]" />
                        </div>
                        <p className="text-primary text-xs font-semibold">
                          Verified Buyer
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm text-gray pt-4 px-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laudantium, voluptatibus? Illo doloribus rerum delectus
                    velit sequi alias, nemo optio iste natus.
                  </div>
                </div>
                <div className="w-[18%] lg:w-[15%] flex items-center flex-col lg:gap-1 gap-0">
                  <h1 className="lg:text-4xl text-2xl text-primary font-bold">
                    {review.rating}.0
                  </h1>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <FaStar
                        key={i}
                        className={`lg:text-[16px] text-[14px] ${
                          i <= review.rating ? "text-primary" : "text-gray"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="py-4">
          <h2 className="text-[20px] font-bold text-black mb-3">
            Submit Your review
          </h2>
          <div className="flex justify-between lg:flex-row flex-col lg:gap-x-4 gap-y-5">
            <div className="w-[100%] lg:w-[75%]">
              <div className="border-2 border-lightGray rounded-md p-3 w-full">
                <textarea
                  className="outline-none border-none bg-transparent w-full"
                  placeholder="Type your review"
                  name=""
                  id=""
                  rows={3}
                />
              </div>
            </div>
            <div className="w-[100%] lg:w-[25%]">
              <h2 className="text-[18px] font-bold">Rating</h2>
              <div className="flex items-center gap-x-1 text-gray">
                {[1, 2, 3, 4, 5].map((i) => (
                  <FaStar
                    key={i}
                    onClick={() => {
                      setRating(i);
                    }}
                    className={`text-lg cursor-pointer ${
                      i <= rating ? "text-primary" : "text-gray"
                    }`}
                  />
                ))}
              </div>
              <button className="bg-primary text-white h-[40px] w-full mt-4 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;
