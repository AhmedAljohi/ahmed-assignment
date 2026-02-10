import React from "react";

type ButtonVariant = "primary" | "success" | "danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick?: () => void;
  disabled?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 hover:bg-blue-700",
  success: "bg-[#166534] hover:bg-[#14532d]",
  danger: "bg-red-600 hover:bg-red-700",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "w-[72px] h-[32px] px-3 py-1 text-sm",
  md: "w-[85px] h-[40px] px-4 py-2 text-base",
  lg: "w-[112px] h-[48px] px-6 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        text-white
        font-medium
        rounded-md
        transition
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {children}
    </button>
  );
}
