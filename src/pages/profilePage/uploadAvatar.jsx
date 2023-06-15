import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";
import { useAuth } from "../../hooks/useAuth";
import {  ref, uploadBytes, getDownloadURL } from "firebase/storage";

import { updateProfile } from "firebase/auth";



export const UploadAvatar = ({setPhoto}) => {
  const {storage, user, auth} = useAuth();
   const UploadImages = async (file) => {
    console.log(file.file.originFileObj);
    const storageRef = ref(storage, `/images/${user.id}`);
    await uploadBytes(storageRef, file.file.originFileObj);
    const result = await getDownloadURL(storageRef);
    setPhoto(result);

    updateProfile(auth.currentUser, {
      photoURL: result,
    })
  }

  return (
    <Upload onChange={UploadImages}>
      <Button icon={<UploadOutlined />} id="button-add">Click to Upload</Button>
    </Upload>
  );
};
