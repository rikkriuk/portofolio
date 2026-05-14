export const isYearDateNotPassed = (date: number) => {
   const currentYear = new Date().getFullYear();
   return date > currentYear;
}

export const parseTimeToLocalDate = (
   date: string | number | Date,
   locale = "id-ID"
) => {
   const newDate = new Date(date);

   if (isNaN(newDate.getTime())) {
      return "Invalid Date";
   }

   return newDate.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
   });
};