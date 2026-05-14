import { useState } from "react"

type RuleFn = (value: string) => string

type Props = {
   label: string
   name: string
   value: string
   onChange: (name: string, value: string) => void
   rules?: RuleFn[]
   type?: "text" | "textarea"
} & Omit<
   React.InputHTMLAttributes<HTMLInputElement>,
   "onChange" | "value"
> &
   Omit<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      "onChange" | "value"
   >

const AppInput = ({
   label,
   name,
   value,
   onChange,
   rules = [],
   type = "text",
   ...props
}: Props) => {
   const [error, setError] = useState("")

   const validate = (val: string) => {
      for (const rule of rules) {
         const message = rule(val)
         if (message) {
            setError(message)
            return false
         }
      }

      setError("")
      return true
   }

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      const val = e.target.value

      onChange(name, val)
      validate(val)
   }

   const baseClass = `
      p-3 border-3 rounded-none font-bold focus:outline-none w-full
      ${error ? "border-red-600" : "border-black"}
   `


   return (
      <div className="flex flex-col gap-2">
         <label className="text-xs font-bold text-primary">
            {label}
         </label>

         {type === "textarea" ? (
            <textarea
               value={value}
               onChange={handleChange}
               className={baseClass}
               rows={5}
               {...props}
            />
         ) : (
            <input
               value={value}
               onChange={handleChange}
               className={baseClass}
               {...props}
            />
         )}

         {error && (
            <span className="text-sm text-red-600">
               {error}
            </span>
         )}
      </div>
   )
}

export default AppInput