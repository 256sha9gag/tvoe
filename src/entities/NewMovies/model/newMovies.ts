type TNewMoviesCard = {
    rating: string;
    src: string;
    alt: string;
    height: number;
    width: number;
    title: string;
}

const height: number = 597
const width: number = 398

export const newMoviesTitle: string = 'Новинки';

export const newMoviesCards: TNewMoviesCard[] = [
    {
        rating: '10',
        src: '/images/new-movies/blue-beetle.png',
        alt: 'blue-beetle-img',
        height,
        width,
        title: 'Синий жук'
    },
    {
        rating: '6,9',
        src: '/images/new-movies/home-game.png',
        alt: 'home-game-img',
        height,
        width,
        title: 'Домашняя игра'
    },
    {
        rating: '5,8',
        src: '/images/new-movies/solut-7.jpeg',
        alt: 'solut-7-img',
        height,
        width,
        title: 'Салют 7'
    },
    {
        rating: '7,0',
        src: '/images/new-movies/сatch-me-if-you-can.jpeg',
        alt: 'сatch-me-if-you-can-img',
        height,
        width,
        title: 'Поймай меня, если сможешь'
    },
];