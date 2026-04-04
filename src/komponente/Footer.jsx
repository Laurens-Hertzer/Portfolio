import { Link } from "react-router-dom";

const links = [
    { to: "/",             label: "Home" },
    { to: "/ausbildung",   label: "Ausbildung" },
    { to: "/persProjekte", label: "Pers. Projekte" },
    { to: "/schulProjekte",label: "Schulprojekte" },
];

export default function Footer() {
    return (
        <footer className="border-top border-secondary mt-5">
            <div className="container py-4 d-flex flex-wrap justify-content-between align-items-center gap-4">

                <div>
                    <div className="fw-bold text-white">L.A.<span className="text-accent">H</span></div>
                    <div className="mono text-secondary">© 2026 Laurens Alexander Hertzer</div>
                </div>

                <ul className="list-unstyled d-flex gap-4 mb-0 flex-wrap">
                    {links.map(({ to, label }) => (
                        <li key={to}>
                            <Link to={to} className="text-secondary text-decoration-none small">{label}</Link>
                        </li>
                    ))}
                </ul>

                <div className="d-flex align-items-center gap-3">
                    <a href="mailto:laurens.hertzer@gmail.com"
                       className="mono text-secondary text-decoration-none">
                        laurens.hertzer@gmail.com
                    </a>
                    <a href="https://github.com/laurens-hertzer" target="_blank" rel="noopener noreferrer"
                       className="text-secondary">
                        <i className="bi bi-github fs-5" />
                    </a>
                </div>

            </div>
        </footer>
    );
}