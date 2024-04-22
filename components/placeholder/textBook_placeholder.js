import Link from "next/link";
import React from "react";

const TextBook_placeholder = () => {
  return (
    <div
      className="card-list-posts wow animate__animated animate__fadeIn mb-30"
    >
      <div className="card-image hover-up">
        <Link href={`#`} className="h-100">
        <img src={"../assets/imgs/page/homepage/images.png"} alt="Genz"  />
        </Link>
      </div>
      <div
        className="card-info"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "10px 0",
        }}
      >
        <div>
          <Link href={`#`}>
          <p

              style={{
                height: "15px",
                width:"50%",
                backgroundColor: "#0001",
              }}
            ></p>
               <p
               className="mt-3"
              style={{
                height: "15px",
                width:"60%",
                backgroundColor: "#0001",
              }}
            ></p>
               <p
               className="mt-3"
              style={{
                height: "15px",
                width:"90%",
                backgroundColor: "#0001",
              }}
            ></p>
             <p
               className="mt-3"
              style={{
                height: "15px",
                width:"70%",
                backgroundColor: "#0001",
              }}
            ></p>
              <p
               className="mt-3"
              style={{
                height: "15px",
                width:"80%",
                backgroundColor: "#0001",
              }}
            ></p>
              <p
               className="mt-3"
              style={{
                height: "15px",
                width:"70%",
                backgroundColor: "#0001",
              }}
            ></p>
          </Link>
        </div>
        <div className="row">
          <div className="col-7 d-flex">
          <p
               className="mb-3"
              style={{
                height: "15px",
                width:"50%",
                backgroundColor: "#0001",
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBook_placeholder;
