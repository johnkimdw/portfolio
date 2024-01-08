import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
  return (
    <main>
      <div class="bg-background min-h-screen">

        {/* NAVBAR */}
        <Navbar/>
        {/* INTRO */}
        <Intro/>
        <Projects/>
        <About/>
        <Footer/>

      </div>
    </main>
  );
}

export default App;
