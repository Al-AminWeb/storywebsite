import { Card } from "@/components/ui/card"
import { genres } from "@/app/data/genres"
import {
    BookOpen,
    ChevronRight
} from "lucide-react"

export default function GenreGrid() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Browse by Genre
                    </h2>

                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Discover stories across {genres.length} unique categories.
                        Find your next favorite read.
                    </p>
                </div>

                {/* Genre Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
                    {genres.map((genre) => (
                        <Card
                            key={genre}
                            className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 cursor-pointer hover:shadow-lg"
                        >
                            <div className="relative p-6 flex flex-col items-center text-center">
                                {/* Icon */}
                                <div className="mb-4 p-3 rounded-full bg-accent group-hover:bg-primary/10 transition-colors duration-300">
                                    <BookOpen className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
                                </div>

                                {/* Genre Name */}
                                <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                    {genre}
                                </h3>

                                {/* View Indicator */}
                                <div className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-primary transition-colors">
                                    View
                                    <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                                </div>
                            </div>

                            {/* Bottom accent line on hover */}
                            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </Card>
                    ))}
                </div>

                {/* Simple Call to Action */}
                <div className="text-center">
                    <p className="text-muted-foreground mb-4">
                        Explore all stories and find your perfect match
                    </p>

                    <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/80 transition-colors cursor-pointer">
                        <BookOpen className="h-5 w-5" />
                        View All Categories
                    </div>
                </div>
            </div>
        </section>
    )
}