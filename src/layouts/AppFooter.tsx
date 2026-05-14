import AppButton from "../components/AppButton"

const AppFooter = () => {
   const socialMedia = [
      {
         name: "GITHUB",
         url: "google.com"
      },
      {
         name: "LINKEDIN",
         url: "google.com"
      },
      {
         name: "TWITTER",
         url: "google.com"
      },
      {
         name: "EMAIL",
         url: "google.com"
      }
   ]
   return (
      <footer className="flex flex-col text-center md:text-start gap-4 md:gap-0 md:flex-row justify-between items-center border-t-4 border-primary py-10 px-6 mt-32 bg-[#E6E2DF]">
         <div>
            <h4 className="text-[32px] font-extrabold">DEV_PORTFOLIO</h4>
         </div>

         <div className="space-y-4">
            <div className="flex justify-center md:justify-between gap-8 md:gap-4">
               {socialMedia.map((media) => (
                  <AppButton 
                     label={media.name}
                     onClick={() => {}}
                     link={media.url}
                     className="border-none bg-transparent p-0! underline underline-offset-2 text-sm md:text-base"
                  />
               ))}
            </div>

            <div>
               <p className="text-primary opacity-60 text-[10px] md:text-base font-bold">© 2024 DEV_PORTFOLIO. BUILT WITH RAW NERVE.</p>
            </div>
         </div>
      </footer>
   )
}

export default AppFooter;