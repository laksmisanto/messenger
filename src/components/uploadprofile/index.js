import { React, useRef, useState } from "react";
import { BsCardImage } from "react-icons/bs";
import "cropperjs/dist/cropper.css";
import "./style.css";
import Imagecropper from "./Imagecropper";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
import { getAuth, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { Loginusers } from "../../feature/slice/userSlice";
import { v4 as uuidv4 } from "uuid";

const Uploadprofilephoto = ({ setOpen }) => {
  const storage = getStorage();
  const auth = getAuth();
  const dispatch = useDispatch();
  const storageRef = ref(storage, uuidv4());
  const [image, setImage] = useState("");
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
  const upload = useRef(null);
  const user = useSelector((users) => users.login.loggedIn);

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

  const getCropData = () => {
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());

      const message4 = cropper.getCroppedCanvas().toDataURL();
      uploadString(storageRef, message4, "data_url").then((snapshot) => {
        getDownloadURL(ref(storageRef)).then((downloadURL) => {
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          }).then(() => {
            setOpen(false);
            dispatch(Loginusers({ ...user, photoURL: downloadURL }));
            localStorage.setItem(
              "users",
              JSON.stringify({ ...user, photoURL: downloadURL })
            );
          });
        });
      });
    }
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
          {image && (
            <Imagecropper
              getCropData={getCropData}
              setImage={setImage}
              image={image}
              setCropper={setCropper}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Uploadprofilephoto;
