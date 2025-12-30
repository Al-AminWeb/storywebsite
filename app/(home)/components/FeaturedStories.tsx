import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function FeaturedStories() {
    return (
        <section className="py-16">
            <h2 className="text-2xl font-semibold mb-6">
                Featured Stories
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                    <Card key={i}>
                        <CardContent className="p-5 space-y-2">
                            <Badge>Fantasy</Badge>
                            <h3 className="font-semibold text-lg">
                                The Last Moon
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                by A. Rahman
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
