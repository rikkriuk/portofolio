export const validationRules = {
   required: (name: string) => (value: string) => {
      if (!value || value.trim() === "") {
         return name + " wajib diisi"
      }
      return ""
   },

   email: (message = "Email tidak valid") => (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

      if (!emailRegex.test(value)) {
         return message
      }

      return ""
   },

   min: (minLength: number, message?: string) => (value: string) => {
      if (value.length < minLength) {
         return message || `Minimal ${minLength} karakter`
      }
      return ""
   },
}