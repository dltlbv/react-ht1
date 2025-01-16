import { useParams, useNavigate } from "react-router-dom";
import { authors } from "../data";
import { Card, Avatar, Typography, Button } from "antd";
import { UserOutlined, ArrowLeftOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function AuthorPage() {
  const { authorId } = useParams();
  const navigate = useNavigate();
  const author = authors.find((author) => author.id === authorId);

  if (!author) {
    return <p>Автор не найден.</p>;
  }

  return (
    <div className="author-page">
      <Card className="author-card">
        <Avatar
          size={120}
          icon={<UserOutlined />}
          style={{ marginBottom: "20px" }}
        />
        <Title level={2}>{author.name}</Title>
        <Paragraph>{author.bio}</Paragraph>
        <Paragraph>
          Контактный email:{" "}
          <a href={`mailto:${author.contact}`}>{author.contact}</a>
        </Paragraph>
      </Card>
      <Button
        type="primary"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(-1)}
        style={{ marginBottom: "20px" }}
      >
        Назад
      </Button>
    </div>
  );
}
