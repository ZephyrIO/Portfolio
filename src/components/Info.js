import { Karla } from "next/font/google";
import './Info.css';

const karla = Karla({ subsets: ["latin"] });

export default function Info ()
{
    return (
        <div className="text">
            <h2>Who am I?</h2>
            <br />
            <ul className={karla.className}>
                <li>I am a Computer Science student at the University of Georgia and I am aiming to excel within the software development industry.</li>
                <br />
                <li>I am proficient with a multitude of programming languages such as Java, SQL, C/C++, C# and HTML.</li>
                <br />
                <li>I am experienced in usage of various game development engines such as Unity and Godot.</li>
                <br />
                <li>I possess effective communication skills, and am able to clearly and confidently explain myself and my ideas to others.</li>
                <br />
                <li>I can work well in both a team or individually and can be efficient regardless of my workflow.</li>
            </ul>
        </div>
    )
}