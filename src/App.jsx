import Header from "./components/Header";
import News from "./components/News";
import { news } from "./data";
import "./App.css";

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <h3>Новости</h3>
        <News {...news[0]} />
        <News {...news[1]} />
        <News {...news[2]} />
        <News {...news[3]} />
      </main>
    </div>
  );
}
