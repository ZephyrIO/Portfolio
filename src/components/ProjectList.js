import Image from "next/image";
import hangman from '../../public/assets/Hangman.png';
import cnb from '../../public/assets/CowsandBulls.png';
import ttt from '../../public/assets/TicTacToe.png';
import dodge from '../../public/assets/DodgetheCreeps.webp';
import squash from '../../public/assets/SquashtheCreeps.webp';

import './ProjectList.css';

export default function ProjectList ()
{
    return (
        <div className="grid">
            <div>
                <a href="https://github.com/ZephyrIO/Hangman-Java">
                    <Image src={hangman} alt="Hangman Game in the Terminal" width={500} height={375} />
                    <br />
                    Hangman
                </a>
            </div>
            <div>
                <a href="https://github.com/ZephyrIO/CowsAndBulls-Java">
                    <Image src={cnb} alt="Cows and Bulls (Wordle with Numbers) in the Terminal" width={500} height={375} />
                    <br />
                    Cows and Bulls
                </a>
            </div>
            <div>
                <a href="https://github.com/ZephyrIO/TicTacToe-Java">
                    <Image src={ttt} alt="Tic-Tac-Toe in the Terminal" width={500} height={375} />
                    <br />
                    Tic-Tac-Toe
                </a>
            </div>
            <div>
                <a href="https://github.com/ZephyrIO/Dodge-the-Creeps">
                    <Image src={dodge} alt="Dodge the Creeps Demo Game from Godot Docs" />
                    <br />
                    Dodge the Creeps
                </a>
            </div>
            <div>
                <a href="https://github.com/ZephyrIO/Squash-the-Creeps">
                    <Image src={squash} alt="Squash the Creeps Demo Game from Godot Docs" />
                    <br />
                    Squash the Creeps
                </a>
            </div>
        </div>
    )
}