import { randromNumber } from "../../../helpers/item";

const StackSection = () => {
   const stack = [
      {
         name: "REACT.JS",
         icon: "/assets/stack/react.png",
         proficiency: 90,
         backgroundColor: "#E7E3CC",
         rotate: randromNumber(-3, 3)
      },
      {
         name: "NEXT.JS",
         icon: "/assets/stack/nextjs.png",
         proficiency: 85,
         backgroundColor: "#FFFF65",
         rotate: randromNumber(-3, 3)
      },
      {
         name: "TYPESCRIPT",
         icon: "/assets/stack/typescript.png",
         proficiency: 80,
         backgroundColor: "#FFD7F5",
         rotate: randromNumber(-3, 3)
      },
      {
         name: "NODE.JS",
         icon: "/assets/stack/nodejs.png",
         proficiency: 75,
         backgroundColor: "#FDF8E1",
         rotate: randromNumber(-3, 3)
      },
      {
         name: "PYTHON",
         icon: "/assets/stack/python.png",
         proficiency: 70,
         backgroundColor: "#EBE7E4",
         rotate: randromNumber(-3, 3)
      },
      {
         name: "MONGO DB",
         icon: "/assets/stack/mongodb.png",
         proficiency: 65,
         backgroundColor: "#C1E1C1",
         rotate: randromNumber(-3, 3)
      },
      {
         name: "DOCKER",
         icon: "/assets/stack/docker.png",
         proficiency: 60,
         backgroundColor: "#B0E0E6",
         rotate: randromNumber(-3, 3)
      },
      {
         name: "AWS",
         icon: "/assets/stack/aws.png",
         proficiency: 55,
         backgroundColor: "#F0E68C",
         rotate: randromNumber(-3, 3)
      }
   ]

   const _renderCardItem = (tech: typeof stack[0]) => (
      <div
         key={tech.name}
         style={
            {
               backgroundColor: tech.backgroundColor,
               "--rotate": `${tech.rotate}deg`,
            } as React.CSSProperties
         }
         className="
            px-6 py-10
            flex flex-col gap-3
            border-[3px] border-primary
            shadow-[6px_6px_0_0_rgba(28,27,26,1)]
            transform-[rotate(var(--rotate))]
            hover:transform-[rotate(0deg)]
            transition-transform duration-300
         "
      >
         <img src={tech.icon} alt={`${tech.name} icon`} />
         <p className="font-bold text-primary">{tech.name}</p>
         <div className="w-full bg-gray-300 rounded-full h-2.5">
            <div
               className="h-2.5 bg-secondary"
               style={{ width: `${tech.proficiency}%` }}
            ></div>
         </div>
      </div>
   )

   return (
      <section className="space-y-10">
         <div className="flex justify-between items-center">
            <h2 className="underline md:no-underline underline-offset-10 decoration-[6px] font-bold text-5xl text-primary">TECH STACK</h2>
            <p className="hidden md:block font-bold text-primary">Proficiency Overall</p>
         </div>

         <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
         >
            {stack.map((tech) => (
               _renderCardItem(tech)
            ))}
         </div>
      </section>
   )
}

export default StackSection;