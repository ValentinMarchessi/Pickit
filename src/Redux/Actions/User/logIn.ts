import { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { server } from "../../../Config/serverURL";
import { logIn_Start, logIn_Success, logIn_Failure } from "../../Reducers/User";

export interface UserInfo {
	identifier: string;
	password: string;
}


export interface LogInResponse {
	message?: string;
	user?: {
		name?: string;
		avatar?: string;
		token?: string;
	};
	error?: {
		status: number;
		message: string;
	};
	fetching: boolean;
}

export async function logIn(dispatch: Dispatch<any>, user: UserInfo) {
	try {
		dispatch(logIn_Start());
		const response = await server
			.post<UserInfo, AxiosResponse<LogInResponse, UserInfo>>("user/login", user)
			.then(({ data }) => data)
			.catch((error) => {
				throw error;
			});
		dispatch(logIn_Success(response.user));
	} catch (error) {
		dispatch(logIn_Failure(error.response.data));
	}
}
