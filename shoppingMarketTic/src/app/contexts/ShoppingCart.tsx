import { createContext, useContext, useState } from "react";

interface ShoppingListProviderProps {
	children: React.ReactNode;
}

export interface ListItem {
	id: number;
	name: string;
	quantity: number;
	unitPrice: number;
	amount: number;
}

export interface ShoppingListContextData {
	items: ListItem[];
	totalSumAmount: number;
	totalQtd: number;
	addProduct: (id: number, name: string, price: number) => void;
	onRemove: (id: number) => void;
	onDecrease: (id:number, price: number) => void;
}

const ShoppingListContextDefaultValue = {
	items: [],
	totalSumAmount: 0,
	totalQtd: 0,
	addProduct: () => null,
	onRemove: () => null,
	onDecrease: () => null,
};

const ShoppingListContext = createContext<ShoppingListContextData>(
	ShoppingListContextDefaultValue
);

export const ShoppingListProvider = ({
	children,
}: ShoppingListProviderProps) => {
	const [items, setItems] = useState<ListItem[]>([]);

	const addProduct = (id: number, name: string, price: number) => {
		const productAlreadyInCart = items.find((product) => product.id === id);
		
		if (!productAlreadyInCart) {
			const item: ListItem = {
				id: id,
				name: name,
				amount: price,
				unitPrice: price,
				quantity: 1,
			};
			
			return setItems([...items, item]);
		}
		
		if (productAlreadyInCart) {
			const updateCart = items.map((cartItem) =>
				cartItem.id === id
			? {
				...cartItem,
				quantity: Number(cartItem.quantity) + 1,
				amount: cartItem.amount + price,
			}
			: cartItem,
		);
		
		return setItems(updateCart);
	}
};

const onRemove = (id: number) => {
	const filteredItems = items.filter((product) => product.id !== id);
	setItems(filteredItems);

}

const onDecrease = (id: number, price:number) => {
	const productAlreadyInCart = items.find((product) => product.id === id);

	if(productAlreadyInCart && productAlreadyInCart?.quantity <= 1){
		return onRemove(id);
	}
	
	if(productAlreadyInCart){
		const updateCart = items.map((cartItem) =>
			cartItem.id === id
		? {
			...cartItem,
			quantity: Number(cartItem.quantity) - 1,
			amount: cartItem.amount - price,
		}
		: cartItem,
	);
		setItems(updateCart);
	}
};

const totalSumAmount = items.reduce((acc, item) => {
	const amountItem = item.amount;
	return acc + amountItem
}, 0);

const totalQtd = items.reduce((acc, item) => {
	const qtdItem = item.quantity;
	return acc + qtdItem
}, 0);

	return (
		<ShoppingListContext.Provider value={{ items, addProduct, onDecrease, onRemove,totalSumAmount,totalQtd}}>
			{children}
		</ShoppingListContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingList = () => useContext(ShoppingListContext);
