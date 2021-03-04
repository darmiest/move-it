import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext);


    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/52114937?s=460&u=1d33b0b35500f15c6f8ea5c0932336e478cda037&v=4" alt="Daiana Momberg" />
            <div>
                <strong>Daiana Momberg de Andrade</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}