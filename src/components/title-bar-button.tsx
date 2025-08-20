import { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLButtonElement> {
	active: boolean;
}

function TitleBarButton({ children, active, className, ...props }: Props) {
	return (
		// @ts-ignore
		<button
			className={`flex h-6 w-6 cursor-pointer items-center justify-center rounded-md transition-all select-none ${active ? "bg-[#ffffff33]" : "hover:bg-[#ffffff1A]"} ${className}`}
			{...props}
		>
			{children}
		</button>
	);
}

export default TitleBarButton;
