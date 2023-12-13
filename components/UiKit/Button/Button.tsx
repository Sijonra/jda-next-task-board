import React, { FC } from "react";
import style from "./Button.module.scss";
interface ButtonProps {
	className?: string;
	type: string;
	icon?: boolean;
	plusLeft?: boolean;
	plusRight?: boolean;
	iDownLeft?: boolean;
	iDownRight?: boolean;
	children?: React.ReactNode;
	onClick?: () => void;
}

const Button: FC<ButtonProps> = ({
	className,
	type,
	plusLeft,
	plusRight,
	iDownLeft,
	iDownRight,
	children,
	onClick,
}) => {
	return (
		<div>
			<button
				onClick={onClick}
				className={
					style["button"] +
					" " +
					style["button__" + type] +
					" " +
					className
				}
			>
				{plusLeft ? (
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.75 5.25H6.75V2.25C6.75 1.8375 6.4125 1.5 6 1.5C5.5875 1.5 5.25 1.8375 5.25 2.25V5.25H2.25C1.8375 5.25 1.5 5.5875 1.5 6C1.5 6.4125 1.8375 6.75 2.25 6.75H5.25V9.75C5.25 10.1625 5.5875 10.5 6 10.5C6.4125 10.5 6.75 10.1625 6.75 9.75V6.75H9.75C10.1625 6.75 10.5 6.4125 10.5 6C10.5 5.5875 10.1625 5.25 9.75 5.25Z"
							fill="white"
						/>
					</svg>
				) : (
					""
				)}
				{iDownLeft ? (
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 4.5C9 4.29 8.835 4.125 8.625 4.125H3.375C3.165 4.125 3 4.29 3 4.5C3 4.5975 3.0375 4.68 3.0975 4.7475L5.7225 7.7475C5.79 7.8225 5.8875 7.875 6 7.875C6.1125 7.875 6.21 7.8225 6.2775 7.7475L8.9025 4.7475C8.9625 4.68 9 4.5975 9 4.5Z"
							fill="white"
						/>
					</svg>
				) : (
					""
				)}
				<span>{children}</span>
				{plusRight ? (
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.75 5.25H6.75V2.25C6.75 1.8375 6.4125 1.5 6 1.5C5.5875 1.5 5.25 1.8375 5.25 2.25V5.25H2.25C1.8375 5.25 1.5 5.5875 1.5 6C1.5 6.4125 1.8375 6.75 2.25 6.75H5.25V9.75C5.25 10.1625 5.5875 10.5 6 10.5C6.4125 10.5 6.75 10.1625 6.75 9.75V6.75H9.75C10.1625 6.75 10.5 6.4125 10.5 6C10.5 5.5875 10.1625 5.25 9.75 5.25Z"
							fill="white"
						/>
					</svg>
				) : (
					""
				)}
				{iDownRight ? (
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9 4.5C9 4.29 8.835 4.125 8.625 4.125H3.375C3.165 4.125 3 4.29 3 4.5C3 4.5975 3.0375 4.68 3.0975 4.7475L5.7225 7.7475C5.79 7.8225 5.8875 7.875 6 7.875C6.1125 7.875 6.21 7.8225 6.2775 7.7475L8.9025 4.7475C8.9625 4.68 9 4.5975 9 4.5Z"
							fill="white"
						/>
					</svg>
				) : (
					""
				)}
			</button>
		</div>
	);
};

export default Button;
