import Header from "./components/header-section/Header";
import Hero from "./components/hero-section/Hero";
import "./App.css";
import Companies from "./components/companies/Companies";
import Residencies from "./components/residencies/Residencies";
import Value from "./components/values/Value";
import Contact from "./components/contact/Contact";
import GetStarted from "./components/getstarted/Getstarted";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
