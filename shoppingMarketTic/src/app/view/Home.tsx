import { useEffect } from 'react';
import { useQuery } from "react-query";
import Card from '../components/Card';
import findAll from '../services/product.service';
import { ProductProps } from '../interfaces/Product';


const Home = () => {
	//useEffect(() => {
	//findAll().then((res) => console.log(res))
	//})

	const {
		data: products,
		error,
		isLoading
	} = useQuery<ProductProps[], Error>("query-products", async() => {
		return await findAll()
	})

	return (<>
		{products?.map((product: ProductProps) => {
			return (
				<Card key={product.id}/>
			)
		})}
		</>)
}

export default Home;