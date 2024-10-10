import React from "react";

const BestDeals = () => {
  const dummyData = [
    {
      image: "",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      title: "Jumbo Laptop Series",
      discountedPrice: 700,
      actualPrice: 620,
      ratings: "5",
      addOns: ["Wireless Mouse", "Wireless Keyboard", "64 GB SSD", "32 GB USB"],
    },
    {
      image: "",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      title: "All in One Headphone",
      discountedPrice: 220,
      actualPrice: 280,
      ratings: "5",
      addOns: ["Echo Headset", "Wireless Keyboard", "64 GB SSD", "32 GB USB"],
    },
    {
      image: "",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      title: "Just Grab It",
      discountedPrice: 265,
      actualPrice: 340,
      ratings: "4",
      addOns: ["Wireless Mouse", "Wireless Keyboard", "64 GB SSD", "32 GB USB"],
    },
    {
      image: "",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      title: "Speakers and Much More",
      discountedPrice: 420,
      actualPrice: 350,
      ratings: "5",
      addOns: [
        "Wireless Headset",
        "Wireless Keyboard",
        "64 GB SSD",
        "32 GB USB",
      ],
    },

    {
      image: "4",
      description:
        " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

      title: "Printers Collection",
      discountedPrice: 530,
      actualPrice: 470,
      ratings: "",
      addOns: [
        "Wireless Headset",
        "Wireless Keyboard",
        "64 GB SSD",
        "32 GB USB",
      ],
    },
  ];
  return (
    <div className="w-[80%] mx-auto pt-14">
      <h3 className="font-bold text-2xl">Best Deals</h3>
      <h6 className="py-1 flex text-xs font-semibold">
        <span className="text-gray">Showing 9 of 25 results</span>
        <span className="text-primary px-2 cursor-pointer hover:underline">
          View more
        </span>
      </h6>
      <div className="py-6 flex justify-between gap-x-7 overflow-x-auto scrollbar-hide">
        {dummyData.map((item, index) => {
          return (
            <div className="min-w-[23%] border-[1px] border-lightGray rounded-md">
              <img className="h-[180px]" src={item.image} alt="" />
              <div className="p-3">
                <h2 className="text-xl font-bold truncate">{item.title}</h2>

                {/* <h2 className="text-xl font-bold truncate-text">
                  {item.title} and we are will
                </h2> */}

                {/* .truncate-text {
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                } */}
                {/* <h6 className="text-sm truncate-3-lines text-gray py-2">
                  {item.description}
                </h6> */}

                <h6 className="text-sm  text-gray py-2">
                  {item.description.slice(0, 100)}{" "}
                  {item.description.length > 100 && "..."}
                </h6>
              </div>
              <div className="p-3"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestDeals;
