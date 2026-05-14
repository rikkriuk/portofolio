import Badge from "../../../components/Badge";
import { isYearDateNotPassed } from "../../../helpers/time";

const EducationSection = () => {
   const educations = [
      {
         name: 'UNIVERSITY OF SIBER MUHAMMADIYAH',
         degree: 'Bachelor of Computer Science',
         startAt: 2026,
         endAt: 2030,
         rotate: '-rotate-1'
      },
      {
         name: 'MA AL - HIDAYAH',
         degree: 'Social Science',
         startAt: 2017,
         endAt: 2020,
         rotate: ''
      }
   ]

   const bootcamps = [
      {
         name: 'IDCAMP',
         serviceBy: 'INDOSAT OOREDOO',
         className: 'bg-[#FE00FE] text-primary -rotate-2',
      },
      {
         name: 'CANDRADIMUKA',
         serviceBy: 'JABAR DIGITAL SERVICE',
         className: 'bg-[#FFFF65] text-[#757500]',
      },
      {
         name: 'LUMOSHIVE',
         serviceBy: 'ENGINEERING FELLOW',
         className: 'bg-[#FDF8E1] text-[#74725F] rotate-1',
      },
      {
         name: 'SANBERCODE',
         serviceBy: 'INTENSIVE TRAINING',
         className: 'bg-[#E6E2DF] text-primary -rotate-1',
      }
   ]
   
   const _renderBadgelabelEducationStatus = (startAt: number, endAt: number) => {
      const isOngoing = isYearDateNotPassed(endAt);
      const label = isOngoing ? "CURRENT" : `${startAt} - ${endAt}`;
      return label;
   }

   const _renderBadgelabelEducationStyle = (endAt: number) => {
      const isOngoing = isYearDateNotPassed(endAt);
      return !isOngoing ? "border-[#7A776D]! text-[#7A776D] bg-transparent" : "";
   }

   const _renderEducations = (educations) => (
      <>
         {educations.map((education, index) => (
            <div 
               key={index} 
               className={`ml-14 bg-[#FFFFFF] p-4 border-4 border-primary shadow-[6px_6px_0_0_rgba(28,27,26,1)] space-y-2 ${education.rotate} relative`}
            >
               <Badge
                  label={_renderBadgelabelEducationStatus(education.startAt, education.endAt)}
                  className={`inline-block text-xs ${_renderBadgelabelEducationStyle(education.endAt)}`}
               />
               <h3 className="font-bold text-xl text-primary leading-tight line-clamp-2 md:line-clamp-1">
                  {education.name}
               </h3>
               <p className="text-primary text-base line-clamp-3 md:line-clamp-2">
                  {education.degree}
               </p>
            </div>
         ))}
      </>
   )

   const _renderBootcamps = (bootcamps) => (
      <>
         {bootcamps.map((bootcamp, index) => (
            <div 
               key={index} 
               className={`px-2 py-4 md:p-6 border-4 text-center shadow-[6px_6px_0_0_rgba(28,27,26,1)]! border-primary space-y-2 relative ${bootcamp.className}`}
            >
               <h3 className="font-bold text-lg text-primary leading-tight line-clamp-2 md:line-clamp-1">
                  {bootcamp.name}
               </h3>
               <p className="text-primary font-bold text-[10px] md:text-xs">
                  {bootcamp.serviceBy}
               </p>
            </div>
         ))}
      </>
   )

   return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-20">
         <div>
            <h2 className="underline md:no-underline underline-offset-10 decoration-[6px] font-bold text-5xl text-primary">EDUCATION</h2>
            <div className="border-l-4 mt-12 space-y-6">
               {_renderEducations(educations)}
            </div>
         </div>

         <div>
            <h2 className="underline md:no-underline underline-offset-10 decoration-[6px] font-bold text-5xl text-primary">BOOTCAMPS</h2>

            <div className="grid grid-cols-2 gap-6 mt-12">
               {_renderBootcamps(bootcamps)}
            </div>
         </div>
      </section>
   )
}

export default EducationSection;