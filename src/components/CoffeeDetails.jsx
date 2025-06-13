import React from "react";
import { useLoaderData } from "react-router";

function CoffeeDetails() {
  const coffee = useLoaderData();
  const { name, chef, supplier, taste, photo, price, details } = coffee;
  console.log(coffee);
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center justify-center gap-20 py-20 bg-[#f9f6f1]">
        <div className="w-60 md:w-72 h-auto">
          <img
            src={photo} // Replace with your actual image path
            alt="Coffee Cup"
            className="w-full object-contain"
          />
        </div>
        <div className="text-left max-w-md">
          <h2 className="text-2xl font-bold text-[#4b2e2e] mb-4">Niceties</h2>
          <ul className="text-sm md:text-base space-y-2">
            <li>
              <span className="font-semibold">Name:</span> {name}
            </li>
            <li>
              <span className="font-semibold">Chef:</span> {chef}
            </li>
            <li>
              <span className="font-semibold">Supplier:</span> {supplier}
            </li>
            <li>
              <span className="font-semibold">Taste:</span> {taste}
            </li>
            <li>
              <span className="font-semibold">Price:</span> {price}Tk
            </li>
            <li>
              <span className="font-semibold">Details:</span> {details}
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default CoffeeDetails;
