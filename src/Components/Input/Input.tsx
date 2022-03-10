import React, { useState } from 'react';
import styles from './Input.module.scss';

type MyInputProps = {
    name: string,
    type: 'text' | 'number' | 'password' | 'email'
    onBlur?: React.FocusEventHandler,
    onChange?: React.ChangeEventHandler,
    label: string,
}

export default function Input({ label, onBlur, onChange, name, type }: MyInputProps) {
    const [value, setValue] = useState('')
    
    function handleChange(event: React.ChangeEvent) {
        const { value } = event.target;
        setValue(value);
        onChange && onChange(event);
    }

    function handleBlur(event: React.FocusEvent) {
		const { value } = event.target;
		setValue(value);
		onBlur && onBlur(event);
	}

	return (
		<div className={styles.container}>
			<label className={value ? styles.active : undefined} htmlFor={name}>
				{label}
			</label>
			<input value={value} name={name} onBlur={handleBlur} onChange={handleChange} type={type} />
		</div>
	);
}