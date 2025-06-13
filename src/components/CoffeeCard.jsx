import React from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Swal from "sweetalert2";
import { Link } from "react-router";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id: id, photo, name, price, chef } = coffee;

  const handleDeleteCoffee = (id) => {
    console.log("Deleted Coffee", id);
    // Sweet Alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      console.log(result.isConfirmed);

      if (result.isConfirmed) {
        //   start deleting
        fetch(`http://localhost:3000/coffees/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("After deleting data", data);
            Swal.fire({
              title: "Deleted!",
              text: "Your coffee has been deleted.",
              icon: "success",
            });
            // remove the coffee from the state
            const remainingCoffees = coffees.filter(
              (coffee) => coffee._id !== id
            );
            setCoffees(remainingCoffees);
          });
      }
    });
  };
  return (
    <div className="bg-[#f9f8f6] p-4 rounded-xl shadow-md flex items-center justify-between w-full max-w-2xl mx-auto">
      {/* Coffee Image */}
      <img
        src={photo}
        alt="Espresso Coffee"
        className="w-28 h-30 object-contain"
      />

      {/* Coffee Info */}
      <div className="flex-1 px-6">
        <p className="text-lg font-semibold">
          <span className="text-gray-700">Name:</span> {name}
        </p>
        <p className="text-md mt-1">
          <span className="text-gray-700 font-medium">Chef:</span> {chef}
        </p>
        <p className="text-md mt-1">
          <span className="text-gray-700 font-medium">Price:</span> {price} Taka
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-2">
        <Link
          to={`/coffee/${id}`}
          className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded"
        >
          <Eye className="w-5 h-5" />
        </Link>
        <Link
          to={`/update-coffee/${id}`}
          className="bg-gray-800 hover:bg-gray-900 text-white p-2 rounded"
        >
          <Pencil className="w-5 h-5" />
        </Link>
        <button
          onClick={() => handleDeleteCoffee(id)}
          className="bg-red-500 hover:bg-red-600 text-white p-2 rounded"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
