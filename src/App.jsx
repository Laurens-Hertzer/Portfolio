import { HashRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Index         from "./komponente/Index.jsx";
import Ausbildung    from "./komponente/Ausbildung.jsx";
import PersProjekte  from "./komponente/PersProjekte.jsx";
import SchulProjekte from "./komponente/SchulProjekte.jsx";
import Portfolio     from "./komponente/projektenseiten/Portfolio.jsx";
import CluedoAPI     from "./komponente/projektenseiten/CluedoAPI.jsx";
import Footer        from "./komponente/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./css/global.css";

const links = [
    { to: "/",             label: "Home",                 end: true },
    { to: "/ausbildung",   label: "Ausbildung" },
    { to: "/persProjekte", label: "Persönliche Projekte" },
    { to: "/schulProjekte",label: "Schulische Projekte" },
];

export default function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom border-secondary sticky-top">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src="/src/assets/logo.png" alt="L-A-H" height={36} />
                    </NavLink>

                    <button className="navbar-toggler" type="button"
                            data-bs-toggle="collapse" data-bs-target="#nav">
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="nav">
                        <ul className="navbar-nav ms-auto gap-2">
                            {links.map(({ to, label, end }) => (
                                <li className="nav-item" key={to}>
                                    <NavLink to={to} end={end}
                                             className={({ isActive }) =>
                                                 "nav-link" + (isActive ? " text-accent" : " text-secondary")
                                             }
                                    >
                                        {label}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>

            <main>
                <Routes>
                    <Route path="/"              element={<Index />} />
                    <Route path="/ausbildung"    element={<Ausbildung />} />
                    <Route path="/persProjekte"  element={<PersProjekte />} />
                    <Route path="/schulProjekte" element={<SchulProjekte />} />
                    <Route path="/Portfolio"     element={<Portfolio />} />
                    <Route path="/CluedoAPI"     element={<CluedoAPI />} />
                </Routes>
            </main>

            <Footer />
        </Router>
    );
}