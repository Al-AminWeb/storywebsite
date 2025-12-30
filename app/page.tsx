import HeroSection from "./(home)/components/HeroSection"
import FeaturedStories from "./(home)/components/FeaturedStories"
import GenreGrid from "./(home)/components/GenreGrid"

import CTASection from "./(home)/components/CTASection"
import LatestStories from "@/app/(home)/components/LatestStories";

export default function HomePage() {
  return (
      <main className="container mx-auto px-4">
        <HeroSection />
        <FeaturedStories />
        <GenreGrid />
        <LatestStories />
        <CTASection />
      </main>
  )
}
