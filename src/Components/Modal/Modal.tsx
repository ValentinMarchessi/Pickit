import React from "react";
import styles from "./Modal.module.scss";
import ReactDOM from "react-dom";

interface Props {
	children: JSX.Element[];
	visible: boolean;
	className?: string;
	id?: string;
}

export default function Modal({ children, visible, className, id }: Props) {
	const modalRoot = document.getElementById("modal-root");

	const modal = (
		<div className={className} id={id}>
			{children}
		</div>
	);

	return visible ? ReactDOM.createPortal(modal, modalRoot) : null;
}
