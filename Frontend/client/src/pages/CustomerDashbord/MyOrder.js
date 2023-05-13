import React, { useState } from "react";

function MyOrder() {
  const [currentPage, setCurrentPage] = useState(1);
  const [ordersPerPage] = useState(10);
  const orders = [
    { id: 1, date: "2023-05-01", name: "Order 1", status: "Delivered" },
    { id: 2, date: "2023-05-02", name: "Order 2", status: "Delivered" },
    { id: 3, date: "2023-05-03", name: "Order 3", status: "Delivered" },
    { id: 4, date: "2023-05-04", name: "Order 4", status: "Delivered" },
    { id: 5, date: "2023-05-05", name: "Order 5", status: "Delivered" },
    { id: 6, date: "2023-05-06", name: "Order 6", status: "Delivered" },
    { id: 7, date: "2023-05-07", name: "Order 7", status: "Delivered" },
    { id: 8, date: "2023-05-08", name: "Order 8", status: "Delivered" },
    { id: 9, date: "2023-05-09", name: "Order 9", status: "Delivered" },
    { id: 10, date: "2023-05-10", name: "Order 10", status: "Delivered" },
    { id: 11, date: "2023-05-11", name: "Order 11", status: "Delivered" },
    { id: 12, date: "2023-05-12", name: "Order 12", status: "Delivered" },
    { id: 13, date: "2023-05-13", name: "Order 13", status: "Delivered" },
    { id: 14, date: "2023-05-14", name: "Order 14", status: "Delivered" },
    { id: 15, date: "2023-05-15", name: "Order 15", status: "Delivered" },
    { id: 16, date: "2023-05-16", name: "Order 16", status: "Delivered" },
    { id: 17, date: "2023-05-17", name: "Order 17", status: "Delivered" },
    { id: 18, date: "2023-05-18", name: "Order 18", status: "Delivered" },
    { id: 19, date: "2023-05-19", name: "Order 19", status: "Delivered" },
    { id: 20, date: "2023-05-20", name: "Order 20", status: "Delivered" },
  ];

  const indexOfLastOrder = currentPage * ordersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
  const currentOrders = orders.slice(indexOfFirstOrder, indexOfLastOrder);

  const renderOrders = currentOrders.map((order) => (
    <div
      key={order.id}
      className="flex justify-between bg-gray-100 p-4 rounded-lg shadow-md"
    >
      <div className="flex gap-4 items-center">
        <div className="flex-shrink-0 h-10 w-10 bg-gray-400 rounded-full flex items-center justify-center">
          <span className="text-white font-medium">{order.name[0]}</span>
        </div>
        <div>
          <h3 className="font-medium">{order.name}</h3>
          <p className="text-gray-500">{order.date}</p>
        </div>
      </div>
      <span className="text-green-500">{order.status}</span>
    </div>
  ));
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(orders.length / ordersPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map((number) => (
    <li
      key={number}
      className={`inline-block mx-1 py-1 px-2 rounded-sm ${
        number === currentPage
          ? "bg-gray-500 text-white"
          : "bg-gray-200 text-gray-700"
      }`}
      onClick={() => setCurrentPage(number)}
    >
      {number}
    </li>
  ));
  return (
    <div className="p-4 flex flex-col gap-8">
      <h2 className="text-xl font-bold font-mont">My Orders</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 font-poppins">
        {renderOrders}
      </div>
      <ul className="flex justify-center mt-4">{renderPageNumbers}</ul>
    </div>
  );
}

export default MyOrder;
