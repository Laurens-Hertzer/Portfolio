import { ProjectCard } from "./ProjectCard.jsx";

const projects = [
    {
        title:  "Portfolio Website",
        desc:   "Portfolio Website für das Darstellen von meinen Projekten und mich selber-",
        tags:   ["React", "Vite", "GitHub Pages"],
        link:   "/Portfolio",
        github: "https://github.com/laurens-hertzer/portfolio_hertzer",
        type:   "PERSÖNLICH",
        icon:   "src/assets/portfolio-icon.png",
    },
];

export default function PersProjekte() {
    return (
        <>
            <div className="container py-5">
                <p className="mono text-accent mb-2">// Persönliche Projekte</p>
                <h1 className="text-white mb-1">Was ich aus eigenem Antrieb gebaut habe</h1>
                <p className="text-secondary">Projekte, die ich in meiner Freizeit entwickelt habe.</p>
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