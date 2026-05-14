import { isYearDateNotPassed } from "../../../helpers/time";

const WorkSection = () => {
   const workExperiences = [
      {
         companyName: "PT VANZ INOVATIF TEKNOLOGI (qbit)",
         companyLogo: "https://images.glints.com/unsafe/glints-dashboard.oss-ap-southeast-1.aliyuncs.com/company-logo/05141bda82f92b922de8349074746908.png",
         companyAddress: "Jakata, Indonesia",
         roles: [
            {
               name: "SOFTWARE DEVLOPER",
               position: "FULLTIME",
               startAt: 2026,
               endAt: 2027,
               description: "Leading frontend architecture and implementing robust backend features for enterprise-level inventory management systems. Optimized performance by 40% using Next.js."
            },
            {
               name: "FULLSTACK DEVELOPER",
               position: "INTERNSHIP",
               startAt: 2025,
               endAt: 2026,
               description: "Assisted in developing UI components and integrating REST APIs. Contributed to 3 major client projects using React and Tailwind CSS."
            }
         ]
      }
   ]

   const _renderDetailPosition = (startAt: number, endAt: number, position: string) => {
      const isOngoing = isYearDateNotPassed(endAt);
      const label = isOngoing 
         ? `${position} | ${startAt} - PRESENT`
         : `${position} | ${startAt} - ${endAt}`

      const className = isOngoing
         ? "text-[#626200]"
         : "text-primary opacity-50"

      return { label, className };
   }

   const _renderRoleItem = (role, index: number) => {
      const { label, className } = _renderDetailPosition(role.startAt, role.endAt, role.position);
      return (
         <div
            key={index}
            className="border-l-2 border-primary space-x-1 md:space-y-2"
         >
            <div className="pl-10">
               <h4 className="text-prmary font-bold text-lg md:text-xl">{role.name}</h4>
               <span className={`font-extrabold text-[10px] md:text-sm ${className}`}>{label}</span>
            </div>
            <p className="pl-10 text-primary text-xs md:text-base">{role.description}</p>
         </div>
      )
   }

   const _renderWorkItem = (job, index: number) => (
      <div
         key={index}
         className="grid grid-cols-1 md:grid-cols-[30%_70%] gap-8 md:gap-4"
      >
         <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
            <img 
               src={job.companyLogo} 
               alt={job.companyName} 
               className="w-14 border-2 border-primary shadow-[6px_6px_0_0_rgba(28,27,26,1)]"
            />
            <div>
               <h3 className="font-bold text-xl md:text-[32px]">{job.companyName}</h3>
               <p className="text-secondary text-normal md:text-base font-bold">{job.companyAddress}</p>
            </div>
         </div>

         <div className="space-y-14">
            {job.roles.map((role, index) => (
               _renderRoleItem(role, index)
            ))}
         </div>
      </div>
   )

   return (
      <section>
         <h2 className="underline md:no-underline underline-offset-10 decoration-[6px] font-bold text-5xl text-primary leading-16 md:leading-20">WORK EXPERIENCE</h2>
         <div className="mt-12 p-6 md:p-12 border-4 shadow-[6px_6px_0_0_rgba(28,27,26,1)] bg-[#FFFFFF]">
            {workExperiences.map((job, index) => (
               _renderWorkItem(job, index)
            ))}
         </div>
      </section>
   )
}

export default WorkSection;