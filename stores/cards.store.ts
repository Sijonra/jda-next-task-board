import { TCardList } from '@/@types/types';
import { makeAutoObservable } from 'mobx';

class CardsStore {
	cards: TCardList = [];
	deletingCardId: number | null = null;
	currentDragCardId: number | undefined = undefined;

	constructor() {
		makeAutoObservable(this);
	}

	setCards(cards: TCardList) {
		this.cards = cards;
	}

	setDeletingCardId(cardId: number) {
		this.deletingCardId = cardId;
	}

	setCurrentDragCardId(cardId: number | undefined) {
		this.currentDragCardId = cardId;
	}
}

export const CardStore = new CardsStore();
