import React from "react";

function ManageProducts() {

  return (

    <div>

      <h2>Manage Products</h2>

      <table>

        <thead>

          <tr>

            <th>Name</th>

            <th>Price</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          <tr>

            <td>iPhone 15</td>

            <td>₹79999</td>

            <td>

              <button>Edit</button>

              <button>Delete</button>

            </td>

          </tr>

        </tbody>

      </table>

    </div>
  );
}

export default ManageProducts;