import { Card } from "antd";
import "./profileStyle.css";
import { useAuth } from "../../hooks/useAuth";
import { AvatarProfile } from "./avatar";
import { UploadAvatar } from "./uploadAvatar";
import { EditProfile } from "./editProrile";
import { useState } from "react";

const ReplaceButton = ({setPhoto}) => {
  const [button, setButton] = useState(true);
  const handleClick = () => {
    setButton(false);
  };

  return (
    <div>
      {button ? (
        <EditProfile onClick={handleClick} />
      ) : (
        <UploadAvatar setPhoto={setPhoto}/>
      )}
    </div>
  );
};

export const ProfilePage = () => {
  const [photo, setPhoto] = useState(null);
  const { user } = useAuth();

  return (
    <div className="container">
      <Card title="Профиль" bordered={false} className="formProf">
        <div className="profile-edit"></div>
        <div className="profile-name">{user?.name}</div>
        <div className="profile-name">email: {user?.email}</div>
        <div className="profile-avatar">
          <AvatarProfile photo={photo}/>
          <ReplaceButton setPhoto={setPhoto}/>
        </div>
      </Card>
    </div>
  );
};
