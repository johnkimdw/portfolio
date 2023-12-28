import Navbar from "./components/Navbar"
import Intro from "./components/Intro"

function App() {
  return (
    <main>
      <div class="bg-background min-h-screen">

        {/* NAVBAR */}
        <Navbar/>
        {/* INTRO */}
        <Intro/>

      </div>
    </main>
  );
}

export default App;
