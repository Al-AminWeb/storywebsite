import { Card } from "@/components/ui/card"
import {genres} from "@/app/data/genres";

export default function GenreGrid() {
    return (
        <section className="py-16">
            <h2 className="text-2xl font-semibold mb-6">
                Browse by Genre
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {genres.map((genre) => (
                    <Card
                        key={genre}
                        className="p-6 text-center hover:shadow-md transition cursor-pointer"
                    >
                        {genre}
                    </Card>
                ))}
            </div>
        </section>
    )
}
