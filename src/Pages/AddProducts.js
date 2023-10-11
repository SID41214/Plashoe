import React, { useContext, useState } from "react";
import { MyContext } from "../App";
// import { image } from 'fontawesome';
import { useNavigate } from "react-router-dom";
import "./AddProduct.css";

const AddProducts = () => {
  const { allproducts, setAllproducts } = useContext(MyContext);
  const navigate = useNavigate();
  const [category, setCategory] = useState();
  const [id, setId] = useState();
  const [name, setName] = useState();
  const [imgpath, Setimgpath] = useState();
  const [price, setPrice] = useState();
  const obj = {
    category: category,
    id: id,
    name: name,
    imgpath: imgpath,
    price: price,
  };
  const handlebutton = (e) => {
    e.preventDefault();
  };
  const handleUpdate = () => {
    setAllproducts([...allproducts, obj]);
    alert("New Product Added to cart");
    navigate("/admin/products");
  };
  return (
    <div>
      <div>
        <h1 style={{ background: "#C0C0C0", borderBottom: "2px solid black" }}>
          Add New Products To Shopping Cart
        </h1>
      </div>

      <div
        className="addproduct-div"
        style={{
          background: "black",
          display: "flex",
          justifyContent: "center",
          border: "2px solid white",
        }}
      >
        <form
          action=""
          onSubmit={handlebutton}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "300px",
          }}
        >
          <img src={imgpath} alt="imge" /> <br /> <br />
          {/* <label htmlFor="Id"> &nbsp; Id: &nbsp;</label> */}
          <input
            type="number"
            name="Id"
            id="Id"
            placeholder="Enter Id"
            onChange={(e) => setId(e.target.value)}
          />{" "}
          <br /> <br />
          {/* <label htmlFor="name">Name: &nbsp;</label> */}
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter Product Name"
            onChange={(e) => setName(e.target.value)}
          />{" "}
          <br /> <br />
          {/* <label htmlFor="Image">Image: &nbsp;</label> */}
          <input
            type="text"
            name="Image"
            id="Image"
            placeholder="Image Adreess Path"
            onChange={(e) => Setimgpath(e.target.value)}
          />{" "}
          <br /> <br />
          {/* <label htmlFor="price">Price: &nbsp;</label> */}
          <input
            type="number"
            name="price"
            id="price"
            placeholder="Enter Price"
            onChange={(e) => setPrice(e.target.value)}
          />{" "}
          <br />
          <br />
          {/* <label htmlFor="cate">category:</label> */}
          <select name="" id="" onChange={(e) => setCategory(e.target.value)}>
            <option value="men">Men</option>
            <option value="women">Women</option>
          </select>
          <br /> <br />
          <button onClick={() => handleUpdate()}>Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
