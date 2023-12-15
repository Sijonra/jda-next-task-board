import { FC } from 'react';

import styles from './BoardInput.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import { useState } from 'react';

import Input from '../UiKit/Input/Input';
import Button from '../UiKit/Button/Button';

import { TCard, TCardList } from '../../@types/types';
import { TSetCardsAction } from '../../@types/types';
import { CardStore } from '@/stores/cards.store';

interface BoardInputProps {
	// setCards: TSetCardsAction;
	// cards: TCardList;
}

const BoardInput: FC<BoardInputProps> = () => {
	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	const addButtonSubmit = () => {
		const currentId = CardStore.cards.length + 1;
		const currentCard: TCard = {
			id: currentId,
			columnId: 0,
			content: inputValue,
		};
		CardStore.setCards([...CardStore.cards, currentCard]);
		setInputValue('');
	};

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

export default BoardInput;
