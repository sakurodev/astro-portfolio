export type Author = {
    name: string;
    mail: string;
    location: string;
}

export type NavLink = {
    label: string;
    url: string;
}

export type Project = {
    name: string;
    description: string;
    image: string;
    live_url: string;
    repo_url: string;
    tags: string[];
}