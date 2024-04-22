import Link from "next/link";
import React from "react";

const Image_placeholder = () => {
  return (
    <div className="card-style-1" >
      <Link href="/blog-archive">
        <div className="card-image">
          <img src={"../assets/imgs/page/homepage/images.png"} alt="Genz" style={{minHeight:'279px'}} />
          <div className="card-info">
            <div className="info-bottom">
               
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Image_placeholder;
