import React from "react";
import Swal from "sweetalert2";

function AddCoffee() {
  const handleAddCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    // Send data to server
    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          console.log("After adding coffee", data);
          Swal.fire({
            title: "Coffee added successfully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <div className="px-5 py-5 lg:px-24 lg:py-5 bg-slate-200">
      <div className="lg:p-5 text-center space-y-4 my-8">
        <h2 className="text-4xl font-bold">Add New Coffee</h2>
        <p className="lg:px-8">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
      </div>
      <form onSubmit={handleAddCoffee}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1 */}
          <fieldset className="fieldset w-full shadow-white shadow-sm border-base-300 rounded-box border p-4">
            <label className="label text-base font-bold">Name</label>
            <input
              type="text"
              name="name"
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
            className="input w-full border-0"
            placeholder="Enter photo URL"
          />
        </fieldset>
        {/* Submit */}
        <input type="submit" value="Add Coffee" className="btn w-full mt-6" />
      </form>
    </div>
  );
}

export default AddCoffee;
