interface GithubItem {
    name: string,
    value: string,
}

export interface ProjectItem {
    id: number,
    title: string,
    subtitle: string,
    type: string,
    technologies: string[],
    imageShow: string,
    image: string[],
    github: GithubItem[],
    live: string,
    video: string,
    description: string,
    fonctionnality: string[],
    challenges_met: string[],
    role: string[]
}