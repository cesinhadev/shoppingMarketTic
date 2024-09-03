import { Product } from "../interfaces/Product";
import Button from "./Button";

const Card = ({ item }: Product) => {
	return (
		<div className="flex h-96 flex-col justify-center bg-white p-2 w-64 rounded-2xl ">
			<div className="flex justify-center">
				<img src={`./assets/produtos/${item.image}.jpg`} alt={item.name} 
				 className="h-40 rounded-t-lg object-cover"/>
			</div>

			<div className="flex flex-col gap-2 p-4">
				<div className="flex justify-center items-center mb-2">
					<span>{item.name}</span>
				</div>
				<div className="flex justify-center items-center mb-2">
					<h3>R$ {item.price}</h3>
				</div>
			</div>
				<Button>Adicionar no carrinho</Button>
		</div>
	);
}


export default Card;