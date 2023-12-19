'use client';

import React, { FC, useState } from 'react';

import styles from './BoardColumn.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import { TCardList } from '../../@types/types';
import { CardStore } from '@/stores/cards.store';
import { observer } from 'mobx-react-lite';
import BoardColumnView from './BoardColumn';

interface BoardColumnProps {
	onCardDelete: (cardId: number) => void;
	id: number;
	allCards: TCardList;
	title: string;
	cards: TCardList;
}

const BoardColumn: FC<BoardColumnProps> = observer(
	({ onCardDelete, id, allCards, title, cards }) => {
		const [isOver, setIsOver] = useState<boolean>(false);

		const handleDragOver = (e: React.DragEvent) => {
			setIsOver(true);
			console.log(CardStore.currentDragCardId);
			e.preventDefault();
		};

		const handleDrop = (e: React.DragEvent) => {
			setIsOver(false);
			console.log('Droped ', CardStore.currentDragCardId);
			e.preventDefault();

			const newCardsArray = allCards.map((card) => {
				return card.id === CardStore.currentDragCardId
					? { ...card, columnId: id }
					: card;
			});

			CardStore.setCurrentDragCardId(undefined);
			CardStore.setCards(newCardsArray);
		};

		const handleLeave = () => setIsOver(false);

		const columnClasses = `${cx('board-column')} ${
			isOver ? cx('board__column--over') : ''
		}`;

		return (
			<BoardColumnView
				cards={cards}
				columnClasses={columnClasses}
				handleDragOver={handleDragOver}
				handleDrop={handleDrop}
				handleLeave={handleLeave}
				id={id}
				onCardDelete={onCardDelete}
				title={title}
			/>
		);
	}
);

export default BoardColumn;
