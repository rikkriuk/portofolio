import AppButton from "../components/AppButton";
import AppSiderBar from "./AppSiderBar";
import { Menu } from "lucide-react";

type AppNavbarProps = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AppNavbar = ({
  isSidebarOpen,
  setIsSidebarOpen,
}: AppNavbarProps) => {
   const navItems = [
      { name: "Stack", href: "/stack" },
      { name: "Projects", href: "/projects" },
      { name: "Experience", href: "/experience" },
      { name: "Contact", href: "/blog" }
   ];

   const handleSidebarToggle = () => {
      setIsSidebarOpen((prev) => !prev);
   }

   return (
      <header 
         className={`overflow-hidden flex justify-between items-center h-[8vh] px-8 lg:px-24 xl:px-48 border-b-4 border-primary shadow-[6px_6px_0_0_rgba(28,27,26,1)]`}
      >
         <div>
            <h1 className="font-extrabold text-[32px]">PORTFOLIO_v1.0</h1>
         </div>

         <nav className="hidden md:flex gap-5 items-center">
            {navItems.map((item) => (
               <a 
                  key={item.href} 
                  href={item.href} 
                  className="font-bold text-sm hover:text-secondary hover:underline"
               >
                  {item.name}
               </a>
            ))}
         </nav>

         <AppButton 
            label={<Menu size={20} />}
            className="bg-tertiary border-4 md:hidden"
            onClick={handleSidebarToggle}
         />

         <div className="hidden md:flex gap-6">
            <AppButton 
               label="Resume"
               onClick={() => {}}
            />

            <AppButton 
               label="Hire Me"
               type="secondary"
               onClick={() => {}}
            />
         </div>
         
         <div 
            className={`fixed top-0 bottom-0 right-0 z-10 md:hidden transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
         >
            <AppSiderBar
               onClose={handleSidebarToggle}
            />
         </div>
      </header>
   )
}

export default AppNavbar;