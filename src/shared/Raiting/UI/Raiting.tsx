import { FC } from 'react';
import styles from '@/shared/Raiting/styles/raiting.module.css';

interface IRaiting {
    type: 'Large' | 'Small';
    children: string;
};

export const Raiting: FC<IRaiting> = ({
    type,
    children,
}) => {
    return (
        <div
            className={styles[`raitingContainer${type}`]}
        >
            {children}
        </div>
    );
};
