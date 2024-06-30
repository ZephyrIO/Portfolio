import Link from "next/link";
import "./Header.css";

export default function Header ()
{
    return (
        <div className="header">
            <h1>Aditya Mukila</h1>
            <h3><Link href={'/'}>Home</Link></h3>
            <h3><Link href={'/project'}>Projects</Link></h3>
        </div>
    )
}