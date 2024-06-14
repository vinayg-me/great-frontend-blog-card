import { MouseEventHandler } from "react";

interface ButtonProps {
    label: string;
    rightAddOnIcon?: React.ReactNode;
    onClick: MouseEventHandler<HTMLAnchorElement>;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { label, rightAddOnIcon, onClick } = props;
    return (
        <a onClick={onClick} className="flex flex-row justify-evenly items-center max-w-[128px]">
            <p className="text-indigo-700 hover:text-indigo-800 font-medium">{label}</p>
            {rightAddOnIcon && (<span className="hover:text-indigo-800">{rightAddOnIcon}</span>)}
        </a>
    )
};