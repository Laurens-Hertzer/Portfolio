import PersProjekte from "./komponente/PersProjekte.jsx";
import Ausbildung from "./komponente/Ausbildung.jsx";
import SchulProjekte from "./komponente/SchulProjekte.jsx";
import Index from "./komponente/Index.jsx";
import Portfolio from "./komponente/projektenseiten/Portfolio.jsx";
import Footer from "./komponente/Footer.jsx";
import CluedoAPI from "./komponente/projektenseiten/CluedoAPI.jsx";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
//import 'mdb-ui-kit/css/mdb.min.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
//import "./css/colors.css"


function App() {

    return (
        <Router>
            <div style={{padding: "0px", fontFamily: "Arial, sans-serif"}}>
                <header>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/"></Link>
                                <button
                                    className="navbar-toggler"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#navbarNav"
                                    aria-controls="navbarNav"
                                    aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarNav">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">
                                                Home
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/ausbildung">
                                                Ausbildung
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/persProjekte">
                                                Persöhnliche Projekte
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/schulProjekte">
                                                Schulische Projekte
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>


            <Routes>
                <Route path="/" element={<Index/>}/>
                <Route path="/ausbildung" element={<Ausbildung/>}/>
                <Route path="/persProjekte" element={<PersProjekte/>}/>
                <Route path="/schulProjekte" element={<SchulProjekte/>}/>
                <Route path="/Portfolio" element={<Portfolio/>}/>
                <Route path="/CluedoAPI" element={<CluedoAPI/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
