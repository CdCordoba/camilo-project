import logo from "./logo.svg";
import "./App.css";
import Landing from "./components/Landing/Landing";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Articulos from "./components/Articulos/Articulos";

function App() {
  return (
    <div>
      <Landing />
      <Contact />
      <Blog />
      <Articulos />
    </div>
  );
}

export default App;
