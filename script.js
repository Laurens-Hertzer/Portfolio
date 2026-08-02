const button = document.getElementById('theme-toggle');
button.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

/*
Der nächste Teil des Codes (bis zum nächsten Kommentar) ist Code von Ben Scott aus
diesem Repo https://github.com/bscottnz/portfolio-site. Der Code ist zuständig
für den Sterne/Partikel Hintergrund.
*/

const canvasDots = function () {
    const canvas = document.querySelector('canvas'),
        ctx = canvas.getContext('2d'),
        colorDot = [
            'rgb(81, 162, 233)',
            'rgb(81, 162, 233)',
            'rgb(81, 162, 233)',
            'rgb(81, 162, 233)',
            'rgb(255, 77, 90)',
        ], // 80% blue, 20% pink
        color = 'rgb(81, 162, 233)';

    canvas.width = document.body.scrollWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = color;

    let mousePosition = {
        x: (30 * canvas.width) / 100,
        y: (30 * canvas.height) / 100,
    };

    const windowSize = window.innerWidth;
    let dots;

    if (windowSize > 1600) {
        dots = {nb: 600, distance: 70, d_radius: 300, array: []};
    } else if (windowSize > 1300) {
        dots = {nb: 575, distance: 60, d_radius: 280, array: []};
    } else if (windowSize > 1100) {
        dots = {nb: 500, distance: 55, d_radius: 250, array: []};
    } else if (windowSize > 800) {
        dots = {nb: 300, distance: 0, d_radius: 0, array: []};
    } else if (windowSize > 600) {
        dots = {nb: 200, distance: 0, d_radius: 0, array: []};
    } else {
        dots = {nb: 100, distance: 0, d_radius: 0, array: []};
    }

    function Dot() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = -0.5 + Math.random();
        this.vy = -0.5 + Math.random();
        this.radius = Math.random() * 1.5;
        this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
    }

    Dot.prototype = {
        create: function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            const dotDistance =
                ((this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y) ** 2) ** 0.5;
            const distanceRatio = dotDistance / (windowSize / 1.7);
            ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;
            ctx.fill();
        },

        animate: function () {
            for (let i = 1; i < dots.nb; i++) {
                const dot = dots.array[i];
                if (dot.y < 0 || dot.y > canvas.height) {
                    dot.vy = -dot.vy;
                } else if (dot.x < 0 || dot.x > canvas.width) {
                    dot.vx = -dot.vx;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        },

        line: function () {
            for (let i = 0; i < dots.nb; i++) {
                for (let j = 0; j < dots.nb; j++) {
                    const i_dot = dots.array[i];
                    const j_dot = dots.array[j];
                    if (
                        i_dot.x - j_dot.x < dots.distance &&
                        i_dot.y - j_dot.y < dots.distance &&
                        i_dot.x - j_dot.x > -dots.distance &&
                        i_dot.y - j_dot.y > -dots.distance
                    ) {
                        if (
                            i_dot.x - mousePosition.x < dots.d_radius &&
                            i_dot.y - mousePosition.y < dots.d_radius &&
                            i_dot.x - mousePosition.x > -dots.d_radius &&
                            i_dot.y - mousePosition.y > -dots.d_radius
                        ) {
                            ctx.beginPath();
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            const dotDistance =
                                ((i_dot.x - mousePosition.x) ** 2 + (i_dot.y - mousePosition.y) ** 2) ** 0.5;
                            let distanceRatio = dotDistance / dots.d_radius;
                            distanceRatio -= 0.3;
                            if (distanceRatio < 0) distanceRatio = 0;
                            ctx.strokeStyle = `rgb(81, 162, 233, ${1 - distanceRatio})`;
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        },
    };

    function createDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let dot;
        for (let i = 0; i < dots.nb; i++) {
            dots.array.push(new Dot());
            dot = dots.array[i];
            dot.create();
        }
        dots.array[0].radius = 1.5;
        dots.array[0].colour = '#51a2e9';
        dot.line();
        dot.animate();
    }

    window.onmousemove = function (parameter) {
        // clientX/Y statt pageX/Y, damit Scroll die Position nicht verschiebt
        mousePosition.x = parameter.clientX;
        mousePosition.y = parameter.clientY;
        try {
            dots.array[0].x = parameter.clientX;
            dots.array[0].y = parameter.clientY;
        } catch {
        }
    };

    mousePosition.x = window.innerWidth / 2;
    mousePosition.y = window.innerHeight / 2;

    let lastTime = 0;

    function render(currentTime) {
        if (currentTime - lastTime >= 33) {
            createDots();
            lastTime = currentTime;
        }
        animationIdDots = requestAnimationFrame(render);
    }

    render(0);
};

const canvasDotsBg = function () {
    const canvas = document.querySelector('.canvas-2'),
        ctx = canvas.getContext('2d'),
        colorDot = [
            'rgb(81, 162, 233)',
            'rgb(81, 162, 233)',
            'rgb(81, 162, 233)',
            'rgb(255, 77, 90)',
        ], // 75% blue, 25% pink
        color = 'rgb(81, 162, 233)';

    canvas.width = document.body.scrollWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = 'block';
    ctx.lineWidth = 0.3;
    ctx.strokeStyle = color;

    let mousePosition = {
        x: (30 * canvas.width) / 100,
        y: (30 * canvas.height) / 100,
    };

    const windowSize = window.innerWidth;
    let dots;

    if (windowSize > 1600) {
        dots = {nb: 100, distance: 0, d_radius: 0, array: []};
    } else if (windowSize > 1300) {
        dots = {nb: 75, distance: 0, d_radius: 0, array: []};
    } else if (windowSize > 1100) {
        dots = {nb: 50, distance: 0, d_radius: 0, array: []};
    } else {
        dots = {nb: 1, distance: 0, d_radius: 0, array: []};
        ctx.globalAlpha = 0;
    }

    function Dot() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = -0.5 + Math.random();
        this.vy = -0.5 + Math.random();
        this.radius = Math.random() * 1.5;
        this.colour = colorDot[Math.floor(Math.random() * colorDot.length)];
    }

    Dot.prototype = {
        create: function () {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            const top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
            const dotDistance =
                ((this.x - mousePosition.x) ** 2 + (this.y - mousePosition.y + top) ** 2) ** 0.5;
            const distanceRatio = dotDistance / (windowSize / 2);
            ctx.fillStyle = this.colour.slice(0, -1) + `,${1 - distanceRatio})`;
            ctx.fill();
        },

        animate: function () {
            for (let i = 1; i < dots.nb; i++) {
                const dot = dots.array[i];
                if (dot.y < 0 || dot.y > canvas.height) {
                    dot.vy = -dot.vy;
                } else if (dot.x < 0 || dot.x > canvas.width) {
                    dot.vx = -dot.vx;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        },

        line: function () {
            for (let i = 0; i < dots.nb; i++) {
                for (let j = 0; j < dots.nb; j++) {
                    const i_dot = dots.array[i];
                    const j_dot = dots.array[j];
                    if (
                        i_dot.x - j_dot.x < dots.distance &&
                        i_dot.y - j_dot.y < dots.distance &&
                        i_dot.x - j_dot.x > -dots.distance &&
                        i_dot.y - j_dot.y > -dots.distance
                    ) {
                        if (
                            i_dot.x - mousePosition.x < dots.d_radius &&
                            i_dot.y - mousePosition.y < dots.d_radius &&
                            i_dot.x - mousePosition.x > -dots.d_radius &&
                            i_dot.y - mousePosition.y > -dots.d_radius
                        ) {
                            ctx.beginPath();
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            const dotDistance =
                                ((i_dot.x - mousePosition.x) ** 2 + (i_dot.y - mousePosition.y) ** 2) ** 0.5;
                            let distanceRatio = dotDistance / dots.d_radius;
                            distanceRatio -= 0.3;
                            if (distanceRatio < 0) distanceRatio = 0;
                            ctx.strokeStyle = `rgb(81, 162, 233, ${1 - distanceRatio})`;
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        },
    };

    function createDots() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let dot;
        for (let i = 0; i < dots.nb; i++) {
            dots.array.push(new Dot());
            dot = dots.array[i];
            dot.create();
        }
        dots.array[0].radius = 1.5;
        dots.array[0].colour = '#51a2e9';
        dot.animate();
    }

    window.onscroll = function () {
        mousePosition.x = window.innerWidth / 2;
        mousePosition.y = window.innerHeight / 2;
        const top = (window.pageYOffset || document.scrollTop) - (document.clientTop || 0);
        mousePosition.y += top;
    };

    let lastTimeBg = 0;

    function renderBg(currentTime) {
        if (currentTime - lastTimeBg >= 33) {
            createDots();
            lastTimeBg = currentTime;
        }
        animationIdBg = requestAnimationFrame(renderBg);
    }

    renderBg(0);
};

/* Ende des kopierten Code von Ben Scott */

let animationIdDots = null;
let animationIdBg = null;

window.onload = function () {
    canvasDotsBg();
    canvasDots();
};

//about
const skills = [
    {
        category: "Programmiersprachen & Markup",
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
        category: "Tools & Hardware",
        badges: [
            "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white",
            "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
            "https://img.shields.io/badge/IntelliJ_IDEA-000000?style=for-the-badge&logo=intellij-idea&logoColor=white",
            "https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white",
            "https://img.shields.io/badge/-Arduino-00979D?style=for-the-badge&logo=Arduino&logoColor=white",
        ],
    },
    {
        category: "Sprachen",
        badges: [
            "https://img.shields.io/badge/Deutsch-Muttersprache-4c1?style=for-the-badge",
            "https://img.shields.io/badge/Englisch-Fließend_(C2)-007ec6?style=for-the-badge",
            "https://img.shields.io/badge/Französisch-Zertifikat_(B1)-007ec6?style=for-the-badge",
        ],
    },
    {
        category: "IDEs und Codeeditoren",
        badges: [
            "https://img.shields.io/badge/Visual_Studio_Code-007ec6?style=for-the-badge",
            "https://img.shields.io/badge/Intellij-007ec6?style=for-the-badge",
            "https://img.shields.io/badge/WebStorm-007ec6?style=for-the-badge",
            "https://img.shields.io/badge/RustRover-007ec6?style=for-the-badge",
        ],
    },
];

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("skills-container");

    if (!container) return;

    skills.forEach(skill => {
        const badgeImages = skill.badges
            .map(url => `<img src="${url}" alt="" />`)
            .join("");

        const skillCard = `
            <div class="skill-card">
                <h6>${skill.category}</h6>
                <div class="badge-list">
                    ${badgeImages}
                </div>
            </div>
        `;

        container.insertAdjacentHTML("beforeend", skillCard);
    });
});

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        cancelAnimationFrame(animationIdDots);
        cancelAnimationFrame(animationIdBg);
        animationIdDots = null;
        animationIdBg = null;
        canvasDotsBg();
        canvasDots();
    }, 150);
});

document.addEventListener('DOMContentLoaded', () => {
    const tabLinks = document.querySelectorAll('.tab-link');

    const abschnitte = [];
    tabLinks.forEach(link => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#') && targetId.length > 1) {
            const el = document.querySelector(targetId);
            if (el) abschnitte.push({link, el});
        }
    });

    function setActive(link) {
        tabLinks.forEach(l => l.classList.remove('active'));
        if (link) link.classList.add('active');
    }

    function updateActiveTab() {
        const SCHWELLE = window.innerHeight * 0.5; // ← statt NAVBAR_HEIGHT + 10

        // Am Ende der Seite → letzten Tab aktivieren
        const amEnde = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
        if (amEnde) {
            setActive(abschnitte[abschnitte.length - 1]?.link);
            return;
        }

        // Im Hero-Bereich → kein Tab aktiv
        const tabs = document.getElementById('tabs');
        if (tabs.getBoundingClientRect().top > 0) {
            setActive(null);
            return;
        }

        // Von unten nach oben: erster Abschnitt dessen Oberkante die Schwelle passiert hat
        let aktuellerLink = null;
        for (let i = abschnitte.length - 1; i >= 0; i--) {
            const {link, el} = abschnitte[i];
            if (el.getBoundingClientRect().top <= SCHWELLE) {
                aktuellerLink = link;
                break;
            }
        }
        setActive(aktuellerLink);
    }

    window.addEventListener('scroll', updateActiveTab, {passive: true});
    updateActiveTab();
});

// emailjs
(function () {
    emailjs.init("RAb5Ve4YwHU0kesQO");
})();

const contactForm = document.getElementById('contact-form');
const statusText = document.getElementById('form-status');
const submitBtn = document.getElementById('submit-btn');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerText = "Wird gesendet...";

    emailjs.sendForm('service_7ms6voc', 'template_gid7bum', this)
        .then(function () {
            statusText.style.display = "block";
            statusText.style.color = "green";
            statusText.innerText = "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.";

            contactForm.reset(); // Formular zurücksetzen
            submitBtn.disabled = false;
            submitBtn.innerText = "Senden";
        }, function (error) {
            statusText.style.display = "block";
            statusText.style.color = "red";
            statusText.innerText = "Upps, da ist etwas schiefgelaufen. Bitte versuchen Sie es später erneut.";

            console.error('EmailJS Error:', error);
            submitBtn.disabled = false;
            submitBtn.innerText = "Senden";
        });
});