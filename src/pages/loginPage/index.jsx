import "../loginPage/loginStyle.css";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../../firebase/auth";


export const LoginPage = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const auth = getAuth(app);

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate("/profile");

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
      <div className="formAuto">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onSubmit}
        >
          <h1 className="form-title">Авторизация</h1>
          
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
              Sign In
            </Button>
          </Form.Item>
        </Form>
        <button className="button-register" onClick={() => {navigate("/register")}}>
            <h4>Зарегестрироваться</h4>
          </button>
      </div>
    </div>
  );
};
