import styles from './Avatar.module.scss';
import fallback from '../../Assets/images/person.svg';
import React from 'react';

interface Props {
    src?: string;
}

export default function Avatar({ src }: Props) {
    function handleError(event: React.InvalidEvent<HTMLImageElement>) {
        event.currentTarget.src = fallback;
    }
    return (
        <img id={styles.avatar} src={src || fallback} alt="avatar" onError={handleError}></img>
    )
}