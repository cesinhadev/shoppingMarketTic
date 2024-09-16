import http from "../../http-common";
import { ProductProps } from "../interfaces/Product";

const findAll = async(type: string) => {
	if(type){
		const response = await http.get<ProductProps[]>("products/?_sort=price");
		return type === "desc" ? response.data.reverse() : response.data;
	}
	
	
	const resp = await http.get<ProductProps[]>("products");
	return resp.data
}

const searchName = async(name: string) => {
	const response = await http.get<ProductProps[]>(`products?name=${name}`);
	return response.data
}

const ProductService = {
	findAll,
	searchName
}

export default ProductService;