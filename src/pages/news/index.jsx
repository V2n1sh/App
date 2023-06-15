import "../news/styleNews.css";
import { useCallback } from "react";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { collection, addDoc } from "firebase/firestore";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

export const AddNewPage = () => {
  const { db } = useAuth();
  const navigate = useNavigate();

  const addNew = useCallback(async (data) => {
    try {
      await addDoc(collection(db, "news"), data);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    navigate("/");
  }, [db, navigate]);

  

  return (
    <div className="container">
      <div className="form-add-new">
        <Form onFinish={addNew}>
          <h1 className="title">Добавление записи</h1>
          <Form.Item label="Наименование" name="title">
            <Input/>
          </Form.Item>

          <Form.Item label="Описание" name="text">
            <TextArea
              style={{ resize: "none"}}
            ></TextArea>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}></Form.Item>

          <Button htmlType="submit"  type="primary">
            Добавить запись
          </Button>
        </Form>
      </div>
    </div>
  );
};
