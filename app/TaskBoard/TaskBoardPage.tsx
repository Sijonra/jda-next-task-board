'use client';

import { FC } from 'react';

import styles from './TaskBoardPage.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

import BoardInput from '../../components/BoardInput/BoardInput';
import BoardColumn from '../../components/BoardColumn/BoardColumn';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import { TCardList } from '@/@types/types';

interface ITaskBoardPageView {
	closeModalWindowAccept: () => void;
	closeModalWindowDecline: () => void;
	allCards: TCardList;
	toDoCards: TCardList;
	inProgressCards: TCardList;
	doneCards: TCardList;
	onCardDelete: (cardId: number) => void;
	modalWindowIsActive: boolean;
}

const TaskBoardPageView: FC<ITaskBoardPageView> = ({
	closeModalWindowAccept,
	closeModalWindowDecline,
	allCards,
	toDoCards,
	inProgressCards,
	doneCards,
	onCardDelete,
	modalWindowIsActive,
}) => {
	return (
		<div className={cx('task-board')}>
			{modalWindowIsActive && (
				<ModalWindow
					closeModalWindowAccept={closeModalWindowAccept}
					closeModalWindowDecline={closeModalWindowDecline}
				/>
			)}
			<div className={cx('task-board__input')}>
				<BoardInput />
			</div>
			<div className={cx('task-board__columns')}>
				<BoardColumn
					title='To Do'
					allCards={allCards}
					id={0}
					cards={toDoCards}
					onCardDelete={onCardDelete}
				/>
				<BoardColumn
					title='In Progress'
					allCards={allCards}
					id={1}
					cards={inProgressCards}
					onCardDelete={onCardDelete}
				/>
				<BoardColumn
					title='done'
					allCards={allCards}
					id={2}
					cards={doneCards}
					onCardDelete={onCardDelete}
				/>
			</div>
		</div>
	);
};

export default TaskBoardPageView;
