import { Link } from "react-router-dom";

export default function Projekt({ title, description, technologies, images, githubLink, liveLink, backLink, children }) {
    return (
        <>
            {/* Header */}
            <div className="container py-5">
                <p className="mono text-accent mb-2">// Projekt</p>
                <h1 className="text-white mb-2">{title}</h1>
                <p className="text-secondary" style={{ maxWidth: "600px" }}>{description}</p>
            </div>

            <hr className="border-secondary" />

            {/* Bilder */}
            {images && images.length > 0 && (
                <div className="container py-5">
                    <div id="projektCarousel" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            {images.map((_, i) => (
                                <button key={i} type="button"
                                        data-bs-target="#projektCarousel"
                                        data-bs-slide-to={i}
                                        className={i === 0 ? "active" : ""}
                                />
                            ))}
                        </div>
                        <div className="carousel-inner rounded" style={{ maxHeight: 420 }}>
                            {images.map((img, i) => (
                                <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                                    <img src={img} alt={`${title} ${i + 1}`}
                                         className="d-block w-100"
                                         style={{ height: 420, objectFit: "cover" }}
                                    />
                                </div>
                            ))}
                        </div>
                        {images.length > 1 && (
                            <>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#projektCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" />
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#projektCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}

            {/* Technologien */}
            {technologies && technologies.length > 0 && (
                <>
                    <hr className="border-secondary" />
                    <div className="container py-5">
                        <p className="mono text-accent mb-3">// Technologien</p>
                        <div className="d-flex flex-wrap gap-2">
                            {technologies.map(t => (
                                <span key={t} className="badge bg-dark text-secondary mono px-3 py-2">{t}</span>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {/* Inhalt */}
            {children && (
                <>
                    <hr className="border-secondary" />
                    <div className="container py-5">
                        <p className="mono text-accent mb-4">// Details</p>
                        <div className="text-secondary" style={{ maxWidth: "720px" }}>
                            {children}
                        </div>
                    </div>
                </>
            )}

            {/* Links */}
            <hr className="border-secondary" />
            <div className="container py-5 d-flex gap-3 flex-wrap align-items-center">
                {githubLink && (
                    <a href={githubLink} target="_blank" rel="noopener noreferrer"
                       className="btn btn-outline-secondary">
                        <i className="bi bi-github me-2" />GitHub
                    </a>
                )}
                {liveLink && (
                    <a href={liveLink} target="_blank" rel="noopener noreferrer"
                       className="btn btn-accent">
                        <i className="bi bi-box-arrow-up-right me-2" />Live Demo
                    </a>
                )}
                <Link to={backLink ?? "/persProjekte"} className="btn btn-outline-secondary ms-auto">
                    ← Zurück
                </Link>
            </div>
        </>
    );
}