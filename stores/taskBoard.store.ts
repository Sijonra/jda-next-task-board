import { makeAutoObservable } from 'mobx';

class TaskBoardPageStore {
	modalWindowIsActive: boolean = false;
	inputValue: string = '';

	constructor() {
		makeAutoObservable(this);
	}

	setModalWindowActive() {
		this.modalWindowIsActive = true;
	}

	setModalWindowUnActive() {
		this.modalWindowIsActive = false;
	}

	setInputValue(value: string) {
		this.inputValue = value;
	}
}

export const TaskBoardStore = new TaskBoardPageStore();
