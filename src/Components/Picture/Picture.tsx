import styles from "./Picture.module.scss";
import { Avatar, Modal } from "../";
import { useState } from "react";

interface Props {
	author: {
		name: string;
		avatar: string;
	};
	title: string;
	src: string;
}

export default function Picture({ author, title, src }: Props) {
    const [modal, setModal] = useState(false);

    return (
		<div className={styles.container}>
			<Avatar id={styles.avatar} src={author.avatar} />
			<img id={styles.picture} src={src} alt="picture" onClick={() => setModal(true)} />
			<h1 id={styles.title}>{title}</h1>
			<Modal className={styles.modal} visible={modal}>
				<h1>This is a test modal</h1>
				<button onClick={() => setModal(false)}>Close Modal</button>
			</Modal>
		</div>
	);
}
