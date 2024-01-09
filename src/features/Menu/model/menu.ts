type TIconsData = {
    src: string;
    alt: string;
    height: number;
    width: number;
};

const height: number = 44;
const width: number = 44;

export const iconLogo: TIconsData = {
    src: '/icons/logo.svg',
    alt: 'logo-icon',
    width: 144,
    height: 50,
};

export const iconUpArrow: TIconsData = {
    src: '/icons/upArrow.svg',
    alt: 'upArrow-icon',
    width: height,
    height: width,
};

export const iconsData: TIconsData[] = [
    {
        src: '/icons/search.svg',
        alt: 'search-icon',
        height,
        width,
    },
    {
        src: '/icons/home.svg',
        alt: 'home-icon',
        height,
        width,
    },
    {
        src: '/icons/movie.svg',
        alt: 'movie-icon',
        height,
        width,
    },
    {
        src: '/icons/tv.svg',
        alt: 'tv-icon',
        height,
        width,
    },
    {
        src: '/icons/favourites.svg',
        alt: 'favourites-icon',
        height,
        width,
    },
    {
        src: '/icons/user.svg',
        alt: 'user-icon',
        height,
        width,
    },
];
