import AppButton from "../components/AppButton";

const AppNavbar = () => {
   const navItems = [
      { name: "Stack", href: "/stack" },
      { name: "Projects", href: "/projects" },
      { name: "Experience", href: "/experience" },
      { name: "Contact", href: "/blog" }
   ];

   return (
      <header className="flex justify-between items-center h-[8vh] px-48 border-b-4 border-primary shadow-[6px_6px_0_0_rgba(28,27,26,1)]">
         <div>
            <h1 className="font-extrabold text-[32px]">DEV_PORTFOLIO_v1.0</h1>
         </div>

         <nav className="flex gap-5 items-center">
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

         <div className="flex gap-6">
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
      </header>
   )
}

export default AppNavbar;