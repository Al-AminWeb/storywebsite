import { Button } from "@/components/ui/button"

export default function CTASection() {
    return (
        <section className="py-24 text-center bg-muted rounded-lg">
            <h2 className="text-3xl font-bold mb-4">
                Have a Story to Tell?
            </h2>
            <p className="text-muted-foreground mb-6">
                Share your words with thousands of readers.
            </p>
            <Button size="lg">Start Writing</Button>
        </section>
    )
}
