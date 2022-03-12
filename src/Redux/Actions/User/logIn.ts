import { AxiosResponse } from "axios";
import { Dispatch } from "react";
import { server } from "../../../Config/serverURL";
import { logIn_Start, logIn_Success, logIn_Failure } from "../../Reducers/User";

export interface LogInRequest {
	identifier: string;
	password: string;
}

export interface LogInResponse {
	message?: string;
	user?: {
		name: string;
		avatar: string;
		token: string;
	};
	error?: {
		status: number;
		message: string;
	};
	fetching: boolean;
}

export function logIn(user: LogInRequest) {
	return async (dispatch: Dispatch<any>) => {
		try {
			dispatch(logIn_Start());
			await server
				.post<LogInRequest, AxiosResponse<LogInResponse>>("user/login", user)
				.then((response) => {
					if (response.status === 200) dispatch(logIn_Success(response.data.user));
				})
				.catch((error: LogInResponse["error"]) => {
					throw error;
				});
		} catch (error: any) {
			if(!error.response) dispatch(logIn_Failure({status: 503, message: "Could not reach server."}))
			else dispatch(logIn_Failure(error.response.data));
		}
	};
}
