import AppButton from "../../../components/AppButton";
import Icon from "../../../assets/hero.png"
import Badge from "../../../components/Badge";
import { Star } from "lucide-react";

const HeroSection = () => {
   return (
      <section className="relative flex justify-between items-center md:gap-10 min-h-[92vh] flex-col-reverse lg:flex-row">
         <div className="space-y-7 flex-1">
            <Badge
               label="HELLO WORLD!"
               className="-rotate-6 md:-rotate-3 absolute md:static left-2 top-4 md:inline-block"
            />

            <div>
               <h2 
                  className="text-primary text-5xl md:text-[80px] font-extrabold leading-14 md:leading-20 text-center md:text-start"
               >
                  BUILDING
                  <Badge 
                     label="DIGITAL" 
                     size={48}
                     className="md:hidden inline-block border-4 py-0! px-1!"
                  />
                  <span className="text-secondary hidden md:inline"> DIGITAL</span> 
                  <br />
                  REALMS
               </h2>
            </div>

            <div>
               <p 
                  className="text-xl font-medium text-primary text-center md:text-start"
               >
                  Frontend Developer | Fullstack Developer | UI/UX Enthusiast. I craft high-performance web experiences with structural honesty and bold personality.
               </p>
            </div>

            <div className="flex flex-col-reverse md:flex-row gap-6">
               <AppButton 
                  label="Resume"
                  type="secondary"
                  onClick={() => {}}
                  className="text-primary bg-[#FDF8E1]! text-[32px] p-4!"
               />

               <AppButton 
                  label="Hire Me"
                  type="secondary"
                  onClick={() => {}}
                  className="text-white text-[32px] p-4!"
               />
            </div>
         </div>

         <div className="flex-1 justify-end items-center flex">
            <div className="h-48 w-48 md:h-117.5 md:w-117.5 border-t-8 border-4 rotate-3 border-primary shadow-[12px_12px_0_0_rgba(28,27,26,1)] relative">
               <img src={Icon} alt="" className="w-full h-full object-cover" />

               <Badge
                  label="Available For Work"
                  className="hidden md:inline-block absolute -left-1 -bottom-6 -rotate-3 z-0 py-2"
                  type="secondary"
                  color="bg-[#FDF8E1]"
               />

               <Badge
                  icon={<Star size={22} className="text-white" />}
                  className="hidden md:inline-block absolute -right-1 -top-6 -rotate-3 z-0 py-6 px-6 rounded-full"
                  type="secondary"
                  color="bg-[#626200]"
               />
            </div>
         </div>
      </section>
   )
}

export default HeroSection;