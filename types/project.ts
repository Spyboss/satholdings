export interface Project {
    id: string;
    title: string;
    client: string;
    location: string;
    year: number;
    description: string;
    value?: string;
    category: string;
    image?: string;
}
