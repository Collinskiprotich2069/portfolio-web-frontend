import Footer from "../components/Footer";
import Projects from "../components/Projects";
import '../App.css';
import About from "./About";
import Contact from "./Contact";
function Home()
{
    return (
      <>
        <About />
        <Contact/>
            <Projects />
            <Footer/>
      </>
    );
}

export default Home;

