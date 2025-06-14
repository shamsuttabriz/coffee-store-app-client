import { Eye, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router";
import Swal from "sweetalert2";

function Users() {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);

  const handleDeleteUser = (id) => {
    console.log("Delete User of: ", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete starting
        fetch(`https://coffee-store-server-ivory-nine.vercel.app/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("After Delating user: ", data);

            const remaningUsers = users.filter((user) => user._id !== id);
            setUsers(remaningUsers);

            // TODO Delete user from firebase
            
            Swal.fire({
              title: "Deleted!",
              text: "Your coffee has been deleted.",
              icon: "success",
            });
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-10">Total Users: {users.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Job</th>
                <th>Email</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user._id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={user.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.name}</div>
                        <div className="text-sm opacity-50">
                          Dhaka, Bangladesh
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {user.address}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {user.phone}
                    </span>
                  </td>
                  <td>{user.email ? user.email : "Not Varified"}</td>
                  <th>
                    {/* Action Buttons */}
                    <div className="flex flex-row gap-2">
                      <Link
                        // to={`/coffee/${id}`}
                        className="bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded"
                      >
                        <Eye className="w-5 h-5" />
                      </Link>
                      <Link
                        // to={`/update-coffee/${id}`}
                        className="bg-gray-800 hover:bg-gray-900 text-white p-2 rounded"
                      >
                        <Pencil className="w-5 h-5" />
                      </Link>
                      <button
                        onClick={() => handleDeleteUser(user._id)}
                        className="bg-red-500 hover:bg-red-600 text-white p-2 cursor-pointer rounded"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;
