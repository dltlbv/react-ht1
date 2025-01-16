import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import HomePage from "./components/HomePage";
import News from "./components/News";
import AuthorPage from "./components/AuthorPage";
import { news } from "./data";
import "./App.css";

const { Header, Content } = Layout;

export default function App() {
  return (
    <Router>
      <Layout>
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="1">
              <Link to="/">Главная</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/news">Новости</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "20px", minHeight: "80vh" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/news"
              element={
                <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                  {news.map((newsItem) => (
                    <News
                      key={newsItem.id}
                      author={newsItem.author}
                      description={newsItem.description}
                      image={newsItem.image}
                      time={newsItem.time}
                      authorId={newsItem.authorId}
                    />
                  ))}
                </div>
              }
            />
            <Route path="/author/:authorId" element={<AuthorPage />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}
