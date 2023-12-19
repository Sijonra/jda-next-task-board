import { Dispatch, SetStateAction } from 'react';

interface TCard {
	id: number;
	columnId: number;
	content: string;
}

type TCardList = TCard[] | [];

type TDragOverHandler = (e: React.DragEvent) => void;
type TDragLeaveHandler = () => void;
type TDragDropHandler = (e: React.DragEvent) => void;

type TSetCardsAction = Dispatch<SetStateAction<TCardList>>;

export type {
	TCard,
	TCardList,
	TSetCardsAction,
	TDragOverHandler,
	TDragLeaveHandler,
	TDragDropHandler,
};
