export enum enumType {
    search = "search",
    popular = "popular",
}

export interface bookType {
    id: number,
    title: string,
    authors: string,
    image_link: string,
    link: string,
 }