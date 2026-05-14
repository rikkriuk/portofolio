import { MessageCircleCheck } from "lucide-react"
import AppInput from "../../../components/AppInput"
import { useState } from "react"
import { validationRules } from "../../../helpers/inputRules"
import AppButton from "../../../components/AppButton"

type ContantData = {
  name: string
  email: string
  description?: string
}

const ContantSection = () => {
   const [contactData, setContantData] = useState<ContantData>({
      name: "",
      email: "",
      description: ""
   })
   const socialMedia = [
      {
         logo: <MessageCircleCheck />,
         url: ""
      },
      {
         logo: <MessageCircleCheck />,
         url: ""
      },
      {
         logo: <MessageCircleCheck />,
         url: ""
      }
   ]

   const handleContantDataChange = <
      K extends keyof ContantData
   >(
      field: K,
      value: ContantData[K]
   ) => {
      setContantData((prev) => ({
         ...prev,
         [field]: value,
      }))
   }

   return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-18 p-6 px-4 md:p-16 lg:p-24 bg-primary shadow-[6px_6px_0_0_rgba(28,27,26,1)] md:-rotate-1">
         <div className="space-y-4">
            <h2 className="text-[56px] lg:text-[80px] font-extrabold text-[#E6E2DF] leading-16 lg:leading-22">
               LET'S 
               <br />
               BUILD 
               <br />
               <span className="text-tertiary">SOMETHING</span>
            </h2>

            <p className="text-[#E6E2DF] text-base md:text-xl">Ready to break the grid? Drop me a line and let's collaborate on your next digital venture.</p>

            <div className="flex gap-6 md:gap-8 mt-12">
               {socialMedia.map((media, index) => (
                  <div
                     key={index}
                     className="bg-[#FDF8F5] p-2 md:p-3"
                  >
                     {media.logo}
                  </div>
               ))}
            </div>
         </div>

         <div className="bg-[#FDF8F5] p-4 space-y-4 -rotate-1 md:rotate-0">
            <AppInput
               label="YOUR NAME"
               name="name"
               placeholder="John Doe"
               value={contactData.name}
               onChange={handleContantDataChange}
               rules={[validationRules.required("Name"), validationRules.min(3)]}
            />

            <AppInput
               label="EMAIL ADDRESS"
               name="email"
               placeholder="john@example.com"
               value={contactData.email}
               onChange={handleContantDataChange}
               rules={[validationRules.required("Email"), validationRules.email()]}
            />

            <AppInput
               label="PROJECT BRIEF"
               placeholder="Tell me about your realm..."
               type="textarea"
               name="description"
               value={contactData.description}
               onChange={handleContantDataChange}
            />

            <AppButton
               label="SEND MESSAGE"
               type="secondary"
               onClick={() => {}}
               className="bg-[#FE00FE]! text-[#500050]! w-full! text-xl py-4 md:py-6"
            />
         </div>
      </section>
   )
}

export default ContantSection;