import { MapPin, CreditCard, Award, Users } from "lucide-react"

export function WhyUs() {
    const features = [
        {
            icon: MapPin,
            title: "Prime Locations",
            description: "Exclusive properties in the most sought-after areas"
        },
        {
            icon: CreditCard,
            title: "Flexible Payment Plans",
            description: "Tailored financing options to suit your needs"
        },
        {
            icon: Award,
            title: "10+ Years Experience",
            description: "Decades of expertise in luxury real estate"
        },
        {
            icon: Users,
            title: "500+ Happy Clients",
            description: "Trusted by hundreds of satisfied homeowners"
        }
    ]

    return (
        <section id="why-us" className="py-20 bg-card">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-luxury font-bold text-primary mb-4 fade-in-up">
                        Why Choose Alex Tech
                    </h2>
                    <p className="text-xl text-muted-foreground fade-in-up">
                        Your trusted partner in luxury real estate
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon
                        return (
                            <div key={index} className="text-center fade-in-up">
                                <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                                    <IconComponent className="w-8 h-8 text-primary-foreground" />
                                </div>
                                <h3 className="text-xl font-semibold text-primary mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {feature.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
