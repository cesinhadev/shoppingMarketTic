import { createBrowserRouter, RouterProvider } from "react-router-dom";
//import Header from "./app/components/Header";
import Home from "./app/view/Home";
import ShoppingCart from "./app/view/ShoppingCart";
import Layout from "./app/components/Layout";

function App() {
	const route = createBrowserRouter([
		{
			element:<Layout/>,
				children: [{path: "/", element: <Home/>},
									{ path:"/shopping-cart", element: <ShoppingCart/>}
				],
		},
	]);
	return (
		<div className="flex h-screen items-center justify-center bg-gray-200">
			<RouterProvider router={route}></RouterProvider>
		</div>
	);
}

export default App;
