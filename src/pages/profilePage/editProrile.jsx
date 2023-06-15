import { Button, Space } from 'antd';

export const EditProfile = ({onClick}) => {

  return (
    <Space direction="vertical">
    <Space>
      <Button type="primary" id='button-edit' onClick={onClick}>Edit</Button>
    </Space>
  </Space>
  );
};