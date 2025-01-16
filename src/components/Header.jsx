import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";

const { Header } = Layout;

export default function AppHeader() {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">
          <Link to="/">Об авторах</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/news">Новости</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}
