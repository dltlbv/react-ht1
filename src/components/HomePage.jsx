import { Typography } from "antd";

const { Title } = Typography;

export default function HomePage() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <Title level={1}>Добро пожаловать на сайт новостей!</Title>
    </div>
  );
}
