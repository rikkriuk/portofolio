import type React from "react";

type BadgeProps = {
  label?: string;
  color?: string;
  icon?: React.ReactNode;
  type?: "primary" | "secondary";
  size?: number;
  className?: string;
};

export default function Badge({
  label,
  icon,
  color = "bg-tertiary",
  type = "primary",
  size = 16,
  className = "",
}: BadgeProps) {
  return (
    <div
      className={`
        py-1 px-3 border-2 border-primary
        ${color}
        ${type === "secondary" ? "shadow-[6px_6px_0_0_rgba(28,27,26,1)]" : ""}
        ${className}
      `}
    >
      {icon && <span className="flex items-center">{icon}</span>}

      {label && <p className={`font-bold text-[${size}px]`}>{label}</p>}
    </div>
  );
}