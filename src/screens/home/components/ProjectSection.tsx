import AppButton from "../../../components/AppButton";
import Badge from "../../../components/Badge";

const ProjectSection = () => {
   const menuTabs = [
      { label: "ALL",      value: "all"      },
      { label: "FRONTEND", value: "frontend" },
      { label: "BACKEND",  value: "backend"  },
   ];

   const projectRows = [
      {
         height: "md:h-[60vh]",
         cols: "md:grid-cols-[7fr_3fr]",
         projects: [
            {
               title: "APLIKASI PROJECT MANAGEMENT",
               description: "A real-time data visualization platform built with Next.js and Go. A real-time data visualization platform built with Next.js and Go.",
               image: "https://askarasoft.com/wp-content/uploads/2024/02/project-management-1024x561.png",
               className: "",
            },
            {
               imageFlex: "flex-1 md:flex-1",
               contentFlex: "flex-1 md:flex-2",
               title: "APLIKASI PROJECT MANAGEMENT",
               description: "A real-time data visualization platform built with Next.js and Go. A real-time data visualization platform built with Next.js and Go.",
               image: "https://askarasoft.com/wp-content/uploads/2024/02/project-management-1024x561.png",
               className: "md:-rotate-1",
            },
         ],
      },
      {
         height: "md:h-[43vh]",
         cols: "md:grid-cols-[3fr_7fr]",
         projects: [
            {
               title: "APLIKASI PROJECT MANAGEMENT",
               description: "A real-time data visualization platform built with Next.js and Go. A real-time data visualization platform built with Next.js and Go.",
               image: "https://askarasoft.com/wp-content/uploads/2024/02/project-management-1024x561.png",
               className: "rotate-1",
            },
            {
               title: "APLIKASI PROJECT MANAGEMENT",
               description: "A real-time data visualization platform built with Next.js and Go. A real-time data visualization platform built with Next.js and Go.",
               image: "https://askarasoft.com/wp-content/uploads/2024/02/project-management-1024x561.png",
               className: "md:-rotate-3",
            },
         ],
      },
   ];

   const _renderMenuTabs = (tabs) => (
      <>
         {tabs.map((tab) => (
            <AppButton
               key={tab.value}
               label={tab.label}
               onClick={() => {}}
               className="text-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors duration-300"
            />
         ))}
      </>
   );

   const _renderProjectCard = (project, index) => (
      <div
         key={index}
         className={`
            ${project.className}
            group
            border-4 border-primary text-white
            shadow-[6px_6px_0_0_rgba(28,27,26,1)]
            flex flex-col h-auto md:h-full overflow-hidden
            cursor-pointer
            transition-transform duration-300 hover:rotate-0
         `}
      >
         <div className={`bg-[#34484A] flex-1 ${project.imageFlex ?? "md:flex-2"} overflow-hidden`}>
            <img
               src={project.image}
               alt={project.title}
               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
         </div>

         <div className={`relative ${project.contentFlex ?? "flex-1"} px-6 py-4 space-y-2`}>
            <div className="flex flex-col items-start md:flex-row justify-between gap-2">
               <h3 className="font-bold text-2xl text-primary leading-tight line-clamp-2 md:line-clamp-1">
                  {project.title}
               </h3>

               <Badge 
                  label="FULLSTACK"
                  className="bg-secondary! -rotate-1 text-white"
               />
            </div>
            <p className="text-primary text-sm line-clamp-3 md:line-clamp-2">
               {project.description}
            </p>
            <div className="hidden md:flex absolute left-3 bottom-4 overflow-hidden max-w-[90%]">
               <AppButton
                  label="View Project"
                  onClick={() => {}}
                  link="www.google.com"
                  className="text-primary border-none bg-transparent underline truncate"
               />
               <AppButton
                  label="Source Code"
                  onClick={() => {}}
                  link="www.github.com"
                  className="text-primary border-none bg-transparent underline truncate"
               />
            </div>
         </div>
      </div>
   );

   const _renderProjectRow = (row, rowIndex) => (
      <div
         key={rowIndex}
         className={`bg-[#FFFFFF] grid grid-cols-1 ${row.cols} h-auto ${row.height} gap-8`}
      >
         {row.projects.map((project, projectIndex) =>
            _renderProjectCard(project, projectIndex)
         )}
      </div>
   );

   return (
      <section className="space-y-10">

         <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
            <h2 className="underline md:no-underline underline-offset-10 decoration-[6px] font-bold text-5xl text-primary">MY PROJECTS</h2>
            <div className="flex gap-2">
               {_renderMenuTabs(menuTabs)}
            </div>
         </div>

         <div className="grid gap-8">
            {projectRows.map(_renderProjectRow)}
         </div>

      </section>
   );
};

export default ProjectSection;