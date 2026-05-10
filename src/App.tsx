import { useState } from "react";
import AppNavbar from "./layouts/AppNavbar";
import HomePage from "./screens/home"

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <main className="bg-[#FDF8F5] overflow-hidden">
      <AppNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div
        className={`
          px-8 lg:px-24 xl:px-48 space-y-16 transition-all duration-300 overflow-hidden
          ${isSidebarOpen ? "blur-sm pointer-events-none" : ""}
        `}
      >
        <HomePage />
      </div>
    </main>
  )
}

export default App;