import Image from "next/image";
import hangman from '../../public/assets/Hangman.png';

export default function ProjectList ()
{
    return (
        <div className="grid">
            <div>
                <a href="https://github.com/ZephyrIO/Hangman-Java">
                    <Image src={hangman} alt="Hangman in the Terminal" />
                </a>
            </div>
        </div>
    )
}