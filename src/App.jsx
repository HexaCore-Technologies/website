import Navbar from "./components/layout/Navbar";

const placeholderSections = [
  {
    id: "home",
    label: "Home",
  },
  {
    id: "services",
    label: "Services",
  },
  {
    id: "process",
    label: "Process",
  },
  {
    id: "portfolio",
    label: "Portfolio",
  },
  {
    id: "contact",
    label: "Contact",
  },
];

function App() {
  return (
    <main className="min-h-screen bg-void-950 text-ink-50">
      <Navbar />

      {placeholderSections.map((section, index) => (
        <section
          id={section.id}
          key={section.id}
          className="flex min-h-screen items-center border-b border-white/10 px-container"
        >
          <div className="mx-auto w-full max-w-7xl pt-28">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyber-400">
              0{index + 1}
            </p>
            <h1 className="text-4xl font-semibold sm:text-6xl">{section.label}</h1>
          </div>
        </section>
      ))}
    </main>
  );
}

export default App;
