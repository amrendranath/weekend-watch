import Header from "./components/Header";
import Slider from "./components/Slider";
import movieBg from "./assets/images/bg1.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Slider images={Array(5).fill(movieBg)} />
    </div>
  );
}

export default App;
