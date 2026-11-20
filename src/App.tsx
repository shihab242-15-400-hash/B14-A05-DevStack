import { useEffect, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Technologies from "./components/technologies/Technologies";
import type { ITechnology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [loading, setLoading] = useState(true);

  // Load technologies from public JSON data using useEffect
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);
        const res = await fetch("/technologies.json");
        const data: ITechnology[] = await res.json();
        setTechnologies(data);
      } catch (error) {
        console.error("Failed to load technologies:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FBFBFC]">
      <Nav />
      <main className="flex-1">
        <Banner />
        {loading ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center gap-3 py-16">
            <span className="loading loading-spinner loading-lg text-pink-500" />
            <p className="text-base font-semibold text-slate-500">
              Loading technologies...
            </p>
          </div>
        ) : (
          <Technologies technologies={technologies} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
