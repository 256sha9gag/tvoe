import { FC } from 'react';
import Image from 'next/image';
import styles from '@/entities/NewMovies/styles/newMovies.module.css';
import { newMoviesCards, newMoviesTitle } from '../model/newMovies';
import { Raiting } from '@/shared/Raiting/UI/Raiting';

export const NewMovies: FC = () => {
    return (
        <section
            className={styles.sectionWrapper}
        >
            <h1
                className={styles.title}
            >
                {newMoviesTitle}
            </h1>
            <ul
                className={styles.listWrapper}
            >
                {
                    newMoviesCards.map((movieData, index) => {
                        return (
                            <li
                                key={index}
                                className={styles.cardWrapper}
                            >
                                <div 
                                    className={styles.cardImageWrapper}
                                >
                                    <Raiting
                                        type='Large'
                                    >
                                        {movieData.rating}
                                    </Raiting>
                                    <Image
                                        className={styles.cardImage}
                                        src={movieData.src}
                                        alt={movieData.alt}
                                        width={movieData.width}
                                        height={movieData.height}
                                    />
                                </div>
                                <h5
                                    className={styles.cardTitle}
                                >
                                    {movieData.title}
                                </h5>
                            </li>
                        );
                    })
                }
            </ul>
        </section>
    );
};
