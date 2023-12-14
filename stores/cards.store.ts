import { TCardList } from '@/@types/types';
import { makeAutoObservable } from 'mobx';

class CardsStore {
	cards: TCardList = [];

	constructor() {
		makeAutoObservable(this);
	}

	setCards(cards: TCardList) {
		this.cards = cards;
	}
}

export const CardStore = new CardsStore();
