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
            link: "https://x.com",
            icon: "fa fa-twitter",
            label: 'twitter'
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
            live: "https://kayrobarbosa.netlify.app",
            source: "https://github.com/kallismb/kayro-portfolio",
            image: mock1,
            description: "This is my personal portfolio, showcasing the some of the projects I have worked on. (University Project - Web Design Introduction)"
        },
        {
            title: "Gastronomia & Clima",
            live: "#",
            source: "https://github.com/kallismb/gastronomia-clima",
            image: mock2,
            description: "A web app using NodeJS and Supabase database that connects gastronomy and weather APIs to suggest restaurants based on the weather. (University Project - Distributed Computing)"
        },
        {
            title: "Stock App",
            live: "#",
            source: "https://github.com/kallismb/stock-app",
            image: mock3,
            description: "A React app for tracking stock prices with real-time data integration. (University Project - Web Development II)"
        },
        {
            title: "Gestão Livraria",
            live: "#",
            source: "https://github.com/kallismb/gestao-livraria",
            image: mock4,
            description: "A C# .NET Console App for managing a library system. (University Project - Programming Languages I)"
        },
        {
            title: "XP Academy",
            live: "#",
            source: "https://www.behance.net/gallery/218138889/XP-Academy-Projeto",
            image: mock5,
            description: "An e-learning gamified platform to develop skills and growth in various subjects. (University Project - Web Design Introduction)"
        }
    ]
}