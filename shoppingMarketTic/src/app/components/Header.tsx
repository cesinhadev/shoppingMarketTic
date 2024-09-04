import { useQuery } from "react-query";
import Input from "./Input";
import ProductService from "../services/product.service";
import { ProductProps } from "../interfaces/Product";
import { ChangeEvent, useState } from "react";
import { debounce } from "lodash";

const Header = () => {
	const [productName, setproductName] = useState("");

	const {
		data: productsByName,
		isLoading,
		error,
	} = useQuery<ProductProps[], Error>(["query-products-by-name", productName], async () => {
		return ProductService.searchName(productName);
	}, {
			enabled:productName.length > 0,
	},);

	const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setproductName(value);
	};

	const debounceOnChange = debounce(handleInput, 500);

	return (
		<header className="fixed right-0 top-0 flex w-full justify-center bg-white py-3">
			<div className="mx-auto flex w-11/12 items-center justify-between gap-52">
				<div>
					<a href="/">
						<img
							src="./assets/logo.png"
							alt="Company Logo"
							className="max-w-36"
						/>
					</a>
				</div>
				<div className="w-4/5">
					<Input onChange={debounceOnChange} />
					<ul>
						{productsByName?.map((product: ProductProps) => {
							return <li>{product.name}</li>;
						})}
					</ul>
				</div>
				<div>Carrinho</div>
			</div>
		</header>
	);
};

export default Header;
