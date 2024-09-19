import { useShoppingList } from "../contexts/ShoppingCart";
import { Product } from "../interfaces/Product";
import Button from "./Button";

const Card = ({ item }: Product) => {
	const { addProduct } = useShoppingList();

	return (
		<div className="flex h-96 w-64 flex-col justify-center rounded-2xl bg-white p-2">
			<div className="flex justify-center">
				<img
					src={`./assets/produtos/${item.image}.jpg`}
					alt={item.name}
					className="h-40 rounded-t-lg object-cover"
				/>
			</div>

			<div className="flex flex-col gap-2 p-4">
				<div className="mb-2 flex items-center justify-center">
					<span>{item.name}</span>
				</div>
				<div className="mb-2 flex items-center justify-center">
					<h3>R$ {item.price}</h3>
				</div>
			</div>
			<Button
				onClick={(e) => {
					e.stopPropagation();
					addProduct(item.id, item.name, item.price);
				}}
			>
				Adicionar no carrinho
			</Button>
		</div>
	);
};

export default Card;
