type BadgeProps = {
  label: string;
  color?: string;
  type?: "primary" | "secondary";
  className?: string;
};

export default function Badge({
  label,
  color = "bg-tertiary",
  type = "primary",
  className = "",
}: BadgeProps) {
  return (
    <div
      className={`
        py-1 px-3 inline-block border-2 border-primary
        ${color}
        ${type === "secondary" ? "shadow-[6px_6px_0_0_rgba(28,27,26,1)]" : ""}
        ${className}
      `}
    >
      <p className="font-bold text-base">{label}</p>
    </div>
  );
}