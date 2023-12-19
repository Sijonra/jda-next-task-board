'use client';

import React, { FC } from 'react';

import styles from './BoardColumn.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import Card from '../UiKit/Card/Card';
import Badge from '../UiKit/Badge/Badge';
import Button from '../UiKit/Button/Button';

import {
	TCardList,
	TDragDropHandler,
	TDragLeaveHandler,
	TDragOverHandler,
} from '../../@types/types';

interface BoardColumnProps {
	onCardDelete: (cardId: number) => void;
	id: number;
	title: string;
	cards: TCardList;
	handleDragOver: TDragOverHandler;
	handleLeave: TDragLeaveHandler;
	handleDrop: TDragDropHandler;
	columnClasses: string;
}

const BoardColumnView: FC<BoardColumnProps> = ({
	onCardDelete,
	id,
	title,
	cards,
	handleDragOver,
	handleLeave,
	handleDrop,
	columnClasses,
}) => {
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
};

export default BoardColumnView;
