import React, { useState } from "react";
import styles from "./Select.module.scss";

interface SelectProps {
	label: string;
	options: string[] | number[];
	multiple?: boolean;
	onSelect?: (event: React.BaseSyntheticEvent) => any;
	name: string;
}

export default function Select({ label, options, multiple = false, onSelect, name }: SelectProps) {
	const [selected, setSelected] = useState<string>();

	function handleSelect(event: React.MouseEvent<HTMLInputElement>) {
		const { value } = event.currentTarget;
		setSelected(String(value));
		onSelect && onSelect(event);
	}
	function handleDropdown(cases: "open" | "close") {
		//Closure
		return (
			event:
				| React.PointerEvent<HTMLDivElement>
				| React.FocusEvent<HTMLDivElement>
				| React.MouseEvent<HTMLDivElement>
		) => {
			interface Elements {
				[index: string | number]: any;
			}
			const elements: Elements = {
				container: event.currentTarget,
				pill: event.currentTarget.firstElementChild,
				label: event.currentTarget.firstElementChild?.firstElementChild,
				dropdown: event.currentTarget.lastElementChild,
			};

			if (cases === "open") {
				for (const i in elements) {
					elements[i]?.classList.add(styles.active);
				}
			}
			if (cases === "close") {
				for (const i in elements) {
					if (i === "label" && selected) continue;
					elements[i]?.classList.remove(styles.active);
				}
			}
		};
	}

	const events = {
		onClick: handleDropdown("open"),
		onFocus: handleDropdown("open"),
		onPointerEnter: handleDropdown("open"),
		onPointerLeave: handleDropdown("close"),
	};

	return (
		<div className={styles.container} {...events}>
			<div id={styles.pill}>
				<label>{label}</label>
				{selected && <p id={styles.selected}>{selected}</p>}
			</div>
			<div id={styles.dropdown}>
				{options.map((option) => (
					<React.Fragment key={option}>
						<input
							name={name}
							id={String(option)}
							type={"radio"}
							value={option}
							onClick={handleSelect}>	
						</input>
						<label id={styles.option} htmlFor={String(option)}>{option}</label>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
