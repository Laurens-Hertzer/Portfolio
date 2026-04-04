const timeline = [
    {
        date:    "2027 – 2028",
        title:   "Praktikum",
        place:   "Noch zu bestimmen",
        badge:   "Letzter Schritt zum Vollenden meiner schulischen Ausbildung",
        active:  false,
        details: [
            "In der IMS muss nach drei Jahren Schule ein Jahr für ein Praktikum benutzt werden. Dafür stehen jedoch noch viele Details offen.",
        ],
    },
    {
        date:    "2024 – 2027",
        title:   "IMS Informatikmittelschule",
        place:   "Mittelschule Büelrain & BBW Winterthur",
        badge:   "Applikationsentwickler EFZ + Berufsmaturität Wirtschaft",
        active:  true,
        details: [
            "Programmieren mit Java und JavaScript",
            "Datenbanken, Netzwerke und Webentwicklung",
            "Mathematik, Wirtschaft, Finanzen, Englisch und Deutsch",
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
    {
        category: "Sprachen",
        badges: [
            "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white",
            "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E",
            "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
            "https://img.shields.io/badge/bash_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white",
            "https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white",
        ],
    },
    {
        category: "Frameworks & Libraries",
        badges: [
            "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
            "https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
            "https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white",
        ],
    },
    {
        category: "Datenbanken",
        badges: [
            "https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white",
            "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white",
        ],
    },
    {
        category: "Tools",
        badges: [
            "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
            "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
            "https://img.shields.io/badge/IntelliJ_IDEA-000000?style=for-the-badge&logo=intellij-idea&logoColor=white",
            "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white",
            "https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white",
        ],
    },
];

export default function Ausbildung() {
    return (
        <>
            <div className="container py-5 pb-3">
                <p className="mono text-accent mb-2">// Ausbildung</p>
                <h1 className="text-white mb-1">Mein Werdegang</h1>
                <p className="text-secondary">Vom Schüler zum Applikationsentwickler.</p>
            </div>

            <hr className="border-secondary" />

            <div className="container py-5 pb-3">
                <p className="mono text-accent mb-4">// Werdegang</p>
                <div className="border-start border-secondary ps-4">
                    {timeline.map((item, i) => (
                        <div key={i} className="mb-5 position-relative">
                            <div className="position-absolute rounded-circle"
                                 style={{
                                     width: 12, height: 12,
                                     left: -29, top: 4,
                                     background: item.active ? "var(--accent)" : "rgba(255,255,255,0.2)",
                                     boxShadow: item.active ? "0 0 0 4px rgba(42,107,130,0.2)" : "none",
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

            <div className="container py-5">
                <p className="mono text-accent mb-4">// Kenntnisse</p>
                <div className="row g-4">
                    {skills.map(({ category, badges }) => (
                        <div key={category} className="col-md-6">
                            <div className="bg-secondary rounded p-4 h-100">
                                <h6 className="text-white mb-3">{category}</h6>
                                <div className="d-flex flex-wrap gap-2">
                                    {badges.map(url => (
                                        <img key={url} src={url} alt="" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="border-secondary" />

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