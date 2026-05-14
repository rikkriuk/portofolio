import ContantSection from "./components/ContantSection"
import EducationSection from "./components/EducationSection"
import HeroSection from "./components/HeroSection"
import InsightSection from "./components/InsightSection"
import ProjectSection from "./components/ProjectSection"
import StackSection from "./components/StackSection"
import WorkSection from "./components/WorkSection"

const HomePage = () => {
   return (
      <>
         <HeroSection />
         <StackSection />
         <ProjectSection />
         <EducationSection />
         <WorkSection />
         <InsightSection />
         <ContantSection />
      </>
   )
}

export default HomePage