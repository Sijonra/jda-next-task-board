'use client';

import { FC } from 'react';

import { CardStore } from '@/stores/cards.store';
import { TaskBoardStore } from '@/stores/taskBoard.store';

import { observer } from 'mobx-react-lite';
import TaskBoardPageView from './TaskBoardPage';

const TaskBoardPage: FC = observer(() => {
	const closeModalWindowAccept = () => {
		if (CardStore.deletingCardId !== null) {
			removeCard(CardStore.deletingCardId);
		}
		TaskBoardStore.setModalWindowUnActive();
	};

	const closeModalWindowDecline = () => TaskBoardStore.setModalWindowUnActive();

	const onCardDelete = (cardId: number) => {
		CardStore.setDeletingCardId(cardId);
		TaskBoardStore.setModalWindowActive();
	};

	const removeCard = (cardId: number) => {
		const newCards = CardStore.cards.filter((card) => card.id !== cardId);
		newCards.map((card, index) => (card.id = index + 1));
		CardStore.setCards(newCards);
	};

	const allCards = CardStore.cards;
	const toDoCards = CardStore.cards.filter((card) => card.columnId === 0);
	const inProgressCards = CardStore.cards.filter((card) => card.columnId === 1);
	const doneCards = CardStore.cards.filter((card) => card.columnId === 2);

	const modalWindowIsActive = TaskBoardStore.modalWindowIsActive;

	return (
		<TaskBoardPageView
			closeModalWindowAccept={closeModalWindowAccept}
			closeModalWindowDecline={closeModalWindowDecline}
			allCards={allCards}
			toDoCards={toDoCards}
			inProgressCards={inProgressCards}
			doneCards={doneCards}
			onCardDelete={onCardDelete}
			modalWindowIsActive={modalWindowIsActive}
		/>
	);
});

export default TaskBoardPage;
