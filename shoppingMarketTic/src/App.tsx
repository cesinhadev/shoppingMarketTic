import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ShoppingListProvider } from "./app/contexts/ShoppingCart";
import Home from "./app/view/Home";
import ShoppingCart from "./app/view/ShoppingCart";
import Layout from "./app/components/Layout";
import Login from "./app/view/Login";

function App() {
	const route = createBrowserRouter([
		{
			path:"/login",
			element: <Login/>
		},
		{
			element: <Layout />,
			children: [
				{ path: "/", element: <Home /> },
				{ path: "/shopping-cart", element: <ShoppingCart /> },
			],
		},
	
	]);
	return (
		<div className="flex h-screen items-center justify-center bg-gray-200">
			<ShoppingListProvider>
				<RouterProvider router={route}></RouterProvider>
			</ShoppingListProvider>
		</div>
	);
}

export default App;
