import AppButton from "../../../components/AppButton";
import Icon from "../../../assets/hero.png"
import Badge from "../../../components/Badge";

const HeroSection = () => {
   return (
      <section className="flex justify-between items-center gap-10 min-h-[92vh] px-48">
         <div className="space-y-7 flex-1">
            <Badge
               label="HELLO WORLD!"
               className="-rotate-3"
            />

            <div>
               <h2 
                  className="text-primary text-[80px] font-extrabold leading-20"
               >
                  BUILDING
                  <span className="text-secondary"> DIGITAL</span> 
                  <br />
                  REALMS
               </h2>
            </div>

            <div>
               <p className="text-xl font-medium text-primary">Frontend Developer | Fullstack Developer | UI/UX Enthusiast. I craft high-performance web experiences with structural honesty and bold personality.
               </p>
            </div>

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
         </div>

         <div className="flex-1 justify-end items-center flex">
            <div className="h-117.5 w-117.5 border-t-8 border-4 rotate-3 border-primary shadow-[12px_12px_0_0_rgba(28,27,26,1)] relative">
               <img src={Icon} alt="" className="w-full h-full object-cover" />

               <Badge
                  label="Available For Work"
                  className="absolute -left-1 -bottom-6 -rotate-4 z-0"
                  type="secondary"
                  color="bg-[#E6E2DF]"
               />
            </div>
         </div>
      </section>
   )
}

export default HeroSection;