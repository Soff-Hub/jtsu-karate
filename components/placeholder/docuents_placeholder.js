import React from "react";

const Document_placeholder = () => {
  return (
    <div
      className="col-md-6 card-list-posts-small border-bottom border-gray-800 mb-20  d-flex gap-2 wow animate__animated animate__fadeIn"
      style={{position: "relative" }}
    >
      <div className="card-image hover-up">
        <div>
          <img src={"../assets/imgs/page/homepage/images.png"} alt="Genz" height={80} />
        </div>
      </div>
        <p
          className="mb-3 mt-2"
          style={{
            height: "15px",
            width: "80%",
            backgroundColor: "#0001",
          }}
        ></p>
        
    </div>
  );
};

export default Document_placeholder;
