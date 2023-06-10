import React, { useRef } from "react";
import { BsCardImage } from "react-icons/bs";
import "./style.css";

const Uploadprofilephoto = () => {
  const upload = useRef(null);
  return (
    <>
      <input hidden type="file" ref={upload} />
      <div className="upload">
        <div className="upload__icon" onClick={() => upload.current.click()}>
          <BsCardImage />
        </div>
        <p>upload image</p>
      </div>
    </>
  );
};

export default Uploadprofilephoto;
