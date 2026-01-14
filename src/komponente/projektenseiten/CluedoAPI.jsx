import Projekt from '../Projekt.jsx';

export default function CluedoAPI() {
    return (
        <Projekt
            title="Portfolio Website"
            description="Meine persönliche Portfolio-Website gebaut mit React, Vite und Spring Boot"
            technologies={[
                "SpringBoot",
                "Java"
            ]}
            images={[
                "/assets/cluedoapi.png"
            ]}
            githubLink="https://github.com/laurens-hertzer/cluedo_api"
            liveLink="/"
        >

            <h2 className="mb-4">Über dieses Projekt</h2>

            <div className="mb-4">
                <h4>Projektziel</h4>
                <p>
                    Diese API ist für das Holen von Daten für ein Cluedospiel.
                </p>
            </div>

            <div className="mb-4">
                <h4>Technische Umsetzung</h4>
                <p>
                    Diese API wurde mithilfe von Springboot gebaut.
                </p>
            </div>

            <div className="mb-4">
                <h4>Features</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <strong>Get von Daten:</strong> Einfach in die Suchleiste vom Browser das korrekte hineinschreiben.
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
                    <li>work in progress</li>
                </ul>
            </div>

            <div className="alert alert-info" role="alert">
                <strong>Hinweis:</strong> Dieses Projekt wird kontinuierlich weiterentwickelt
                und um neue Features erweitert.
            </div>
        </Projekt>
    );
}