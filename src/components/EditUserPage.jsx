import { useNavigate } from "react-router-dom";
import { Form, Input, Button } from "antd";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function EditUserPage() {
  const { user, updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const onFinish = (values) => {
    updateUser(values);
    navigate(-1);
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h1>Редактирование профиля</h1>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          name: user.name,
          email: user.email,
        }}
      >
        <Form.Item
          label="Имя"
          name="name"
          rules={[{ required: true, message: "Пожалуйста, введите имя!" }]}
        >
          <Input placeholder="Введите имя" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Пожалуйста, введите email!" },
            { type: "email", message: "Введите корректный email!" },
          ]}
        >
          <Input placeholder="Введите email" />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginRight: "10px" }}
          >
            Сохранить
          </Button>
          <Button onClick={() => navigate(-1)}>Отмена</Button>
        </Form.Item>
      </Form>
    </div>
  );
}
