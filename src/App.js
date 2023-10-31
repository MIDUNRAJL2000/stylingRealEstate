import "./App.css";
// import Component2 from "./Cards/Comp1/Component2";
import Cards from "./Components/Comp1/Cards";
//import Component3 from "./Components/Comp1/Properties";
// import Component4 from "./Components/Comp1/TrendingPosts";
import Footer from "./Components/Comp1/Footer";
import Header from "./Components/Comp1/Header";
import Hero from "./Components/Comp1/Hero";
import "./input.css";
import Properties from "./Components/Comp1/Properties";
import TrendingPosts from "./Components/Comp1/TrendingPosts";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Cards />
      <Properties />
      <TrendingPosts />
      <Footer />
    </div>
  );
}

export default App;
