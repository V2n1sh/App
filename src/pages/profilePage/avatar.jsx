import { UserOutlined } from "@ant-design/icons";
import { Avatar, Space } from "antd";
import { useAuth } from "../../hooks/useAuth";

export const AvatarProfile = ({photo}) => {
  const { user } = useAuth();
  return (
    <Space direction="vertical" size={16}>
      <Space>
        <Avatar size={128} src={photo ? photo : user?.photoURL} icon={<UserOutlined />} />
      </Space>
    </Space>
  );
};
