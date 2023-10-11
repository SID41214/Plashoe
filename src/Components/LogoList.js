import React from "react";

const LogoList = () => {
  return (
    <div>
      <div
        className="logolist-box"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4>AS SEEN IN:</h4>
        <ul style={{ display: "flex", justifyContent: "space-between" }}>
          <li style={{ listStyleType: "none" }}>
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-5.svg"
              alt="l1"
            />
          </li>
          <li style={{ listStyleType: "none" }}>
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-4.svg"
              alt="l2"
            />
          </li>
          <li style={{ listStyleType: "none" }}>
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-3.svg"
              alt="l3"
            />
          </li>
          <li style={{ listStyleType: "none" }}>
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-2.svg"
              alt="l4"
            />
          </li>
          <li style={{ listStyleType: "none" }}>
            <img
              src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-featured-in-logo-1.svg"
              alt="l5"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LogoList;
