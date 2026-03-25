import { ProjectCard } from "./ProjectCard.jsx";

const projects = [
    {
        title:  "Cluedo REST API",
        desc:   "Eine Spring Boot API für Cluedo. Liefert Daten zu Figuren, Waffen und Räumen per GET-Request.",
        tags:   ["Java", "Spring Boot", "REST"],
        link:   "/CluedoAPI",
        github: "https://github.com/laurens-hertzer/cluedo_api",
        type:   "SCHULISCH",
        icon:   "?",
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