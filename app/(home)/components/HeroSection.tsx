import { Button } from "@/components/ui/button"
import { Sparkles, BookOpen, PenTool } from "lucide-react"

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden">
            {/* Background with gradient and pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

                {/* Subtle grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:24px_24px]" />

                {/* Animated floating elements */}
                <div className="absolute top-20 left-10 opacity-20 animate-float">
                    <BookOpen className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute top-40 right-20 opacity-20 animate-float animation-delay-1000">
                    <PenTool className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute bottom-40 left-1/4 opacity-20 animate-float animation-delay-2000">
                    <Sparkles className="h-10 w-10 text-primary" />
                </div>
            </div>

            {/* Content */}
            <div className="relative container mx-auto px-4 py-32 text-center">
                {/* Animated badge */}
                <div className="inline-flex items-center gap-2 mb-6 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 px-4 py-2 text-sm text-primary backdrop-blur-sm border border-primary/20 animate-fade-in">
                    <Sparkles className="h-3 w-3" />
                    <span className="font-medium">
                        A home for storytellers
                    </span>
                </div>

                {/* Main heading with gradient */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                    <span className="block bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">
                        Discover Stories
                    </span>
                    <span className="block mt-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        That Stay With You
                    </span>
                </h1>

                {/* Subtitle with better typography */}
                <p className="mx-auto max-w-2xl text-xl text-muted-foreground mb-12 leading-relaxed">
                    Read and write original stories across romance, fantasy,
                    thriller, and more — all in one beautiful reading experience.
                </p>

                {/* CTA buttons with enhancements */}
                <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
                    <Button
                        size="lg"
                        className="group px-8 rounded-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <span className="flex items-center gap-2">
                            <BookOpen className="h-5 w-5" />
                            Start Reading
                        </span>
                    </Button>

                    <Button
                        size="lg"
                        variant="outline"
                        className="group px-8 rounded-full border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <span className="flex items-center gap-2">
                            <PenTool className="h-5 w-5" />
                            Write a Story
                        </span>
                    </Button>
                </div>

                {/* Stats or features */}
                <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary">10K+</div>
                        <div className="text-sm">Stories Published</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary">50+</div>
                        <div className="text-sm">Categories</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl font-bold text-primary">100K+</div>
                        <div className="text-sm">Active Readers</div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="h-8 w-px bg-primary/30"></div>
                </div>
            </div>
        </section>
    )
}