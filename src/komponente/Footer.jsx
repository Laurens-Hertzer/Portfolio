import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div>
            <div className="container">
                <footer className="py-3 my-4">

                    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                        <li className="nav-item">
                            <Link to="/" className="nav-link px-2 text-muted">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/ausbildung" className="nav-link px-2 text-muted">Ausbildung</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/persProjekte" className="nav-link px-2 text-muted">Persönliche Projekte</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/schulProjekte" className="nav-link px-2 text-muted">Schulische Projekte</Link>
                        </li>
                    </ul>

                    {/* E-Mail & GitHub */}
                    <div className="d-flex justify-content-center align-items-center gap-4 mb-3">
                        <div className="text-muted text-decoration-none">E-Mail:</div>

                        {/* E-Mail Spot */}
                        <a
                            href="mailto:laurens.hertzer@gmail.com"
                            className="text-muted"
                            style={{ textDecoration: "none" }}
                        >laurens.hertzer@gmail.com
                        </a>

                        {/* GitHub Icon */}
                        <a
                            href="https://github.com/laurens-hertzer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                height="28"
                                width="28"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="text-muted"
                            >
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54
                                2.29 6.53 5.47 7.59.4.07.55-.17.55-.38
                                0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52
                                0-.53.63-.01 1.08.58 1.23.82.72 1.21
                                1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95
                                0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12
                                0 0 .67-.21 2.2.82A7.65 7.65 0 0 1 8 3.87c.68.003
                                1.36.092 2 .27 1.53-1.04 2.2-.82 2.2-.82.44
                                1.1.16 1.92.08 2.12.51.56.82 1.27.82
                                2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54
                                1.48 0 1.07-.01 1.93-.01 2.2
                                0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </a>

                    </div>

                    <p className="text-center text-muted">© 2025 Laurens Alexander Hertzer</p>
                </footer>
            </div>
        </div>
    );
}
