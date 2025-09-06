import { Star } from "lucide-react"

export function Testimonials() {
    const testimonials = [
        {
            name: "Fathy Ahmed",
            initials: "FA",
            rating: 5,
            text: "Alex Tech made our dream home a reality. Their expertise and attention to detail is unmatched."
        },
        {
            name: "EL-Hussein Salah",
            initials: "ES",
            rating: 5,
            text: "Professional service and beautiful properties. We couldn't be happier with our investment."
        },
        {
            name: "Mostafa Ahmed",
            initials: "MA",
            rating: 5,
            text: "The best real estate company we've worked with. Highly recommend Alex Tech!"
        }
    ]

    return (
        <section className="py-20 bg-gradient-gold">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-luxury font-bold text-primary-foreground mb-4 fade-in-up">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-primary-foreground/80 fade-in-up">
                        Real stories from real people
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-background rounded-xl p-6 fade-in-up">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                                    {testimonial.initials}
                                </div>
                                <div>
                                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                                    <div className="flex text-primary">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-muted-foreground">
                                "{testimonial.text}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
