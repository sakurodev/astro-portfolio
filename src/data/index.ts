import type { NavLink, Project } from "@/types";

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
        url: "https://www.linkedin.com/in/sagar-pratap/",
    }
]

export const ProjectData : Project [] = [
    {
        name: "SQLito",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "sqlito.png",
        live_url: "https://sqlito.herokuapp.com/",
        repo_url: "https://github.com/ednavarrol/sqlito",
    },
    {
        name: "KarmApp",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "karma.png",
        live_url: "https://karma.herokuapp.com/",
        repo_url: "https://github.com/ednavarrol/karma",
    }
]