'use client';

import { FC } from 'react';

import styles from './BoardInput.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

import Input from '../UiKit/Input/Input';
import Button from '../UiKit/Button/Button';

import { TCard } from '../../@types/types';
import { CardStore } from '@/stores/cards.store';
import { TaskBoardStore } from '@/stores/taskBoard.store';
import { observer } from 'mobx-react-lite';

const BoardInput: FC = observer(() => {
	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		TaskBoardStore.setInputValue(event.target.value);
	};

	const addButtonSubmit = () => {
		const currentId = CardStore.cards.length + 1;
		const currentCard: TCard = {
			id: currentId,
			columnId: 0,
			content: TaskBoardStore.inputValue,
		};
		CardStore.setCards([...CardStore.cards, currentCard]);
		TaskBoardStore.setInputValue('');
	};

	return (
		<div className={cx('board-input')}>
			<Input
				onChange={handleInputChange}
				value={TaskBoardStore.inputValue}
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
});

export default BoardInput;
