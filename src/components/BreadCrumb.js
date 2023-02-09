import React from "react";

const BreadCrumb = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb" style={{ margin: "0 12rem" }}>
          <li
            className="breadcrumb-item active"
            style={{ color: "blue", textDecoration: "underline" }}
            aria-current="page"
          >
            Home
          </li>
          <li
            className="breadcrumb-item active"
            style={{ color: "blue" }}
            aria-current="page"
          >
            Dashboard
          </li>
          <li
            className="breadcrumb-item active"
            style={{ color: "blue" }}
            aria-current="page"
          >
            TrackSheet
          </li>
        </ol>
      </nav>
    </>
  );
};

export default BreadCrumb;
