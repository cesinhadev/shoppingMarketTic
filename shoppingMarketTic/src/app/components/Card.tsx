import Button from "./Button";

const Card = () => {
	return (
		<div className="bg-white p-4 w-60 rounded-2xl">
			<div>
				<img src="./assets/produtos/tenis.jpg" alt="image Produto" />
			</div>

			<div className="p-4">
				<div className="flex justify-center items-center mb-2">
					<h3>Name Produto</h3>
				</div>
				<div className="flex justify-center items-center mb-2">
					<h3>Valor Produto</h3>
				</div>
			</div>
				<Button>Adicionar no carrinho</Button>
		</div>
	);
}


export default Card;