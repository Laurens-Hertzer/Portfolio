import Projekt from '../Projekt.jsx';

export default function Portfolio() {
    return (
        <Projekt
            title="Portfolio Website"
            description="Meine persönliche Portfolio-Website gebaut mit React, Vite und Spring Boot"
            technologies={[
                "React",
                "Vite",
                "Spring Boot",
                "React Router",
                "Bootstrap",
                "JavaScript"
            ]}
            images={[
                "/schulprojekte.png",
                "/persprojekte.png",
                "/homepage.png",
                "/ausbildung.png"
            ]}
            githubLink="https://github.com/laurens-hertzer/portfolio_hertzer"
            liveLink="/"
        >

            <h2 className="mb-4">Über dieses Projekt</h2>

            <div className="mb-4">
                <h4>Projektziel</h4>
                <p>
                    Diese Portfolio-Website wurde entwickelt, um meine persönlichen Projekte
                    und Fähigkeiten als Programmierer zu präsentieren. Das Ziel war es, eine
                    moderne, responsive und benutzerfreundliche Plattform zu schaffen.
                </p>
            </div>

            <div className="mb-4">
                <h4>Technische Umsetzung</h4>
                <p>
                    work in progress
                </p>
                <p>
                    work in progress
                </p>
            </div>

            <div className="mb-4">
                <h4>Features</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        work in progress
                    </li>
                </ul>
            </div>

            <div className="mb-4">
                <h4>Herausforderungen & Lösungen</h4>
                <p>
                    work in progress
                </p>
            </div>

            <div className="mb-4">
                <h4>Zukünftige Erweiterungen</h4>
                <ul>
                    <li>Dunkelmodus-Unterstützung</li>
                    <li>Kontaktformular mit Backend-Integration</li>
                    <li>Performance-Optimierungen</li>
                </ul>
            </div>

            <div className="alert alert-info" role="alert">
                <strong>Hinweis:</strong> Dieses Projekt wird kontinuierlich weiterentwickelt
                und um neue Features erweitert.
            </div>
        </Projekt>
    );
}