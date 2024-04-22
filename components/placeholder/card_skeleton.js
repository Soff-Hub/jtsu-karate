import Link from "next/link";
import React from "react";

const Card_skeleton = () => {
  return (
    <div
      className="col-lg-4 wow animate__animated animate__fadeIn"
      data-wow-delay={0}
    >
      <div className="card-blog-1 hover-up p-0">
        <div className="card-image">
          <Link href={`#`}>
            <img
              src={"../assets/imgs/page/homepage/images.png"}
              alt="Genz"
              style={{ objectFit: "content", }}
            />
          </Link>
        </div>
        <div className="card-info p-3">
          <Link href={`#`}>
            <p
              style={{
                height: "15px",
                maxWidth: "250px",
                backgroundColor: "#0001",
              }}
            ></p>
            <p
              className="mt-2"
              style={{
                height: "15px",
                maxWidth: "300px",
                backgroundColor: "#0001",
              }}
            ></p>
            <p
              className="mt-2"
              style={{
                height: "15px",
                maxWidth: "250px",
                backgroundColor: "#0001",
              }}
            ></p>
               <p
              className="mt-2"
              style={{
                height: "15px",
                maxWidth: "280px",
                backgroundColor: "#0001",
              }}
            ></p>
               <p
              className="mt-2"
              style={{
                height: "15px",
                maxWidth: "200px",
                backgroundColor: "#0001",
              }}
            ></p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card_skeleton;
