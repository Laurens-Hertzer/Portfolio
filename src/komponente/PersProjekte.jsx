import { ProjectCard } from "./ProjectCard.jsx";
import portfolioIcon from "../assets/icons/portfolio-icon.png";
import online_goIcon from "../assets/icons/online_go-icon.png";

const projects = [
    {
        title:  "Portfolio Website",
        desc:   "Portfolio Website für das Darstellen von meinen Projekten und mich selber-",
        tags:   ["React", "Vite", "GitHub Pages"],
        link:   "/Portfolio",
        github: "https://github.com/laurens-hertzer/portfolio_hertzer",
        type:   "PERSÖNLICH",
        icon:   portfolioIcon,
    },
    {
        title:  "Online Go Website",
        desc:   "Ein",
        tags:   ["JavaScript", "HTML", "CSS", "WebSocket", "Node.js", "Express", "Render"],
        link:   "/Online_Go_Website",
        github: "https://github.com/laurens-hertzer/Online_Go",
        type:   "PERSÖNLICH",
        icon:   online_goIcon,
    },
];

export default function PersProjekte() {
    return (
        <>
            <div className="container py-5" style={{ overflow: "visible", paddingBottom: "6px" }}>
                <p className="mono text-accent mb-2">// Persönliche Projekte</p>
                <h1 className="text-white mb-1" >Was ich aus eigenem Antrieb gebaut habe</h1>
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