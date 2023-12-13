import { Dispatch, SetStateAction } from "react";

interface TCard {
	id: number;
	columnId: number;
	content: string;
}

type TCardList = TCard[] | [];

type TDragFunctions = {
	onDragStartHandler: (cardId: number | undefined) => void;
	onDragLeaveHandler: () => void;
	onDragEndHandler: () => void;
	onDragOverHandler: (id: number) => void;
	onDragDropHandler: (
		currentDragCardId: number | undefined,
		targetColumnId: number
	) => void;
};

type TSetCardsAction = Dispatch<SetStateAction<TCardList>>;

export type { TCard, TCardList, TDragFunctions, TSetCardsAction };
