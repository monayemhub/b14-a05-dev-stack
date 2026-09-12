import "./App.css";
import Banner from "./components/Banner/Banner.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {
  return (
    <>
      <header className="sticky top-0">
        <Navbar />
      </header>

      <main>
        <Banner />
      </main>

      <Footer />
    </>
  );
}

export default App;
