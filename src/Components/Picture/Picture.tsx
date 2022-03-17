import styles from "./Picture.module.scss";
import { Modal } from "../";
import { useState } from "react";

interface Props {
	title?: string;
	src: string;
	id?: string;
	className?: string;
}

export default function Picture({ src, title, id, className }: Props) {
    const [modal, setModal] = useState(false);

	return (
		<>
			<img id={styles.picture} src={src} alt="picture" onClick={() => setModal(true)} />
			<Modal className={styles.modal} visible={modal} backdrop onBackdropClick={() => setModal(false)}>
				<img src={src} alt="picture" />
				<h1>{title}</h1>
			</Modal>
		</>
	);
}
