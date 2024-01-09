import { FC, Fragment } from 'react';
import styles from '@/features/Menu/styles/menu.module.css';
import Image from 'next/image';
import { iconLogo, iconUpArrow, iconsData } from '../model/menu';

export const Menu: FC = () => {
    return (
        <div
            className={styles.menuWrapper}
        >
            <a
                className={styles.logo}
                href=""
            >
                <Image
                    src={iconLogo.src}
                    alt={iconLogo.alt}
                    width={iconLogo.width}
                    height={iconLogo.height}
                />
            </a>
            <div
                className={styles.navigationWrapper}
            >
                <nav
                    className={styles.navigation}
                >
                    {iconsData.map((iconData, index) => {
                        return (
                            <Fragment
                                key={index}
                            >
                                <a 
                                    href=""
                                    className={styles.navIcon}
                                >
                                    <Image
                                        src={iconData.src}
                                        alt={iconData.alt}
                                        width={iconData.width}
                                        height={iconData.height}
                                    />
                                </a>
                            </Fragment>
                        );
                    })}
                </nav>
                <a
                    className={styles.navIcon}
                    href=""
                >
                    <Image
                        src={iconUpArrow.src}
                        alt={iconUpArrow.alt}
                        width={iconUpArrow.width}
                        height={iconUpArrow.height}
                    />
                </a>
            </div>
        </div>
    );
};

export default Menu;