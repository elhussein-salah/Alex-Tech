import { LuxuryButton } from "@/components/ui/luxury-button"
import heroTextImage from "@/assets/hero.png"
import heroVideo from "@/assets/hero.mp4"

interface HeroProps {
    onScrollToSection: (id: string) => void
}

export function Hero({ onScrollToSection }: HeroProps) {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-background/70" />

            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                <div className="mb-6 fade-in-up">
                    <img
                        src={heroTextImage}
                        alt="Discover Your Dream Home with Alex Tech"
                        className="mx-auto max-w-full h-auto object-contain"
                    />
                </div>
                <p className="text-xl md:text-2xl text-foreground mb-8 fade-in-up">
                    {/* Premium real estate solutions with flexible payment plans */}
                </p>
                {/* <LuxuryButton
                    variant="hero"
                    onClick={() => onScrollToSection('projects')}
                    className="fade-in-up"
                >
                    Explore Properties
                </LuxuryButton> */}
            </div>
        </section>
    )
}
