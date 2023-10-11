import React, { useContext, useState } from "react";
import { MyContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = () => {
  const Inpstyl = {
    backgroundColor: "lightblue",
    padding: "20px",
    border: "2px solid black",
    borderRadius: "5px",
    textAlign: "center",
    marginTop: "5px",
    fontWeight: "600",
  };
  const { id } = useParams();
  const { allproducts, setAllproducts } = useContext(MyContext);
  const currentdata = allproducts.find(
    (e) => e.id.toString() === id.toString()
  );

  const navigate = useNavigate();
  const [category, setCategory] = useState(currentdata.category);
  const [name, setName] = useState(currentdata.name);
  const [imgpath, Setimgpath] = useState(currentdata.imgpath);
  const [price, setPrice] = useState(currentdata.price);
  const buttonClick = () => {
    const updateddata = {
      ...currentdata,
      name: name,
      price: price,
      imgpath: imgpath,
    };
    const index = allproducts.findIndex(
      (p) => p.id.toString() === currentdata.id.toString()
    );
    const updatedproducts = [...allproducts];
    updatedproducts[index] = updateddata;
    setAllproducts(updatedproducts);
    alert("Updated ");
    navigate("/admin/products");
  };
  return (
    <div>
      <div>
        <h1 style={{ background: "#C0C0C0", borderBottom: "2px solid black" }}>
          Edit Product Details
        </h1>
        <div
          style={{
            display: "flex",
            marginTop: "40px",
            border: "2px solid black",
          }}
        >
          <div className="edit-left">
            <img src={imgpath} alt="img" width="367px" height="367px" />
          </div>

          <div
            className="edit-right"
            style={{ marginTop: "90px", marginLeft: "20px", width: "400px" }}
          >
            <input
              style={Inpstyl}
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              style={Inpstyl}
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <input
              style={Inpstyl}
              type="text"
              name="imgpath"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <textarea
              style={Inpstyl}
              rows="4"
              cols="46"
              type="text"
              name="imgpath"
              value={imgpath}
              onChange={(e) => Setimgpath(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          style={{
            background: "green",
            color: "white",
            width: "200px",
            height: "60px",
            fontWeight: "bolder",
            fontSize: "17px",
          }}
          onClick={() => buttonClick()}
        >
          {" "}
          Update Product Details{" "}
        </button>
      </div>
    </div>
  );
};

export default EditProduct;
