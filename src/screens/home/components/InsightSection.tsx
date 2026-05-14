import { CheckCircle } from "lucide-react"
import { parseTimeToLocalDate } from "../../../helpers/time"
import AppButton from "../../../components/AppButton"

const InsightSection = () => {
   const certificates = [
      {
         name: "DICODING INDONESIA",
         description: "Export Frontend Developer Path"
      },
      {
         name: "GOOGLE CLOUD CERTIFICATION",
         description: "Foundations in Cloud Engineering"
      }
   ]

   const blogs = [
      {
         title: "WHY NEO-BRUTALISM IS TAKING OVER THE MODERN WEB?",
         content: "Exporting the shift from minimalist soft shadows to bold, high-contrast structural desgins, the shift from minimalist soft shadows to bold, high-contrast structural desgins",
         createdAt: "2026-04-21T10:30:00Z"
      }
   ]

   const _renderCertificates = (certificates) => (
      <>
         {certificates.map((certificate, index) => (
            <div
               key={index}
               className="border-3 border-primary p-3 flex gap-6"
            >
               <div className="p-2 border-3 shadow-[6px_6px_0_0_rgba(28,27,26,1)]">
                  <CheckCircle
                     className="w-6 h-6"
                  />
               </div>

               <div className="space-y-1">
                  <h3 className="font-bold">{certificate.name}</h3>
                  <p className="text-sm text-primary">{certificate.description}</p>
               </div>
            </div>
         ))}
      </>
   )

   return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-18">
         <div>
            <h2 className="underline md:no-underline underline-offset-10 decoration-[6px] font-bold text-5xl text-primary leading-16 md:leading-20">CERTIFICATES</h2>
            
            <div className="space-y-2 mt-12">
               {_renderCertificates(certificates)}
            </div>
         </div>

         <div>
            <h2 className="underline md:no-underline underline-offset-10 decoration-[6px] font-bold text-5xl text-primary leading-16 md:leading-20">LATEST_BLOGS</h2>

            <div className="mt-12">
               {blogs.map((blog, index) => (
                  <div
                     key={index}
                     className="border-3 shadow-[6px_6px_0_0_rgba(28,27,26,1)] bg-[#FDF8E1] p-3 space-y-4"
                  >
                     <span className="text-primary opacity-60 text-xs font-bold">{parseTimeToLocalDate(blog.createdAt)}</span>
                     <h3 className="text-primary text-xl font-bold">{blog.title}</h3>
                     <p className="text-primary text-sm">{blog.content}</p>

                     <AppButton 
                        label="READ FULL POST"
                        link="www.google.com"
                        className="text-primary font-extrabold bg-transparent border-none underline p-0! underline-offset-2"
                        onClick={() => {}}
                     />
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default InsightSection;