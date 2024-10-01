import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import Header from "../components/Header";

const Cadastro = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		username: "",
	});

	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		void fetch("http://localhost:3001/users", {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify(formData),
		})
			.then((resp) => resp.json())
			.then(() => {
				navigate("/login");
			});
	};

	return (
		<div className="flex flex-col items-center justify-center gap-6">
			<Header/>
			<h1 className="capitalize">cadastro</h1>
			<form className="flex flex-col gap-6" onSubmit={(e) => handleSubmit(e)}>
				<Input
					type="text"
					variant="secundary"
					placeholder="Crie um NickName"
					name="username"
					onChange={(e) => handleChange(e)}
					/>
				<Input
					type="email"
					variant="secundary"
					placeholder="Inserir um E-mail"
					name="email"
					onChange={(e) => handleChange(e)}
					/>
				<Input
					type="password"
					variant="secundary"
					placeholder="Crie uma Senha"
					name="username"
					onChange={(e) => handleChange(e)}
				/>

				<Button 
				type="submit"
				className="capitalize"
				>confirmar cadastro
				</Button>
			</form>
		</div>
	);
};
export default Cadastro;
