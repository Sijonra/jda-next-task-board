import React, { FC, useState } from "react";

import styles from "./BoardColumn.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

import Card from "../Card/Card";
import Badge from "../Badge/Badge";
import Button from "../Button/Button";

import { TCardList, TSetCardsAction } from "../../@types/types";
import { useDrag } from "../Context/DragContext";

interface BoardColumnProps {
	cards: TCardList;
	onCardDelete: (cardId: number) => void;
	id: number;
	allCards: TCardList;
	setCards: TSetCardsAction;
	title: string;
}

const BoardColumn: FC<BoardColumnProps> = ({
	cards,
	onCardDelete,
	id,
	allCards,
	setCards,
	title,
}) => {
	const [isOver, setIsOver] = useState<boolean>(false);

	const { currentDragCardId } = useDrag();
	const { setCurrentDragCardId } = useDrag();

	const handleDragOver = (e: React.DragEvent) => {
		setIsOver(true);
		e.preventDefault();
	};

	const handleDrop = (e: React.DragEvent) => {
		setIsOver(false);
		setCurrentDragCardId(undefined);
		e.preventDefault();

		const newCardsArray = allCards.map((card) => {
			return card.id === currentDragCardId
				? { ...card, columnId: id }
				: card;
		});

		setCards(newCardsArray);
	};

	const handleLeave = () => setIsOver(false);

	const columnClasses = `${cx("board-column")} ${
		isOver ? cx("board__column--over") : ""
	}`;

	return (
		<div
			onDragOver={handleDragOver}
			onDragEnter={(e) => e.preventDefault()}
			onDragLeave={handleLeave}
			onDrop={handleDrop}
			draggable={true}
			className={columnClasses}
		>
			<h4 className={cx("board-column__title")}>{title}</h4>
			{cards.map((card) => {
				return (
					<Card
						currentColumnId={id}
						cardId={card.id}
						draggable={true}
						key={card.id}
						elevation={3}
						className={cx("board-column__card", "board-card")}
					>
						{card.content}
						<Badge
							color="green"
							type="badge"
							theme="solid"
							text={card.id.toString()}
							className={cx("board-card__badge")}
						/>
						<Button
							onClick={() => {
								onCardDelete(card.id);
							}}
							type="regular"
							className={cx("board-card__close")}
						>
							✖
						</Button>
					</Card>
				);
			})}
		</div>
	);
};

export default BoardColumn;
