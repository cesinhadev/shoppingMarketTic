import http from "../../http-common";
import { ProductProps } from "../interfaces/Product";

const findAll = async() => {
	const resp = await http.get<ProductProps[]>("products");
	return resp.data
}

export default findAll