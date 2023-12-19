'use client';

import { FC } from 'react';

import styles from './BoardInput.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

import Input from '../UiKit/Input/Input';
import Button from '../UiKit/Button/Button';

interface IBoardInput {
	handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	addButtonSubmit: () => void;
	inputValue: string;
}

const BoardInputView: FC<IBoardInput> = ({
	handleInputChange,
	addButtonSubmit,
	inputValue,
}) => {
	return (
		<div className={cx('board-input')}>
			<Input
				onChange={handleInputChange}
				value={inputValue}
				className={cx('board-input__input')}
				placeholder='add new task'
			/>
			<Button
				onClick={addButtonSubmit}
				type='minimal'
				plusLeft={true}
				className={cx('board-input__button')}>
				Add
			</Button>
		</div>
	);
};

export default BoardInputView;
