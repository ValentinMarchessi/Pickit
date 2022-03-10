import { ReactEventHandler, useState } from 'react';

type HTMLElementEvent<T extends HTMLElement> = React.SyntheticEvent<any, Event> & {
	target: T;
};

export default function useInput(): [string | number, ReactEventHandler] {
	const [value, setValue] = useState<string | number>('');

	const handler = (event: HTMLElementEvent<HTMLInputElement>) => {
		const { value } = event.target;
		setValue(value);
	};

	return [value, handler];
}
