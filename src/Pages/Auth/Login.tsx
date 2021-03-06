import styles from "./Login.module.scss";
import Input from "../../Components/Input/Input";
import { Link } from "react-router-dom";
import { logIn, LogInResponse, UserInfo } from "../../Redux/Actions/User/logIn";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import Lock from "../../Components/Lock/Lock";

export default function Login() {
	const dispatch = useDispatch();
	const { fetching, error } = useSelector<RootState, LogInResponse>((store) => store.user);

	function handleForm(event: React.FormEvent<HTMLFormElement> & { target: HTMLFormElement }) {
		event.preventDefault();
		const form = new FormData(event.target);
		const entries: string[] = [];
		for (const value of form.values()) {
			entries.push(String(value));
		}
		let user = {
			identifier: entries[0],
			password: entries[1],
		} as UserInfo;
		logIn(dispatch, user);
	}

	const form = (
		<div className={styles.box}>
			<form onSubmit={handleForm} autoComplete="false">
				<div className={styles.inputs}>
					<Input label="Username" name="name" type="text" />
					<Input label="Password" name="password" type="password" />
				</div>
				<input type="submit" value="Log In" />
			</form>
			<div className={`${styles.errorContainer} ${error ? styles.active : undefined}`}>
				<span>{error && error.message}</span>
			</div>
			<div className={styles.signUp}>
				<p>
					You don't have an account? <Link to="/signup">Sign Up</Link>
				</p>
			</div>
		</div>
	);
	return <Lock on={fetching}>{form}</Lock>;
}
