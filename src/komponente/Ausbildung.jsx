export default function Ausbildung() {
    const documents = [

        {
            title: "Zeugnis IMS Semester 1 (KBW)",
            description: "Zeugnis des ersten Semesters an der IMS (KBW).",
            path: "ims_sem1.pdf",
            id: "ims-sem1"
        },
        {
            title: "Zeugnis IMS Semester 2 (KBW)",
            description: "Zeugnis des zweiten Semesters an der IMS (KBW).",
            path: "ims_sem2.pdf",
            id: "ims-sem2"
        },
        {
            title: "Zeugnis IMS Semester 3 (KBW)",
            description: "Zeugnis des dritten Semesters an der IMS (KBW).",
            path: "ims_sem3.pdf",
            id: "ims-sem3"
        },

        {
            title: "Zeugnis IMS Semester 1 (BBW)",
            description: "Zeugnis eines Semesters an der Berufsbildungsschule Winterthur.",
            path: "bbw_sem1.pdf",
            id: "bbw-sem1"
        },
        {
            title: "Zeugnis IMS Semester 2 (BBW)",
            description: "Zeugnis eines Semesters an der Berufsbildungsschule Winterthur.",
            path: "bbw_sem2.pdf",
            id: "bbw-sem2"
        },
        {
            title: "Zeugnis IMS Semester 3 (BBW)",
            description: "Zeugnis eines Semesters an der Berufsbildungsschule Winterthur.",
            path: "bbw_sem3.pdf",
            id: "bbw-sem3"
        },

        {
            title: "Zeugnis Sekundarschule – Jahr 1",
            description: "Erstes Jahreszeugnis der Sekundarschule.",
            path: "sek_jahr1.pdf",
            id: "sek1"
        },
        {
            title: "Zeugnis Sekundarschule – Jahr 2",
            description: "Zweites Jahreszeugnis der Sekundarschule.",
            path: "sek_jahr2.pdf",
            id: "sek2"
        },
        {
            title: "Zeugnis Sekundarschule – Jahr 3",
            description: "Drittes Jahreszeugnis der Sekundarschule.",
            path: "sek_jahr3.pdf",
            id: "sek3"
        }
    ];

    return (
        <>
            <style>
                {`
                    h1 {
                        text-align: center;
                    }
                `}
            </style>

            <div className="container-fluid p-4 bg-dark text-white">
                <h1 className="display-1">Meine Ausbildung</h1>
            </div>

            <div className="container-fluid normalText p-4">
                <p className="h2 fw-bold">Gerade jetzt</p>
                <p className="h5">
                    Momentan besuche ich die IMS (Informatikmittelschule) an der Mittelschule Büelrain und
                    Berufsbildungsschule in Winterthur. Dort erlerne ich den Beruf des Applikationsentwicklers EFZ
                    mit der wirtschaftlichen Berufsmaturität.
                </p>

                <p className="h2 fw-bold">Davor</p>
                <p className="h5">
                    Bis dahin habe ich als erstes eine Deutsch/Englisch Bilinguale Schule besucht, bis ich dann
                    während der Primarschule zur öffentlichen Schule wechselte.
                </p>
            </div>

            <div className="container my-5">
                <h2 className="mb-4 text-center">Meine Dokumente</h2>

                <div className="row g-4">
                    {documents.map((doc, index) => (
                        <div className="col-md-4" key={index}>
                            <div className="p-4 bg-secondary rounded shadow h-100 text-white">
                                <h3 className="mb-3">{doc.title}</h3>
                                <p className="text-light flex-grow-1">{doc.description}</p>

                                <div className="d-grid gap-2 mt-3">
                                    <button
                                        className="btn btn-light"
                                        data-bs-toggle="modal"
                                        data-bs-target={`#modal${doc.id}`}
                                    >
                                        Preview
                                    </button>

                                    <a
                                        href={doc.path}
                                        className="btn btn-outline-light"
                                        download
                                    >
                                        Download
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

            {documents.map((doc, index) => (
                <div className="modal fade" id={`modal${doc.id}`} tabIndex="-1" key={index}>
                    <div className="modal-dialog modal-xl">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{doc.title}</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    aria-label="Close"
                                ></button>
                            </div>

                            <div className="modal-body p-0">
                                <iframe
                                    src={doc.path}
                                    width="100%"
                                    height="600px"
                                    style={{ border: 'none' }}
                                    title={doc.title}
                                />
                            </div>

                            <div className="modal-footer">
                                <a
                                    href={doc.path}
                                    className="btn btn-primary"
                                    download
                                >
                                    Download
                                </a>

                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Schließen
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
