import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"]; // paleta de cores

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
            link: "https://twitter.com",
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
            live: "https://github.com/kallismb/portfolio",
            source: "https://github.com/kallismb/portfolio",
            image: mock1
        },
        {
            title: "Project 2",
            live: "#",
            source: "https://github.com/kallismb/",
            image: mock2
        },
        {
            title: "Project 3",
            live: "#",
            source: "https://github.com/kallismb/",
            image: mock3
        },
        {
            title: "Project 4",
            live: "#",
            source: "https://github.com/kallismb/",
            image: mock4
        },
        {
            title: "Project 5",
            live: "#",
            source: "https://github.com/kallismb/",
            image: mock5
        }
    ]
}