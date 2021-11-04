import Nav from "./Nav";
import Top from "./Top";
import Benefits from "./Benefits";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import useScrollPosition from "@react-hook/window-scroll";

const App = () => {
  const scrollPos = useScrollPosition(60);

  return (
    <div className="App">
      <Nav scrollPos={scrollPos} />
      <Top />
      <Benefits />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
