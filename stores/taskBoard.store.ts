import { makeAutoObservable } from 'mobx';

class TaskBoardPageStore {
	modalWindowIsActive: boolean = false;

	constructor() {
		makeAutoObservable(this);
	}

	setModalWindowActive() {
		this.modalWindowIsActive = true;
	}

	setModalWindowUnActive() {
		this.modalWindowIsActive = false;
	}
}

export const TaskBoardStore = new TaskBoardPageStore();
