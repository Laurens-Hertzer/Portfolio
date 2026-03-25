const timeline = [
    {
        date:    "2023 – 2026",
        title:   "IMS Informatikmittelschule",
        place:   "Mittelschule Büelrain & BBW Winterthur",
        badge:   "Applikationsentwickler EFZ + Berufsmaturität",
        active:  true,
        details: [
            "Programmieren mit Java und JavaScript",
            "Datenbanken, Netzwerke und Webentwicklung",
            "Mathematik, Wirtschaft, Englisch und Deutsch",
        ],
    },
    {
        date:    "2020 – 2023",
        title:   "Sekundarschule",
        place:   "Öffentliche Schule, Kanton Zürich",
        active:  false,
        details: [],
    },
    {
        date:    "Davor",
        title:   "Bilinguale Primarschule",
        place:   "Deutsch / Englisch",
        active:  false,
        details: [],
    },
];

const skills = [
    { category: "Backend",   items: ["Java", "Spring Boot", "REST APIs", "SQL"] },
    { category: "Frontend",  items: ["React", "JavaScript", "Bootstrap", "HTML/CSS"] },
    { category: "Tools",     items: ["Git", "IntelliJ", "Linux", "Vite"] },
];

export default function Ausbildung() {
    return (
        <>
            <div className="container py-5">
                <p className="mono text-accent mb-2">// Ausbildung</p>
                <h1 className="text-white mb-1">Mein Werdegang</h1>
                <p className="text-secondary">Vom Schüler zum Applikationsentwickler.</p>
            </div>

            <hr className="border-secondary" />

            {/* Timeline */}
            <div className="container py-5">
                <p className="mono text-accent mb-4">// Werdegang</p>
                <div className="border-start border-secondary ps-4">
                    {timeline.map((item, i) => (
                        <div key={i} className="mb-5 position-relative">
                            <div className="position-absolute rounded-circle"
                                 style={{
                                     width: 12, height: 12,
                                     left: -29, top: 4,
                                     background: item.active ? "var(--accent)" : "rgba(255,255,255,0.2)",
                                     boxShadow: item.active ? "0 0 0 4px rgba(126,255,212,0.15)" : "none",
                                 }}
                            />
                            <p className="mono text-secondary mb-1">{item.date}</p>
                            <h5 className="text-white mb-0">{item.title}</h5>
                            <p className="text-secondary small mb-2">{item.place}</p>

                            {item.badge && (
                                <span className="mono text-accent border rounded px-2 py-1 d-inline-block mb-3"
                                      style={{ fontSize: "0.65rem", borderColor: "var(--accent)" }}>
                  {item.badge}
                </span>
                            )}

                            {item.details.length > 0 && (
                                <ul className="text-secondary small mb-0 ps-3">
                                    {item.details.map((d, j) => (
                                        <li key={j}>{d}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <hr className="border-secondary" />

            {/* Skills */}
            <div className="container py-5">
                <p className="mono text-accent mb-4">// Kenntnisse</p>
                <div className="row g-4">
                    {skills.map(({ category, items }) => (
                        <div key={category} className="col-md-4">
                            <div className="bg-secondary rounded p-4 h-100">
                                <h6 className="text-white mb-3">{category}</h6>
                                <div className="d-flex flex-wrap gap-2">
                                    {items.map(item => (
                                        <span key={item} className="badge bg-dark text-secondary mono">{item}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="border-secondary" />

            {/* Contact for documents */}
            <div className="container py-5">
                <div className="bg-secondary rounded p-4">
                    <p className="mono text-accent mb-2">// Dokumente</p>
                    <h5 className="text-white mb-2">Zeugnisse auf Anfrage</h5>
                    <p className="text-secondary small mb-3">
                        Offizielle Zeugnisse und weitere Dokumente stelle ich gerne auf Anfrage zur Verfügung.
                    </p>
                    <a href="mailto:laurens.hertzer@gmail.com" className="btn btn-outline-secondary btn-sm">
                        Anfrage per E-Mail
                    </a>
                </div>
            </div>
        </>
    );
}