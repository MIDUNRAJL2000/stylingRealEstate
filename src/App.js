import "./App.css";
import Component2 from "./Components/Comp1/Component2";
import Component3 from "./Components/Comp1/Component3";
import Component4 from "./Components/Comp1/Component4";
import Footer from "./Components/Comp1/Footer";
import Header from "./Components/Comp1/Header";
import Hero from "./Components/Comp1/Hero";
import "./input.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Component2 />
      <Component3></Component3>
      <Component4 />
      <Footer />
    </div>
  );
}

export default App;
