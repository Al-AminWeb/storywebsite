
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {stories} from "@/app/data/stories";

export default function LatestStories() {
    return (
        <section className="py-16">
            <h2 className="text-2xl font-semibold mb-6">
                Latest Stories
            </h2>

            <div className="grid gap-4">
                {stories.map((story) => (
                    <Card key={story.id}>
                        <CardContent className="p-4 flex items-center justify-between">
                            <div>
                                <h3 className="font-medium">
                                    {story.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    by {story.author}
                                </p>
                            </div>
                            <Badge variant="outline">
                                {story.genre}
                            </Badge>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
