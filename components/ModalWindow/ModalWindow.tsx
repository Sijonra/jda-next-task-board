import { FC } from "react";

import styles from './ModalWindow.module.scss';
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Button from "../Button/Button";
import Heading from "../Heading/Heading";

interface ModalWindowProps {
	closeModalWindowAccept: () => void;
	closeModalWindowDecline: () => void;
}

const ModalWindow: FC<ModalWindowProps> = ({closeModalWindowAccept, closeModalWindowDecline}) => {
	return (
		<div className={cx("modal")}>
			<div className={cx('modal-wrapper')}>
				<Heading type="oversized" className={cx('modal__warning')}>Are you sure, that you want delete this card?</Heading>
				<div className={cx('modal-buttons')}>
					<Button onClick={closeModalWindowAccept} className={cx('modal-buttons__accept')} type="danger">Yes</Button>
					<Button onClick={closeModalWindowDecline} className={cx('modal-buttons__decline')} type="regular">No</Button>
				</div>
			</div>
		</div>
	);
};

export default ModalWindow;
