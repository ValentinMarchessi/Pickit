import { Dispatch } from "react";
import { server } from "../../../Config/serverURL";
import { signUp_Start, signUp_Success, signUp_Error } from "../../Reducers/User";

export type FormData = {
	[k: string]: FormDataEntryValue;
};

export interface SignUpResponse {
	message?: string;
	error?: {
		status: number;
		message: string;
	};
	fetching: boolean;
}

export function signUp(user: FormData) {
	return async (dispatch: Dispatch<any>) => {
		try {
			dispatch(signUp_Start)
			await server.post("/user", user).catch((error: SignUpResponse["error"]) => { throw error });
			dispatch(signUp_Success);
		} catch (error: any) {
			if(!error.response) dispatch(signUp_Error({status: 500, message: "Could not reach server."}))
			else dispatch(signUp_Error(error.response.data));
		}
	}
}
