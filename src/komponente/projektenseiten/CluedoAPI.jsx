import Projekt from '../Projekt.jsx';

export default function CluedoAPI() {
    return (
        <Projekt
            title="Portfolio Website"
            description="Meine persönliche Portfolio-Website gebaut mit React, Vite und Spring Boot"
            technologies={[
                "React",
                "Vite",
                "Spring Boot",
                "React Router",
                "Bootstrap 5",
                "JavaScript",
                "Java"
            ]}
            images={[
                "/1.svg",
                "/2.svg",
                "/3.svg"
            ]}
            githubLink="https://github.com/IhrUsername/portfolio"
            liveLink="/"
        >
            {/* Detaillierter Content über das Projekt */}
            <h2 className="mb-4">Über dieses Projekt</h2>

            <div className="mb-4">
                <h4>Projektziel</h4>
                <p>
                    Diese Portfolio-Website wurde entwickelt, um meine persönlichen Projekte
                    und Fähigkeiten als Entwickler zu präsentieren. Das Ziel war es, eine
                    moderne, responsive und benutzerfreundliche Plattform zu schaffen.
                </p>
            </div>

            <div className="mb-4">
                <h4>Technische Umsetzung</h4>
                <p>
                    Das Frontend wurde mit <strong>React</strong> und <strong>Vite</strong> aufgebaut,
                    was eine schnelle Entwicklung und optimale Performance ermöglicht.
                    <strong>React Router</strong> sorgt für eine nahtlose Navigation zwischen
                    den verschiedenen Seiten.
                </p>
                <p>
                    Das Backend basiert auf <strong>Spring Boot</strong>, welches eine robuste
                    und skalierbare API-Struktur bereitstellt. Die Integration zwischen Frontend
                    und Backend erfolgt über RESTful APIs.
                </p>
            </div>

            <div className="mb-4">
                <h4>Features</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <strong>Responsive Design:</strong> Optimiert für alle Bildschirmgrößen
                    </li>
                    <li className="list-group-item">
                        <strong>Projekt-Carousel:</strong> Interaktive Präsentation von Projekten
                    </li>
                    <li className="list-group-item">
                        <strong>Dynamisches Routing:</strong> Effiziente Navigation mit React Router
                    </li>
                    <li className="list-group-item">
                        <strong>Bootstrap Integration:</strong> Modernes und konsistentes UI-Design
                    </li>
                    <li className="list-group-item">
                        <strong>Komponentenbasierte Architektur:</strong> Wiederverwendbare React-Komponenten
                    </li>
                </ul>
            </div>

            <div className="mb-4">
                <h4>Herausforderungen & Lösungen</h4>
                <p>
                    Eine der größten Herausforderungen war die Integration von React Router
                    mit Spring Boot. Durch korrekte Konfiguration der Build-Prozesse und
                    Server-Einstellungen konnte eine nahtlose Single-Page-Application (SPA)
                    realisiert werden.
                </p>
            </div>

            <div className="mb-4">
                <h4>Zukünftige Erweiterungen</h4>
                <ul>
                    <li>Dunkelmodus-Unterstützung</li>
                    <li>Mehrsprachigkeit (i18n)</li>
                    <li>Blog-Funktionalität</li>
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