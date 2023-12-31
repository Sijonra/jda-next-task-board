import { FC } from 'react';
import style from './Card.module.scss';
import { CardStore } from '@/stores/cards.store';
import { observer } from 'mobx-react-lite';

interface CardProps {
	elevation: 1 | 2 | 3;
	title?: string;
	subtitle?: string;
	children?: React.ReactNode;
	className?: string;
	draggable?: boolean;
	cardId?: number;
	currentColumnId: number;
}

const Card: FC<CardProps> = observer(
	({ elevation, title, subtitle, children, draggable, className, cardId }) => {
		const handleDragStart = () => {
			CardStore.setCurrentDragCardId(cardId);
		};

		const handleDragEnd = () => {
			CardStore.setCurrentDragCardId(undefined);
		};

		const handleDragOver = (e: React.DragEvent) => e.preventDefault();

		return (
			<>
				<div
					onDragStart={handleDragStart}
					onDragLeave={() => {}}
					onDragOver={handleDragOver}
					onDragEnd={handleDragEnd}
					draggable={draggable}
					className={
						style['card'] +
						' ' +
						style['card__' + elevation.toString()] +
						' ' +
						className
					}>
					<h3 className={style['card__title']}>{title}</h3>
					<h5 className={style['card__subtitle']}>{subtitle}</h5>
					<div className={style['card__content']}>{children}</div>
				</div>
			</>
		);
	}
);

export default Card;
