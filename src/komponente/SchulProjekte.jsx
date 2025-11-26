import Projekt from "./Projekt.jsx";

export default function SchulProjekte() {
    const projects = [
        {
            title: "Cluedo API",
            desc: "Meine API, mit welcher man Daten zu dem Spiel Cluedo laden kann",
            link: "/CluedoAPI",
        }
    ];
    return (
        <>
            <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
                style={{height: "50%", margin: "0 auto"}}
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/Berufsbildungsschule_Winterthur_logo.svg"
                             alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/Logog_KBW_farbig2.svg"
                             alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/zeugnis.svg"
                             alt="Third slide"/>
                    </div>
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                <style>
                    {`
          .carousel-inner {
  height: 500px; /* Gewünschte Carousel-Höhe */
}

.carousel-item {
  height: 100%;
}

.carousel-item img {
  width: 70%;
  height: 100%;
  object-fit: contain;
  margin: 0 auto; 
}
.carousel-control-prev,
.carousel-control-next {
    background-color: rgba(0, 0, 0, 0.3);
    width: 5%;
    filter: invert(1);
}
.carousel-indicators button {
    border: 2px solid black;
    background-color: white;
}

.carousel-indicators .active {
    background-color: black;
}
        `//object-fit: cover;
                    }
                </style>
            </div>
            <>
                <div className="container-fluid p-4 bg-dark text-white">
                    <h1>Meine schulische Projekte</h1>
                    <p>Projekte welche ich als Aufgabe meiner Schule/n bekommen habe.</p>
                </div>
            </>
            <div className="container-fluid bg-white text-black py-5">
                <div className="row g-4">
                    {projects.map((p, i) => (
                        <div className="col-md-4" key={i}>
                            <div className="p-4 bg-secondary rounded shadow h-100">
                                <h3 className="mb-3">{p.title}</h3>
                                <p className="text-light">{p.desc}</p>
                                <a className="btn btn-light mt-2" href={p.link}>Ansehen</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}