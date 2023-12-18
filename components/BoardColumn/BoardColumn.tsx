'use client';

import React, { FC, useState } from 'react';

import styles from './BoardColumn.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import Card from '../UiKit/Card/Card';
import Badge from '../UiKit/Badge/Badge';
import Button from '../UiKit/Button/Button';

import { TCardList, TSetCardsAction } from '../../@types/types';
import { CardStore } from '@/stores/cards.store';
import { observer } from 'mobx-react-lite';

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
			<div
				onDragOver={handleDragOver}
				onDragEnter={(e) => e.preventDefault()}
				onDragLeave={handleLeave}
				onDrop={handleDrop}
				draggable={true}
				className={columnClasses}>
				<h4 className={cx('board-column__title')}>{title}</h4>
				{cards.map((card) => {
					return (
						<Card
							currentColumnId={id}
							cardId={card.id}
							draggable={true}
							key={card.id}
							elevation={3}
							className={cx('board-column__card', 'board-card')}>
							{card.content}
							<Badge
								color='green'
								type='badge'
								theme='solid'
								text={card.id.toString()}
								className={cx('board-card__badge')}
							/>
							<Button
								onClick={() => {
									onCardDelete(card.id);
								}}
								type='regular'
								className={cx('board-card__close')}>
								✖
							</Button>
						</Card>
					);
				})}
			</div>
		);
	}
);

export default BoardColumn;
