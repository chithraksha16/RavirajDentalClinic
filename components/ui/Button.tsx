import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    className?: string;
    size?: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
    children,
    className = "",
    size = "md",
    ...props
}: ButtonProps) => {
    const baseStyles =
        "rounded font-medium font-heading text-[14px] transition-all duration-200 flex items-center justify-center";


    const sizes = {
        sm: "px-3 py-2 text-sm",
        md: "px-5 py-2 text-base",
        lg: "px-6 py-3 text-lg",
    };

    return (
        <button
            className={`${baseStyles}  ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;