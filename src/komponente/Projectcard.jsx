import { Link } from "react-router-dom";

export function ProjectCard({ title, desc, tags, link, github, type, icon }) {
    return (
        <div className="col-md-4">
            <div className="bg-secondary rounded p-4 h-100 project-card d-flex flex-column">

                <div className="d-flex justify-content-between align-items-start mb-3">
                    <img src={icon} alt={title} style={{ width: 36, height: 36, objectFit: "contain", borderRadius: 8 }} />
                    <span className="mono text-secondary">{type}</span>
                </div>

                <h5 className="text-white mb-2">{title}</h5>
                <p className="text-secondary small flex-grow-1">{desc}</p>

                <div className="d-flex flex-wrap gap-1 mb-3">
                    {tags.map(t => (
                        <span key={t} className="badge bg-dark text-secondary mono">{t}</span>
                    ))}
                </div>

                <div className="d-flex gap-3 pt-3 border-top border-secondary">
                    <Link to={link} className="text-accent small text-decoration-none">Details →</Link>
                    <a href={github} target="_blank" rel="noopener noreferrer"
                       className="text-secondary small text-decoration-none">GitHub ↗</a>
                </div>

            </div>
        </div>
    );
}