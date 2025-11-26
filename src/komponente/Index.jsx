export default function Index() {
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
                        <img className="d-block w-100" src="/ich.svg" alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/ich.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="/3.svg" alt="Third slide"/>
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
            </div>
            <div className="container-fluid p-4 bg-dark text-white">
                <h1>Meine Homepage</h1>
                <p>Die Startseite meiner Website</p>
            </div>
            <div className="container-fluid normalText p-4">
                <p className="h2 fw-bold">Guten Tag Besucher. </p>
                <p className="h4 ">
                    Sie sind hier auf der meiner Portfolio Website auf welcher Sie meine Projekte,
                    schulisch wie auch persöhnliche, finden können. Falls Sie von meinen Projekten, meinen Kenntnissen
                    und
                    meinem Können beindruckt sind können Sie mehr über mich und meinen Ausbildungsweg nachschauen.
                    Gefällt es Ihnen wer ich bin? Kontaktieren Sie mich über meine Kontaktierungsmöglichkeiten, ganz
                    unten auf der Seite angezeigt.
                </p>
            </div>
            <style>
                {`
.carousel-inner {
  height: 500px; /* Gewünschte Carousel-Höhe */
}

.carousel-item {
  height: 100%;
}

.carousel-item img {
  width: 100%;
  height: 200%;
  object-fit: cover;
  margin: 0 auto; 
}
.carousel-control-prev,
.carousel-control-next {
    
    width: 5%;
    filter: invert(1);
}
        `}
            </style>
        </>
    )
        ;
}
