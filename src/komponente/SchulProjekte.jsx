import { ProjectCard } from "./ProjectCard.jsx";
import gitIcon from "../assets/icons/git-icon.png";

const projects = [
    {
        title:  "Git Training Repository",
        desc:   "Ein Repository mit welchem ich den GitFlow erlernt habe. Korrektes Commiten, Merge/Mergekonflikte und Patches",
        tags:   ["Git", "Springboot", "GitExtensions", "GitHub"],
        link:   "/Git_training_repo",
        github: "https://github.com/laurens-hertzer/Git_training_repo",
        type:   "SCHULISCH",
        icon:   gitIcon,
    },
];

export default function SchulProjekte() {
    return (
        <>
            <div className="container py-5">
                <p className="mono text-accent mb-2">// Schulische Projekte</p>
                <h1 className="text-white mb-1">Was ich im Rahmen der Ausbildung gebaut habe</h1>
                <p className="text-secondary">Projekte aus dem Unterricht an der IMS und BBW Winterthur.</p>
            </div>

            <hr className="border-secondary" />

            <div className="container py-5">
                <div className="row g-4">
                    {projects.map(p => <ProjectCard key={p.title} {...p} />)}
                </div>
            </div>
        </>
    );
}