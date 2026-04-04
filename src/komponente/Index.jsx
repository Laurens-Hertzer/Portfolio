import { Link } from "react-router-dom";

const stack    = ["Java", "Spring Boot", "React", "JavaScript", "Vite", "Git", "Linux", "SQL"];
const featured = ["Java", "Spring Boot", "React", "JavaScript"];

export default function Index() {
    return (
        <>
            <div className="container py-5">
                <p className="mono text-accent mb-3 d-flex align-items-center gap-2">
                    <span className="dot-blink d-inline-block" />
                    VERFÜGBAR FÜR PRAKTIKUM für HS 2027
                </p>

                <h1 className="display-1 text-white mb-4">
                    Laurens Alexander<br />
                    <span className="text-accent" style={{ letterSpacing: "0.1em", fontSize: "0.6em" }}>
                        HERTZER
                    </span>
                </h1>

                <p className="text-secondary fs-5 fw-light mb-4" style={{ maxWidth: "480px" }}>

                </p>

                <div className="d-flex gap-3 flex-wrap">
                    <Link to="/persProjekte" className="btn btn-light">Projekte ansehen →</Link>
                    <Link to="/ausbildung"   className="btn btn-outline-secondary">Ausbildung</Link>
                </div>
            </div>

            <hr className="border-secondary" />

            <div className="container py-4">
                <div className="row row-cols-3 text-center g-0 border border-secondary rounded">
                    {[
                        { num: "1+",   label: "Jahre Coding" },
                        { num: "5+",   label: "Projekte" },
                        { num: "2027", label: "Abschluss EFZ" },
                    ].map(({ num, label }, i) => (
                        <div key={label} className={`col py-4 ${i < 2 ? "border-end border-secondary" : ""}`}>
                            <div className="h1 text-white mb-1">{num}</div>
                            <div className="mono text-secondary">// {label}</div>
                        </div>
                    ))}
                </div>
            </div>

            <hr className="border-secondary" />

            <div className="container py-5">
                <p className="mono text-accent mb-3">// Die Website</p>
                <p className="text-secondary" style={{ maxWidth: "560px" }}>
                    Willkommen auf meiner Portfolio-Website. Hier finden Sie meine Projekte,
                    schulisch wie persönlich, meinen Ausbildungsweg und wie Sie mich erreichen können.
                </p>
            </div>
        </>
    );
}