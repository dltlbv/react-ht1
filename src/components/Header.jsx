import { Link } from "react-router-dom";
import { Layout, Menu, Avatar } from "antd";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

const { Header } = Layout;

export default function AppHeader() {
  const { user } = useContext(UserContext);

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Главная</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/news">Новости</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/user">
            <Avatar src={user.avatar} style={{ marginRight: "10px" }} />
            {user.name}
          </Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
