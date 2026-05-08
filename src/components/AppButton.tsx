
type AppButtonProps = {
   label: string;
   type?: "primary" | "secondary";
   onClick: () => void;
}

const AppButton = (props: AppButtonProps) => {
   const { label, type = "primary", onClick } = props;
   let className = "border-2 border-[#1C1B1A] py-2.5 px-3.5 font-bold text-base cursor-pointer transition-all duration-200";

   switch (type) {
      case "primary":
         className += " bg-[#F1EDEA]";
         break;
      case "secondary":
         className += " bg-[#FE00FE] text-[#500050] shadow-[6px_6px_0_0_rgba(0,0,0,1)] active:translate-x-[6px] active:translate-y-[6px] active:shadow-none";
         break;
      default:
         break;
   }

   return (
      <button
         className={className}
         onClick={onClick}
      >
         {label}
      </button>
   )
}

export default AppButton;