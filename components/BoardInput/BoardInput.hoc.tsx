'use client';

import { FC } from 'react';

import { TCard } from '../../@types/types';
import { CardStore } from '@/stores/cards.store';
import { TaskBoardStore } from '@/stores/taskBoard.store';
import { observer } from 'mobx-react-lite';
import BoardInputView from './BoardInput';

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

	const inputValue = TaskBoardStore.inputValue;

	return (
		<BoardInputView
			addButtonSubmit={addButtonSubmit}
			handleInputChange={handleInputChange}
			inputValue={inputValue}
		/>
	);
});

export default BoardInput;
