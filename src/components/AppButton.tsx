
type AppButtonProps = {
   label: string | React.ReactNode;
   type?: "primary" | "secondary" | "tertiary";
   onClick: () => void;
   className?: string;
   link?: string;
}

const AppButton = (props: AppButtonProps) => {
   const { label, type = "primary", onClick, className, link } = props;
   let buttonClassName = "border-2 border-primary py-2.5 px-3.5 font-bold text-base cursor-pointer transition-all duration-200";

   switch (type) {
      case "primary":
         buttonClassName += " bg-[#F1EDEA]";
         break;
      case "secondary":
         buttonClassName += " bg-secondary text-[#500050] shadow-[6px_6px_0_0_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none";
         break;
      case "tertiary":
         buttonClassName += " bg-[#FE00FE] border-4 border-primary";
         break;
      default:
         break;
   }

   if (className) {
      buttonClassName += ` ${className}`;
   }

   if (link) {
      return (
         <a 
            href={link} 
            className={buttonClassName}
         >
            {label}
         </a>
      );
   }

   return (
      <button
         className={buttonClassName}
         onClick={onClick}
      >
         {label}
      </button>
   )
}

export default AppButton;