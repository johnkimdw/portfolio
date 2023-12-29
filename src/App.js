import Navbar from "./components/Navbar"
import Intro from "./components/Intro"
import Projects from "./components/Projects"

function App() {
  return (
    <main>
      <div class="bg-background min-h-screen">

        {/* NAVBAR */}
        <Navbar/>
        {/* INTRO */}
        <Intro/>
        <Projects/>

      </div>
    </main>
  );
}

export default App;
