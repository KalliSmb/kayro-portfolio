import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["#00ffa4", "#a668ff"]; // paleta de cores

export let singlePage = false;

export const info = {
    firstName: "Kayro",
    lastName: "Barbosa",
    initials: "KB",
    position: "Software Developer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '💻',
            text: 'Software Developer'
        },
        {
            emoji: "🎓",
            text: "Web Development and Multimedia"
        },
        {
            emoji: "📧",
            text: "kayromatheus584@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://instagram.com/kayrosmb",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/kallismb",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/kayro-barbosa",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.behance.net/kayrobarbosa",
            icon: "fa fa-behance",
            label: 'behance'
        }

    ],
    bio: "Hello! I'm Kayro. I'm a future software developer. I'm studying Web Development and Multimedia at IPCA, currently searching for an internship.",
    skills:
        {
            proficientWith: ['c#', 'javascript', 'flutter', 'git', 'github', 'html5', 'css3', 'unity'],
            exposedTo: ['nodejs', 'typescript', 'docker', 'angular'],
            softSkills: ['teamwork', 'time-management', 'adaptability', 'resilience', 'problem-solving', 'proactivity']
        }
    ,
    hobbies: [
        {
            label: 'gaming',
            emoji: '🎮'
        },
        {
            label: 'football',
            emoji: '⚽'
        },
        {
            label: 'cooking',
            emoji: '🔪'
        },
        {
            label: 'music',
            emoji: '🎵'
        }
    ],
    portfolio: [
        {
            title: "Personal Portfolio",
            live: "https://github.com/kallismb/portfolio",
            source: "https://github.com/kallismb/portfolio",
            image: mock1
        },
        {
            title: "Gastronomia & Clima",
            live: "#",
            source: "https://github.com/kallismb/gastronomia-clima",
            image: mock2
        },
        {
            title: "XP Academy",
            live: "https://www.figma.com/proto/5t9cGfrQ1gS12IuvfZzBZ7/XP-Academy?node-id=465-164&t=ki7P0sVj47PYZTYO-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=465%3A164",
            source: "https://github.com/kallismb/",
            image: mock3
        },
        {
            title: "Gestão Livraria",
            live: "#",
            source: "https://github.com/kallismb/gestao-livraria",
            image: mock4
        },
        {
            title: "Stock App",
            live: "#",
            source: "https://github.com/kallismb/stock-app",
            image: mock5
        }
    ]
}