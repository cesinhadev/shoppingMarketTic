import { useState } from "react"
import authService from "../services/auth.service";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
import Header from "../components/Header";


const Login = () => {
	const [formData, setFormData] = useState({
		email:"",
		password:""
	});

	const navigate = useNavigate();

	const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
		setFormData({...formData, [e.target.name]: e.target.value})
	}

	const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		
		try{
			const resp = authService.autenticate(formData)

			authService.setLoginUser(await resp);

			return navigate("/")
		}
		catch{
			console.log("Algo deu errado")
		}
	}

	return(
		<div>
			<Header/>
			<h1>Login</h1>
			<form onSubmit={(e) => void handleSubmit(e)}>
				<Input 
				type="email" 
				placeholder="Inserir seu Email"
				value={formData.email}
				name="email"
				onChange={(e) => handleChange(e)}
				/>

				<Input 
				type="password" 
				placeholder="Coloque a sua Senha"
				value={formData.password}
				name="password"
				onChange={(e) => handleChange(e)}
				/>

				<Button type="submit"> Acessar </Button>
			</form>
		</div>
	)
}


export default Login;