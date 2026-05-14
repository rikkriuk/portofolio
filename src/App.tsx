import { useState } from "react";
import AppNavbar from "./layouts/AppNavbar";
import HomePage from "./screens/home"
import AppFooter from "./layouts/AppFooter";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <AppNavbar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      
      <main 
        className={`
          bg-[#FDF8F5] overflow-hidden px-4 lg:px-24 xl:px-48 space-y-16 transition-all duration-300
          ${isSidebarOpen ? "blur-sm pointer-events-none" : ""}
        `}
      >
        <HomePage />
      </main>

      <AppFooter />
    </>
  )
}

export default App;