import { React, useRef, useState } from "react";
import { BsCardImage } from "react-icons/bs";
import "./style.css";
import Imagecropper from "./Imagecropper";

const Uploadprofilephoto = () => {
  const [image, setImage] = useState("");
  const upload = useRef(null);
  const handleProfileupload = (e) => {
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };
  return (
    <>
      <input hidden type="file" ref={upload} onChange={handleProfileupload} />
      <div className="upload">
        <div className="upload__icon" onClick={() => upload.current.click()}>
          <BsCardImage />
        </div>
        <p>upload image</p>
        <div className="image__cropper">
          {image && <Imagecropper setImage={setImage} />}
        </div>
      </div>
    </>
  );
};

export default Uploadprofilephoto;
