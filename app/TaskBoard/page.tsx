'use client';

import { FC, useState, useMemo } from 'react';

import { CardStore } from '@/stores/cards.store';
import styles from './TaskBoardPage.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import BoardInput from '../../components/BoardInput/BoardInput';
import BoardColumn from '../../components/BoardColumn/BoardColumn';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { TCardList } from '../../@types/types';
import { DragProvider } from '@/components/Context/DragContext';
import { observer } from 'mobx-react-lite';

const TaskBoardPage: FC = observer(() => {
	// const [cards, setCards] = useState<TCardList>([]);
	const [modalWindowIsActive, setModalWindowIsActive] = useState<boolean>(false);
	const [deletingCardId, setDeletingCardId] = useState<number | null>(null);

	const closeModalWindowAccept = () => {
		if (deletingCardId !== null) {
			removeCard(deletingCardId);
		}
		setModalWindowIsActive(false);
	};

	const closeModalWindowDecline = () => setModalWindowIsActive(false);

	const onCardDelete = (cardId: number) => {
		setDeletingCardId(cardId);
		setModalWindowIsActive(true);
	};

	const removeCard = (cardId: number) => {
		const newCards = CardStore.cards.filter((card) => card.id !== cardId);
		newCards.map((card, index) => (card.id = index + 1));
		CardStore.setCards(newCards);
	};

	const toDoCards = useMemo(() => {
		return CardStore.cards.filter((card) => card.columnId === 0);
	}, [CardStore.cards]);

	const inProgressCards = useMemo(() => {
		return CardStore.cards.filter((card) => card.columnId === 1);
	}, [CardStore.cards]);

	const doneCards = useMemo(() => {
		return CardStore.cards.filter((card) => card.columnId === 2);
	}, [CardStore.cards]);

	return (
		<DragProvider>
			<div className={cx('task-board')}>
				{modalWindowIsActive && (
					<ModalWindow
						closeModalWindowAccept={closeModalWindowAccept}
						closeModalWindowDecline={closeModalWindowDecline}
					/>
				)}
				<div className={cx('task-board__input')}>
					<BoardInput />
				</div>
				<div className={cx('task-board__columns')}>
					<BoardColumn
						title='To Do'
						allCards={CardStore.cards}
						id={0}
						cards={toDoCards}
						onCardDelete={onCardDelete}
					/>
					<BoardColumn
						title='In Progress'
						allCards={CardStore.cards}
						id={1}
						cards={inProgressCards}
						onCardDelete={onCardDelete}
					/>
					<BoardColumn
						title='done'
						allCards={CardStore.cards}
						id={2}
						cards={doneCards}
						onCardDelete={onCardDelete}
					/>
				</div>
			</div>
		</DragProvider>
	);
});

export default TaskBoardPage;
