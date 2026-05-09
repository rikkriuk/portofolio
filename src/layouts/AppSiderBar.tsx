import AppButton from "../components/AppButton";
import { X } from "lucide-react";
import Badge from "../components/Badge";
import { isLastItemOfNavItems } from "../helpers/item";

type AppSiderBarProps = {
   onClose: () => void;
}

const AppSiderBar = ({ onClose }: AppSiderBarProps) => {
   const navItems = [
      { name: "Stack", href: "/stack" },
      { name: "Projects", href: "/projects" },
      { name: "Experience", href: "/experience" },
      { name: "Contact", href: "/blog" }
   ];

   return (
      <aside className="relative z-10 bg-[#FDF8F5] border w-[80vw] h-screen p-6 space-y-10">
         <div className="flex justify-between">
            <h1 className="font-extrabold text-[32px]">Menu</h1>

            <AppButton 
               label={<X size={20} />}
               onClick={onClose}
               type="tertiary"
            />
         </div>

         <div className="relative z-10 flex flex-col gap-6">
            {navItems.map((item, index) => (
               <AppButton 
                  key={item.href}
                  label={item.name.toUpperCase()}
                  link={item.href}
                  onClick={() => {}}
                  className={`text-5xl! py-5 ${isLastItemOfNavItems(index, navItems) ? "bg-secondary text-white" : "bg-[#FFFFFF]"}`}
               /> 
            ))}
         </div>
         
         <Badge 
            label="NAVIGATE"
            type="secondary"
            className="rotate-12 absolute right-2 top-22 z-10"
         />

         <Badge 
            label="LET'S GO!"
            type="secondary"
            className="-rotate-10 absolute left-10 top-78 bg-secondary! text-white"
         />
      </aside>
   )
}

export default AppSiderBar;