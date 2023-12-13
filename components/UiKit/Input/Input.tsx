import style from "./Input.module.scss";
import { FC } from "react";

interface InputProps {
	type?: string;
	className?: string;
	placeholder?: string;
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ type, className, placeholder, value, onChange}) => {
	return (
		<div className={style["input"] + " " + className}>
			{type === "search" && (
				<svg
					className={style["input__icon"]}
					width="12"
					height="12"
					viewBox="0 0 12 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M9.66512 8.06871L11.6664 10.0775C11.8687 10.2798 11.9962 10.5647 11.9962 10.872C11.9962 11.4941 11.494 11.9963 10.8719 11.9963C10.5646 11.9963 10.2797 11.8688 10.0774 11.6665L8.06862 9.66521C7.25913 10.1824 6.29223 10.4972 5.25038 10.4972C2.3497 10.4972 0.00366211 8.15116 0.00366211 5.25047C0.00366211 2.34979 2.3497 0.00375366 5.25038 0.00375366C8.15107 0.00375366 10.4971 2.34979 10.4971 5.25047C10.4971 6.28483 10.1898 7.25172 9.66512 8.06871ZM1.50272 5.25047C1.50272 7.31918 3.18167 8.99813 5.25038 8.99813C7.31908 8.99813 8.99803 7.31918 8.99803 5.25047C8.99803 3.18177 7.31908 1.50282 5.25038 1.50282C3.18167 1.50282 1.50272 3.18177 1.50272 5.25047Z"
						fill="#66788A"
					/>
				</svg>
			)}
			<input type="text" onChange={onChange} value={value} placeholder={placeholder} />
		</div>
	);
};

export default Input;
