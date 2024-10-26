import { ESprojects, ENprojects } from "../../utils/projectsdata"

export const languages = {
    es: 'ESP',
    en: 'ENG'
}

export const defaultLang='es'

export const ui = {
    es: {
        lang: 'Idioma',
        "projects": ESprojects,
        "portfolio": 'Portafolio',
        "header.greeting": 'Hola, yo soy',
        "header.role": 'Desarrollador Full Stack',
        "header.desc1": "Toda mi vida fui un gran apasionado de la informatica y todo lo que tuviera que ver con la tecnologia, este camino me ha permitido adentrarme de a poco al mundo de la programacion y es lo que me ha llevado a convertirme en un Desarrollador Web.",
        "header.desc2": "A pesar de ser Desarrollador Full Stack, mi gusto por el diseño digital me hizo inclinarme hacia el lado del Front End, siendo esta mi principal area de trabajo.",
        "techs.title": 'Tecnologias que controlo',
        "projects.title": 'Proyectos',
        "projects.techs": 'Tecnologias Utilizadas',
        "projects.repo": 'Repositorio',
        "projects.deploy": 'Deploy',
    },
    en: {
        lang: 'Language',
        "projects": ENprojects,
        "portfolio": 'Portfolio',
        "header.greeting": 'Hello, I am',
        "header.role": 'Full Stack Developer',
        "header.desc1": "All my life I was passionate about computers and everything that had to do with technology, this path has allowed me to enter little by little to the world of programming and that is what has led me to become a Web Developer.",
        "header.desc2": "Despite being a Full Stack Developer, my taste for digital design made me lean towards the Front End side, being this my main area of work.",
        "techs.title": 'Technologies I control',
        "projects.title": 'Projects',
        "projects.techs": 'Technologies Used',
        "projects.repo": 'Repository',
        "projects.deploy": 'Deploy',
    }
}

export const projects = {
    es: ESprojects,
    en: ENprojects
}