import Projekt from '../Projekt.jsx';
import homepageImg from "/src/assets/screenshots/index_portfolio.png";
import persprojekteImg from "/src/assets/screenshots/persProjekte_portfolio.png";
import schulprojekteImg from "/src/assets/screenshots/schulProjekte_portfolio.png";
import ausbildungImg from "/src/assets/screenshots/ausbildung_portfolio.png";

export default function Portfolio() {
    return (
        <Projekt
            contain
            title="Portfolio Website"
            description="Meine persönliche Portfolio-Website auf der ich meine Projekte und meinen Ausbildungsweg präsentiere."
            technologies={["React", "Vite", "JavaScript", "Bootstrap", "React Router", "GitHub Pages"]}
            images={[homepageImg, ausbildungImg, persprojekteImg, schulprojekteImg]}
            githubLink="https://github.com/Laurens-Hertzer/Portfolio"
            liveLink="https://laurens-hertzer.github.io/Portfolio"
            backLink="/persProjekte"
        >
            <div className="mb-4">
                <h4>Projektziel</h4>
                <p>
                    Ziel war es, eine eigene Portfolio-Website zu bauen um meine Projekte,
                    Kenntnisse und meinen Ausbildungsweg öffentlich zu präsentieren.
                </p>
            </div>

            <div className="mb-4">
                <h4>Technische Umsetzung</h4>
                <p>
                    Das Frontend wurde mit React und Vite gebaut. Die Navigation läuft über
                    React Router mit HashRouter, damit das Routing auf GitHub Pages funktioniert.
                    Das Styling basiert auf Bootstrap mit einer eigenen CSS-Datei für das Dark Theme
                    und die Akzentfarben.
                </p>
            </div>

            <div className="mb-4">
                <h4>Features</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <strong>Dark / Light Mode:</strong> Umschaltbar über einen Button in der Navbar
                    </li>
                    <li className="list-group-item">
                        <strong>Projektseiten:</strong> Eigene Detailseite pro Projekt mit Technologien, Screenshots und Links
                    </li>
                    <li className="list-group-item">
                        <strong>Ausbildungs-Timeline:</strong> Übersicht über meinen Werdegang mit Kenntnissen als Badges
                    </li>
                    <li className="list-group-item">
                        <strong>Deployment:</strong> Automatisch deployed auf GitHub Pages via gh-pages
                    </li>
                </ul>
            </div>

            <div className="mb-4">
                <h4>Herausforderungen</h4>
                <p>
                    Die grösste Herausforderung war das Routing auf GitHub Pages. Mit BrowserRouter
                    gab es 404-Fehler bei direkten URL-Aufrufen. Die Lösung war der Wechsel auf
                    HashRouter, der alle Routen nach dem # im URL verwaltet.
                </p>
            </div>

            <div className="mb-4">
                <h4>Zukünftige Erweiterungen</h4>
                <ul>
                    <li>Kontaktformular</li>
                    <li>Mehr Projekte</li>
                </ul>
            </div>
        </Projekt>
    );
}