import http from "../../http-common";

interface Login {
	email:string,
	password: string,
}

interface ReturnDataLogin {
	result: {acessToken: string};
	user: {email: string, username: string, id: number };
}

interface SaveLoginUser {
	acessToken: string,
	user: {email: string, username: string, id: number };
}

const authService = {
	async autenticate(data: Login){
		const response = await http.post<ReturnDataLogin>("/login", data)

		return response.data
	},

	setLoginUser(data: ReturnDataLogin){
		const parseData = JSON.stringify(data);
		localStorage.setItem("user", parseData);
	},

	getLoginUser(){
		const data = localStorage.getItem("user");
		if(!data) return null;
		try{
				const parseData: SaveLoginUser = JSON.parse(data);
				return parseData;
		}catch(error){
			console.log(error);
			return null
		}
	},

	clearLoginUser(){
		localStorage.clear()
	}
};

export default authService