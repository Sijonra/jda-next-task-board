import React, { createContext, useContext, ReactNode } from 'react';

interface DragContextProps {
	currentDragCardId: number | undefined;
	setCurrentDragCardId: (id: number | undefined) => void;
}

const DragContext = createContext<DragContextProps | undefined>(undefined);

const DragProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [currentDragCardId, setCurrentDragCardId] = React.useState<number | undefined>(
		undefined
	);

	return (
		<DragContext.Provider value={{ currentDragCardId, setCurrentDragCardId }}>
			{children}
		</DragContext.Provider>
	);
};

const useDrag = () => {
	const context = useContext(DragContext);
	if (!context) {
		throw new Error('useDrag must be used within a DragProvider');
	}
	return context;
};

export { DragProvider, useDrag };
