import React from "react";

function AddProduct() {

  return (

    <div className="admin-form">

      <h2>Add Product</h2>

      <input placeholder="Product Name" />

      <input placeholder="Price" />

      <input placeholder="Image URL" />

      <button>Add Product</button>

    </div>
  );
}

export default AddProduct;