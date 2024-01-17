import React, { useState } from "react";
import axios from "axios";

const FormItem = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const submitHandler = () => {
    console.log("Submit handler");
    addItem();
    // console.log({
    //   name,
    //   type,
    //   price,
    //   stock,
    // });
  };

  const addItem = async () => {
    
  };

  return (
    <div className="col-7">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="input item name"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Type</label>
        <input
          onChange={(e) => setType(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Item type"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Input item price"
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Stock</label>
        <input
          onChange={(e) => setStock(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Input item stock"
        />
      </div>
      <div className="mb-3">
        <button onClick={submitHandler} className="btn btn-success w-100">
          Create Item
        </button>
      </div>
    </div>
  );
};

export default FormItem;
