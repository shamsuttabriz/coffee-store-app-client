import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

function UpdateCoffee() {
  const updateCoffee = useLoaderData();
  const { _id, name, chef, supplier, taste, details, price, photo } =
    updateCoffee;

  const handleUpdatedCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    // send updated coffee to the bd
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your coffee has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="px-5 py-5 lg:px-24 lg:py-5 bg-slate-200">
      <div className="lg:p-5 text-center space-y-4 my-8">
        <h2 className="text-4xl font-bold">Update your Coffee</h2>
      </div>
      <form onSubmit={handleUpdatedCoffee}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1 */}
          <fieldset className="fieldset w-full shadow-white shadow-sm border-base-300 rounded-box border p-4">
            <label className="label text-base font-bold">Name</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              className="input w-full border-0"
              placeholder="Coffee Name"
            />
          </fieldset>
          {/* 2 */}
          <fieldset className="fieldset w-full shadow-white shadow-sm border-base-300 rounded-box border p-4">
            <label className="label text-base font-bold">Chef</label>
            <input
              type="text"
              name="chef"
              defaultValue={chef}
              className="input w-full border-0"
              placeholder="Enter coffee chef"
            />
          </fieldset>
          {/* 3 */}
          <fieldset className="fieldset w-full shadow-white shadow-sm border-base-300 rounded-box border p-4">
            <label className="label text-base font-bold">Supplier</label>
            <input
              type="text"
              name="supplier"
              defaultValue={supplier}
              className="input w-full border-0"
              placeholder="Enter coffee supplier"
            />
          </fieldset>
          {/* 4 */}
          <fieldset className="fieldset w-full shadow-white shadow-sm border-base-300 rounded-box border p-4">
            <label className="label text-base font-bold">Taste</label>
            <input
              type="text"
              name="taste"
              defaultValue={taste}
              className="input w-full border-0"
              placeholder="Enter coffee taste"
            />
          </fieldset>
          {/* 5 */}
          <fieldset className="fieldset w-full shadow-white shadow-sm border-base-300 rounded-box border p-4">
            <label className="label text-base font-bold">Price</label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="input w-full border-0"
              placeholder="Enter coffee price"
            />
          </fieldset>
          {/* 6 */}
          <fieldset className="fieldset w-full shadow-white shadow-sm border-base-300 rounded-box border p-4">
            <label className="label text-base font-bold">Details</label>
            <input
              type="text"
              name="details"
              defaultValue={details}
              className="input w-full border-0"
              placeholder="Enter coffee details"
            />
          </fieldset>
        </div>
        {/* Photo url */}
        <fieldset className="fieldset w-full shadow-white shadow-sm border-base-300 rounded-box border p-4 mt-6">
          <label className="label text-base font-bold">Photo</label>
          <input
            type="text"
            name="photo"
            defaultValue={photo}
            className="input w-full border-0"
            placeholder="Enter photo URL"
          />
        </fieldset>
        {/* Submit */}
        <input
          type="submit"
          value="Update Coffee"
          className="btn w-full mt-6"
        />
      </form>
    </div>
  );
}

export default UpdateCoffee;
