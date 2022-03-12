import styles from "./Login.module.scss";
import Input from "../../Components/Input/Input";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import Lock from "../../Components/Lock/Lock";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { SignUpResponse } from "../../Redux/Actions/User/signUp";
import { Select } from "../../Components";

export default function Register() {
    const { error, fetching } = useSelector<RootState, SignUpResponse>((store) => store.user);
	const dispatch = useDispatch();

	function handleForm(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const form = new FormData(event.currentTarget);
		const entries: string[] = [];
		for (const value of form.values()) {
			entries.push(String(value));
		}
	}

	const form = (
		<div className={styles.box}>
			<form onSubmit={handleForm} autoComplete="false">
				<div className={styles.inputs}>
					<Input label="Username" name="name" type="text" />
					<Input label="Password" name="password" type="password" />
					<Input label="Confirm Password" name="confirmPassword" type="password" />
					<Select
						label="Gender"
						options={["Male", "Female", "Other"]}
					/>
					<Input label="E-Mail" name="email" type="email" />
				</div>
				<input type="submit" value="Register" />
			</form>
			<div className={`${styles.errorContainer} ${error ? styles.active : undefined}`}>
				<span>{error && error.message}</span>
			</div>
			<div className={styles.signUp}>
				<p>
					Already got an account? <Link to="/login">Log In</Link>
				</p>
			</div>
		</div>
	);
	return <Lock on={fetching}>{form}</Lock>;
}
