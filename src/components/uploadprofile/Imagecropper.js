import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Imagecropper = ({ setImage }) => {
  return (
    <div className="cropper__box">
      <div className="close__icon" onClick={() => setImage("")}>
        <AiOutlineClose />
      </div>
    </div>
  );
};

export default Imagecropper;
