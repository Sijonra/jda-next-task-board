import style from "./Toast.module.scss";
import { FC } from "react";

interface ToastProps {
	className?: string;
	text?: string;
	title: string;
	type: "info" | "warning" | "danger" | "success";
}

const Toast: FC<ToastProps> = ({ className, type, title, text }) => {
	return (
		<div
			className={
				style["toast"] + " " + style["toast__" + type] + " " + className
			}
		>
			<div className={style["toast__heading"]}>
				{type === "success" && (
					<svg
						className={style["toast__icon"]}
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M0 7C0 10.8675 3.1325 14 7 14C10.8675 14 14 10.8675 14 7C14 3.1325 10.8675 0 7 0C3.1325 0 0 3.1325 0 7ZM9.87875 4.62875C10.0363 4.47125 10.255 4.375 10.5 4.375C10.9812 4.375 11.375 4.76875 11.375 5.25C11.375 5.495 11.2788 5.71375 11.1213 5.87125L6.74625 10.2463C6.58875 10.4037 6.37 10.5 6.125 10.5C5.88 10.5 5.66125 10.4037 5.50375 10.2463L2.87875 7.62125C2.72125 7.46375 2.625 7.245 2.625 7C2.625 6.51875 3.01875 6.125 3.5 6.125C3.745 6.125 3.96375 6.22125 4.12125 6.37875L6.125 8.39125L9.87875 4.62875Z"
							fill="#47B881"
						/>
					</svg>
				)}

				{type === "warning" && (
					<svg
						className={style["toast__icon"]}
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M13.8645 11.8125L13.8732 11.8038L7.75205 1.30375L7.74331 1.3125C7.59465 1.05 7.32357 0.875 7.00002 0.875C6.67647 0.875 6.41414 1.05 6.25674 1.3125L6.24799 1.30375L0.126818 11.8038L0.135563 11.8125C0.0568617 11.9438 0.00439453 12.0837 0.00439453 12.25C0.00439453 12.7312 0.397899 13.125 0.878848 13.125H13.1212C13.6021 13.125 13.9957 12.7312 13.9957 12.25C13.9957 12.0837 13.9432 11.9438 13.8645 11.8125ZM7.87448 11.3663H6.12557V9.61625H7.87448V11.3663ZM6.12557 8.74125H7.87448V4.36625H6.12557V8.74125Z"
							fill="#D9822B"
						/>
					</svg>
				)}

				{type === "danger" && (
					<svg
						className={style["toast__icon"]}
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M7.00002 0.00436401C3.13494 0.00436401 0.00439453 3.13491 0.00439453 6.99999C0.00439453 10.8651 3.13494 13.9956 7.00002 13.9956C10.8651 13.9956 13.9957 10.8651 13.9957 6.99999C13.9957 3.13491 10.8651 0.00436401 7.00002 0.00436401ZM7.87448 11.3723H6.12557V9.62335H7.87448V11.3723ZM6.12557 8.7489H7.87448V2.62772H6.12557V8.7489Z"
							fill="#EC4C47"
						/>
					</svg>
				)}

				{type === "info" && (
					<svg
						className={style["toast__icon"]}
						width="14"
						height="14"
						viewBox="0 0 14 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M7 0C3.1325 0 0 3.1325 0 7C0 10.8675 3.1325 14 7 14C10.8675 14 14 10.8675 14 7C14 3.1325 10.8675 0 7 0ZM7.875 2.625V4.375H6.125V2.625H7.875ZM5.25 10.5V11.375H8.75V10.5H7.875V5.25H5.25V6.125H6.125V10.5H5.25Z"
							fill="#1070CA"
						/>
					</svg>
				)}

				<span className={style["toast__title"]}>{title}</span>

				<svg
					className={style["toast__close"]}
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M7.0575 6L9.525 3.5325C9.6675 3.3975 9.75 3.21 9.75 3C9.75 2.5875 9.4125 2.25 9 2.25C8.79 2.25 8.6025 2.3325 8.4675 2.4675L6 4.9425L3.5325 2.4675C3.3975 2.3325 3.21 2.25 3 2.25C2.5875 2.25 2.25 2.5875 2.25 3C2.25 3.21 2.3325 3.3975 2.4675 3.5325L4.9425 6L2.475 8.4675C2.3325 8.6025 2.25 8.79 2.25 9C2.25 9.4125 2.5875 9.75 3 9.75C3.21 9.75 3.3975 9.6675 3.5325 9.5325L6 7.0575L8.4675 9.525C8.6025 9.6675 8.79 9.75 9 9.75C9.4125 9.75 9.75 9.4125 9.75 9C9.75 8.79 9.6675 8.6025 9.5325 8.4675L7.0575 6Z"
						fill="#66788A"
					/>
				</svg>
			</div>
			<div className={style["toast__text"]}>
				{text && <div>{text}</div>}
			</div>
		</div>
	);
};

export default Toast;
