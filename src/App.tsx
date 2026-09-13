import { Suspense } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";
import TechnologyCards from "./components/TechnologyCards/TechnologyCards.tsx";
import type { Technology } from "./types/index.ts";
import { ToastContainer } from "react-toastify";
import Loader from "./components/Loader/Loader.tsx";

const fetchData = async (source: string): Promise<Technology[]> => {
  const response: Response = await fetch(source);

  const data: Technology[] = await response.json();

  return data;
};

function App() {
  return (
    <>
      <ToastContainer />
      <header className="sticky top-0">
        <Navbar />
      </header>

      <main>
        <Banner />

        <Suspense fallback={<Loader />}>
          <TechnologyCards
            technologyDataPromise={fetchData("/technologies.json")}
          />
        </Suspense>
      </main>

      <Footer />
    </>
  );
}

export default App;
