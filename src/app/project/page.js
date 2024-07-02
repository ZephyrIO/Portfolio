import Header from "@/components/Header";
import ProjectList from "@/components/ProjectList";
import './project.css';

export default function Projects ()
{
    return (
        <div className="project">
            <Header />
            <h1>Projects</h1><br />
            <ProjectList />
        </div>
    )
}