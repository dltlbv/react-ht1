import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Card, Avatar, Typography, Button } from "antd";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;

export default function UserPage() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Card style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Avatar src={user.avatar} size={100} style={{ marginBottom: "20px" }} />
        <Title level={2}>{user.name}</Title>
        <Paragraph>Email: {user.email}</Paragraph>
        <Link to="/user/edit">
          <Button type="primary">Редактировать профиль</Button>
        </Link>
      </Card>
    </div>
  );
}
