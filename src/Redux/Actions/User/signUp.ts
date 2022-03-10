import { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { server } from "../../../Config/serverURL";
import { signUp_Start, signUp_Success, signUp_Error } from "../../Reducers/User";

export interface FormData {
	username: string;
	email: string;
	password: string;
	avatar: string;
	gender: string;
	birthday: string;
	firstName: string;
	lastName: string;
}

export interface SignUpResponse {
	message?: string;
	error?: {
		status: number;
		message: string;
	};
	fetching: boolean;
}

export async function signUp(dispatch: Dispatch<any>, user: FormData) {
	try {
		const response = await server.post("/user", user);
	} catch (error) {}
}
