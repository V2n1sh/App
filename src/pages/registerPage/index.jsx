import "../registerPage/registerStyle.css";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../hooks/useAuth";

export const RegisterPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const { auth } = useAuth();

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    console.log(data);
    try {
     const foo = await createUserWithEmailAndPassword(auth, data.email, data.password);
     updateProfile(auth.currentUser, {
      displayName: data.name
    }).then(() => {
      navigate("/login")
    }).catch((error) => {
    console.log(error)
    });
    } catch (error) {
      messageApi.open({
        type: "error",
        content: "Что-то пошло не так....",
      });
    }
  };

  return (
    <div className="container">
      {contextHolder}
      <div className="formReg">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onSubmit}
        >
          <h1 className="form-title">Регистрация</h1>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
