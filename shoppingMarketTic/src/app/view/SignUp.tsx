import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isNull } from "lodash";
import Button from "../components/Button";
import Input from "../components/Input";
import authService from "../services/auth.service";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (!isNull(authService.getLoggedUser())) {
      navigate("/");
    }
  });

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    void fetch("http://localhost:3001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then(() => {
        navigate("/login");
      });
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="font-bold">Sign-up</h1>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-6">
        <Input
          type="text"
					variant="secundary"
          placeholder="Username"
          value={formData.username}
          name="username"
          onChange={(e) => handleChange(e)}
					/>
        <Input
          type="text"
					variant="secundary"
          placeholder="Email"
          value={formData.email}
          name="email"
          onChange={(e) => handleChange(e)}
					/>
        <Input
          type="password"
					autoComplete="current-password"
					variant="secundary"
          placeholder="Senha"
          value={formData.password}
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <Button type="submit">Cadastrar</Button>
      </form>
    </div>
  );
}

export default Signup;