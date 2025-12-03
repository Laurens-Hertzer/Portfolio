export default function Projekt({ title, description, technologies, images, githubLink, liveLink, children }) {
    return (
        <div className="min-vh-100 bg-light">

            <div className="container-fluid p-5 bg-dark text-white">
                <div className="container">
                    <h1 className="display-4 mb-3">{title}</h1>
                    <p className="lead">{description}</p>
                </div>
            </div>


            {images && images.length > 0 && (
                <div className="container my-5">
                    <div
                        id="projektCarousel"
                        className="carousel slide"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            {images.map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    data-bs-target="#projektCarousel"
                                    data-bs-slide-to={index}
                                    className={index === 0 ? "active" : ""}
                                    aria-current={index === 0 ? "true" : "false"}
                                    aria-label={`Slide ${index + 1}`}
                                ></button>
                            ))}
                        </div>

                        <div className="carousel-inner rounded shadow">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                                >
                                    <img
                                        className="d-block w-100"
                                        src={img}
                                        alt={`${title} Screenshot ${index + 1}`}
                                        style={{ height: "500px", objectFit: "cover" }}
                                    />
                                </div>
                            ))}
                        </div>

                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#projektCarousel"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#projektCarousel"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            )}

            {technologies && technologies.length > 0 && (
                <div className="container my-5">
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="mb-4">Verwendete Technologien</h3>
                        <div className="d-flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    className="badge bg-primary px-3 py-2"
                                    style={{ fontSize: "1rem" }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Content Section (via children) */}
            <div className="container my-5">
                <div className="bg-white p-5 rounded shadow">
                    {children}
                </div>
            </div>

            {(githubLink || liveLink) && (
                <div className="container my-5">
                    <div className="d-flex gap-3 justify-content-center">
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-dark btn-lg"
                            >
                                <i className="bi bi-github me-2"></i>
                                GitHub Repository
                            </a>
                        )}
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-primary btn-lg"
                            >
                                <i className="bi bi-box-arrow-up-right me-2"></i>
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            )}

            <div className="container my-5 text-center">
                <a href="/PersProjekte" className="btn btn-secondary btn-lg">
                    <i className="bi bi-arrow-left me-2"></i>
                    Zurück zu Projekten
                </a>
            </div>
        </div>
    );
}