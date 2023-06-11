import React, { createRef, useState } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "cropperjs/dist/cropper.css";
import "./style.css";

const Imagecropper = () => {
  const [image, setImage] = useState();
  const [cropData, setCropData] = useState("#");
  const cropperRef = createRef < ReactCropperElement > null;

  const getCropData = () => {
    if (typeof cropperRef.current?.cropper !== "undefined") {
      setCropData(cropperRef.current?.cropper.getCroppedCanvas().toDataURL());
    }
  };
  return (
    <>
      <h2>this is image cropper</h2>
      <Cropper
        ref={cropperRef}
        style={{ height: 400, width: "100%" }}
        zoomTo={0.5}
        initialAspectRatio={1}
        preview=".img-preview"
        src={image}
        viewMode={1}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
        background={false}
        responsive={true}
        autoCropArea={1}
        checkOrientation={false}
        guides={true}
      />
    </>
  );
};

export default Imagecropper;
