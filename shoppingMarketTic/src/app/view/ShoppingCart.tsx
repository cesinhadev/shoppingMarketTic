import Button from "../components/Button";
import { useShoppingList } from "../contexts/ShoppingCart";

const ShoppingCart = () => {
	const { items, addProduct, onDecrease, onRemove,totalSumAmount } = useShoppingList();

	return (
		<div className="flex h-full flex-col gap-12">
			<div className="mt-32 flex h-4/5 justify-center overflow-x-auto">
				<div className="flex w-3/6 flex-col gap-8">
					{items.map((item) => {
						return (
							<div
								className="flex justify-between rounded-3xl bg-white p-8"
								key={item.id}
							>
								<div className="flex flex-col gap-4">
									<p>
										<span className="text-center capitalize">
											Nome Produto: {item.name}
										</span>	
									</p>
									<span>Quantidade: {item.quantity}</span>
									<span>Valor Total: R$ {item.amount.toFixed(2)}</span>
								</div>
								<div className="flex flex-col gap-5">
									<Button
										onClick={(e) => {
											e.stopPropagation();
											addProduct(item.id, item.name, item.unitPrice);
										}}
									> + </Button>
									<Button
										onClick={(e) => {
											e.stopPropagation();
											onDecrease(item.id, item.unitPrice);
										}}
									> - </Button>
									<Button
										variant="secundary"
										onClick={(e) => {
											e.stopPropagation();
											onRemove(item.id);
										}}
									> Remove </Button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div className="flex rounded-2xl bg-white p-5 m-6 justify-end">
					<span className="ml-10">
						<b className="capitalize">total</b> R${totalSumAmount.toFixed(2)}

					</span>
			</div>
		</div>
	);
};

export default ShoppingCart;
