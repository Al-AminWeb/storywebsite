import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Heart, BookOpen, Eye, TrendingUp, Clock, ChevronRight } from "lucide-react"

const featuredStories = [
    {
        id: 1,
        title: "The Last Moon",
        author: "A. Rahman",
        authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahman",
        genre: "Fantasy",
        excerpt: "In a world where the moon is dying, a young mage must journey to the edge of reality to save the last light...",
        rating: 4.8,
        readers: 12400,
        chapters: 42,
        isCompleted: false,
        progress: 85,
        coverColor: "from-purple-500/20 to-indigo-500/20",
        textColor: "text-purple-600 dark:text-purple-400",
        trending: true
    },
    {
        id: 2,
        title: "Whispers in the Rain",
        author: "Maya Chen",
        authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chen",
        genre: "Romance",
        excerpt: "Two strangers meet under a rainy bookstore awning and discover a love letter from the past that changes everything.",
        rating: 4.9,
        readers: 8920,
        chapters: 24,
        isCompleted: true,
        progress: 100,
        coverColor: "from-pink-500/20 to-rose-500/20",
        textColor: "text-pink-600 dark:text-pink-400",
        trending: true
    },
    {
        id: 3,
        title: "Quantum Thief",
        author: "Dr. Alex Rivera",
        authorAvatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rivera",
        genre: "Sci-Fi",
        excerpt: "A thief who steals memories in a cyberpunk future uncovers a conspiracy that could collapse reality itself.",
        rating: 4.7,
        readers: 15600,
        chapters: 68,
        isCompleted: false,
        progress: 72,
        coverColor: "from-cyan-500/20 to-blue-500/20",
        textColor: "text-cyan-600 dark:text-cyan-400",
        trending: false
    }
]

export default function FeaturedStories() {
    return (
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
            <div className="container mx-auto px-4">
                {/* Header with gradient and action */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                            <TrendingUp className="h-3 w-3" />
                            Trending Now
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Featured <span className="text-primary">Stories</span>
                        </h2>
                        <p className="text-muted-foreground mt-2 max-w-2xl">
                            Discover handpicked stories loved by thousands of readers
                        </p>
                    </div>

                    <Button variant="outline" className="group gap-2">
                        View All Stories
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                </div>

                {/* Story Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {featuredStories.map((story) => (
                        <Card
                            key={story.id}
                            className="group relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
                        >
                            {/* Trending Badge */}
                            {story.trending && (
                                <div className="absolute top-4 right-4 z-10">
                                    <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white border-0 shadow-lg">
                                        <TrendingUp className="h-3 w-3 mr-1" />
                                        Trending
                                    </Badge>
                                </div>
                            )}

                            {/* Decorative gradient header */}
                            <div className={`h-32 ${story.coverColor} relative`}>
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />

                                {/* Progress bar for ongoing stories */}
                                {!story.isCompleted && (
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-border">
                                        <div
                                            className={`h-full ${story.textColor} bg-current transition-all duration-500`}
                                            style={{ width: `${story.progress}%` }}
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <CardHeader className="pb-3">
                                <div className="flex items-center justify-between mb-3">
                                    <Badge
                                        variant="outline"
                                        className={`border-2 ${story.textColor} bg-background/50 backdrop-blur-sm`}
                                    >
                                        {story.genre}
                                    </Badge>

                                    {story.isCompleted ? (
                                        <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800">
                                            Completed
                                        </Badge>
                                    ) : (
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <Clock className="h-3 w-3" />
                                            {story.progress}%
                                        </div>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                                    {story.title}
                                </h3>

                                <p className="text-sm text-muted-foreground line-clamp-2 mt-2">
                                    {story.excerpt}
                                </p>
                            </CardHeader>

                            <CardContent className="pb-4">
                                {/* Author info */}
                                <div className="flex items-center gap-3 mb-4">
                                    <Avatar className="h-10 w-10 border-2 border-background">
                                        <AvatarImage src={story.authorAvatar} />
                                        <AvatarFallback className={story.textColor}>
                                            {story.author.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-medium text-sm">{story.author}</p>
                                        <p className="text-xs text-muted-foreground">Author</p>
                                    </div>
                                </div>

                                {/* Stats */}
                                <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                                            <span className="font-bold">{story.rating}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground">Rating</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            <Eye className="h-4 w-4 text-blue-500" />
                                            <span className="font-bold">
                                                {(story.readers / 1000).toFixed(1)}k
                                            </span>
                                        </div>
                                        <p className="text-xs text-muted-foreground">Readers</p>
                                    </div>

                                    <div className="text-center">
                                        <div className="flex items-center justify-center gap-1 mb-1">
                                            <BookOpen className="h-4 w-4 text-green-500" />
                                            <span className="font-bold">{story.chapters}</span>
                                        </div>
                                        <p className="text-xs text-muted-foreground">Chapters</p>
                                    </div>
                                </div>
                            </CardContent>

                            <CardFooter className="pt-0">
                                <div className="flex gap-3 w-full">
                                    <Button className="flex-1 group/btn">
                                        <BookOpen className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                                        Read Now
                                    </Button>

                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="group/heart"
                                    >
                                        <Heart className="h-4 w-4 group-hover/heart:fill-red-500 group-hover/heart:text-red-500 transition-all" />
                                    </Button>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* View More - Centered button at bottom */}
                <div className="mt-12 text-center">
                    <Button
                        variant="ghost"
                        className="group gap-2 text-muted-foreground hover:text-foreground"
                    >
                        Explore More Stories
                        <ChevronRight className="h-4 w-4 group-hover:translate-x-2 transition-all" />
                    </Button>
                </div>
            </div>
        </section>
    )
}