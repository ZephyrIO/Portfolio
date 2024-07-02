import Image from "next/image";
import hangman from '../../public/assets/Hangman.png';
import cnb from '../../public/assets/CowsandBulls.png';
import ttt from '../../public/assets/TicTacToe.png';

import './ProjectList.css';

export default function ProjectList ()
{
    return (
        <div className="grid">
            <div>
                <a href="https://github.com/ZephyrIO/Hangman-Java">
                    <Image src={hangman} alt="Hangman Game in the Terminal" width={500} height={400} />
                    <br />
                    Hangman
                </a>
            </div>
            <div>
                <a href="https://github.com/ZephyrIO/CowsAndBulls-Java">
                    <Image src={cnb} alt="Cows and Bulls (Wordle with Numbers) in the Terminal" width={500} height={400} />
                    <br />
                    Cows and Bulls
                </a>
            </div>
            <div>
                <a href="https://github.com/ZephyrIO/TicTacToe-Java">
                    <Image src={ttt} alt="Tic-Tac-Toe in the Terminal" width={500} height={400} />
                    <br />
                    Tic-Tac-Toe
                </a>
            </div>
        </div>
    )
}