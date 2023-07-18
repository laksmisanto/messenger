import { Button } from "@mui/material";
import React from "react";
import { Cropper } from "react-cropper";
import { AiOutlineClose } from "react-icons/ai";

const Imagecropper = ({ setImage, image, getCropData, setCropper }) => {
  return (
    <div className="cropper__box">
      <div className="close__icon" onClick={() => setImage("")}>
        <AiOutlineClose />
      </div>
      <div className="preview__image">
        <div className="img-preview" />
      </div>
      <div className="crop__btn">
        <Button variant="contained" onClick={getCropData}>
          Upload Image
        </Button>
      </div>
      <Cropper
        style={{
          height: 400,
          width: "100%",
          objectFit: "cover",
        }}
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
        onInitialized={(instent) => {
          setCropper(instent);
        }}
      />
    </div>
  );
};

export default Imagecropper;
