export interface Story {
    id: number
    title: string
    author: string
    genre: string
}

export const stories: Story[] = [
    {
        id: 1,
        title: "The Last Moon",
        author: "A. Rahman",
        genre: "Fantasy",
    },
    {
        id: 2,
        title: "Echoes of Silence",
        author: "S. Khan",
        genre: "Drama",
    },
    {
        id: 3,
        title: "Crimson Night",
        author: "M. Hasan",
        genre: "Thriller",
    },
]
