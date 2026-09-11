import "./App.css";
import Banner from "./components/Banner/Banner.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Banner />
      </main>
    </>
  );
}

export default App;
