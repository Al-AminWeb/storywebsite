import { Button } from "@/components/ui/button"

export default function HeroSection() {
    return (
        <section className="py-24 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Discover Stories That Stay With You
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                Read and write original stories across genres — romance, fantasy,
                thriller, and more.
            </p>
            <div className="flex justify-center gap-4">
                <Button size="lg">Start Reading</Button>
                <Button size="lg" variant="outline">
                    Write a Story
                </Button>
            </div>
        </section>
    )
}
