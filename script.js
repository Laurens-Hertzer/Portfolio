const button = document.getElementById('theme-toggle');
button.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Skills
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
            "https://img.shields.io/badge/Jetbrain_IDE-007ec6?style=for-the-badge"
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

// Aktiver Tab beim Scrollen
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
        const SCHWELLE = window.innerHeight * 0.5;

        const amEnde = window.innerHeight + window.scrollY >= document.body.scrollHeight - 10;
        if (amEnde) {
            setActive(abschnitte[abschnitte.length - 1]?.link);
            return;
        }

        const tabs = document.getElementById('tabs');
        if (tabs.getBoundingClientRect().top > 0) {
            setActive(null);
            return;
        }

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

// EmailJS
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

            contactForm.reset();
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