import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Projects from "./components/Projects"
import About from "./components/About"

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

      </div>
    </main>
  );
}

export default App;
