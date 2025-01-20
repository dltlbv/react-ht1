import { Link } from "react-router-dom";
import { Card, Typography, Button } from "antd";
import { useState } from "react";

const { Title, Paragraph } = Typography;

export default function News({ author, description, image, time, authorId }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <Card
      hoverable
      cover={
        <img
          alt="news"
          src={image}
          style={{ height: "200px", objectFit: "cover" }}
        />
      }
      style={{ width: 300 }}
    >
      <Title level={4}>
        <Link to={`/author/${authorId}`}>{author}</Link>
      </Title>
      <Paragraph>{description}</Paragraph>
      <p>{time}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button type="link" onClick={handleLike}>
          {liked ? "💙" : "🤍"}
        </Button>
        <span>{likesCount}</span>
      </div>
    </Card>
  );
}
