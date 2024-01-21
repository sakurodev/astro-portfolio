import type { NavLink, Project, Author } from "@/types";

export const AuthorData : Author = {
    name: "Eduardo Navarro",
    mail: "ed.navarrol@gmail.com",
    location: "Santiago, Chile"
}

export const NavLinkData : NavLink [] = [
    {
        label: "CV",
        url: "#",
    },
    {
        label: "Github",
        url: "https://github.com/ednavarrol",
    },
    {
        label: "LinkedIn",
        url: "#",
    }
]

export const ProjectData : Project [] = [
    {
        name: "Twitch Clone",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "sqlito.png",
        live_url: "#",
        repo_url: "#",
        tags: ["JavaScript", "React"],
    },
    {
        name: "KarmaApp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "karma.png",
        live_url: "#",
        repo_url: "#",
        tags: ["PHP", "Tailwind", "React"],
    },
    {
        name: "Astro",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        image: "karma.png",
        live_url: "#",
        repo_url: "#",
        tags: ["JavaScript", "GSAP"],
    }
]