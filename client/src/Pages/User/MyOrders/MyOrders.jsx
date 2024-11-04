import React, { useState } from "react";
import Laptop from "../../../Assets/Laptop.jpg";

import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { FaSort } from "react-icons/fa6";
import { IoEye } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const navigate = useNavigate();

  const myOrders = [
    {
      orderId: "01",
      customer: "Bilal",
      items: 8,
      orderTotal: 850,
      orderDate: new Date(),
      status: "New",
      payment: "Online",
    },
    {
      orderId: "02",
      customer: "Bilal",
      items: 8,
      orderTotal: 850,
      orderDate: new Date(),
      status: "In Progress",
      payment: "Cash on Delivery",
    },
    {
      orderId: "02",
      customer: "Bilal",
      items: 8,
      orderTotal: 850,
      orderDate: new Date(),
      status: "Delivered",
      payment: "Online",
    },
    {
      orderId: "03",
      customer: "Bilal",
      items: 8,
      orderTotal: 850,
      orderDate: new Date(),
      status: "In Progress",
      payment: "Online",
    },
    {
      orderId: "04",
      customer: "Bilal",
      items: 8,
      orderTotal: 850,
      orderDate: new Date(),
      status: "Dispatched",
      payment: "Cash on Delivery",
    },
    {
      orderId: "05",
      customer: "Bilal",
      items: 8,
      orderTotal: 850,
      orderDate: new Date(),
      status: "Delivered",
      payment: "Online",
    },
    {
      orderId: "06",
      customer: "Bilal",
      items: 8,
      orderTotal: 850,
      orderDate: new Date(),
      status: "New",
      payment: "Online",
    },
  ];

  const [selectedRows, setSelectedRows] = useState(new Set());

  const toggleRowSelection = (id) => {
    const newSelectedRows = new Set(selectedRows);
    if (newSelectedRows.has(id)) {
      newSelectedRows.delete(id);
    } else {
      newSelectedRows.add(id);
    }
    setSelectedRows(newSelectedRows);
  };

  const toggleSelectAll = () => {
    const newSelectedRows = new Set();
    if (selectedRows.size < 5) {
      // Assuming 5 rows here; adjust accordingly
      for (let i = 1; i <= 5; i++) {
        // Assuming you have 5 customers
        newSelectedRows.add(`C-00${i}`);
      }
    }
    setSelectedRows(newSelectedRows);
  };
  return (
    <div className="w-full flex flex-col gap-y-6 lg:w-[80%] mx-auto">
      <h3 className="text-[22px] font-bold">My Orders</h3>

      <div className="rounded-md bg-lightGray border-2 border-lightGray">
        <div className="p-6 bg-white">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-lightGray">
                <th className="text-center py-3">
                  <input
                    type="checkbox"
                    onChange={toggleSelectAll}
                    checked={selectedRows.size === 5} // Assuming 5 rows; adjust accordingly
                  />
                </th>
                <th className="text-center">
                  Order ID
                  <FaSort className="inline-block ml-1 cursor-pointer text-[14px]" />
                </th>
                <th className="text-center">
                  Customer
                  <FaSort className="inline-block ml-1 cursor-pointer text-[14px]" />
                </th>
                <th className="text-center">
                  Items
                  <FaSort className="inline-block ml-1 cursor-pointer text-[14px]" />
                </th>
                <th className="text-center">
                  Order Total
                  <FaSort className="inline-block ml-1 cursor-pointer text-[14px]" />
                </th>
                <th className="text-center">
                  Status
                  <FaSort className="inline-block ml-1 cursor-pointer text-[14px]" />
                </th>
                <th className="text-center">
                  Payment
                  <FaSort className="inline-block ml-1 cursor-pointer text-[14px]" />
                </th>

                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myOrders.map((order, index) => (
                <tr
                  key={index}
                  // className={`hover:bg-orange-200 transition-colors ${
                  className={`${
                    index < myOrders.length - 1 && "border-b-2 border-lightGray"
                  }`}
                >
                  <td className="text-center py-3">
                    <input
                      type="checkbox"
                      checked={selectedRows.has(order.orderId)}
                      onChange={() => toggleRowSelection(order.orderId)}
                    />
                  </td>
                  <td className="text-center">{order.orderId}</td>
                  <td className="text-center">{order.customer}</td>
                  <td className="text-center">{order.items}</td>
                  <td className="text-center font-semibold">
                    ${order.orderTotal}
                  </td>
                  <td
                    className={`text-center font-semibold ${
                      order.status == "New"
                        ? "text-blue-600"
                        : order.status == "In Progress"
                        ? "text-yellow-500"
                        : order.status == "Dispatched"
                        ? "text-purple-500"
                        : "text-green-500"
                    }`}
                  >
                    {order.status}
                  </td>
                  <td className="text-center">{order.payment}</td>
                  <td className="text-center flex gap-x-2 justify-center items-center h-[50px]">
                    <button
                      onClick={() => {
                        navigate("/order-detail");
                      }}
                      className="w-[33px] h-[33px] flex justify-center items-center rounded-md bg-lightGray"
                    >
                      <IoEye className="text-blue-500 text-[20px]" />
                    </button>

                    <button className="w-[33px] h-[33px] flex justify-center items-center rounded-md bg-lightGray">
                      <MdDelete className="text-red-500 text-[20px]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
