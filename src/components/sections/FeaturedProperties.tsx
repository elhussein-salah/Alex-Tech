import { useState } from "react"
import { PropertyCard } from "@/components/PropertyCard"
import { PropertyDetailsModal } from "@/components/PropertyDetailsModal"
import property1 from "@/assets/p1.jpg"
import property2 from "@/assets/p2.webp"
import property3 from "@/assets/p3.webp"

interface Property {
    id: number
    image: string
    title: string
    location: string
    price: string
    description: string
    bedrooms: number
    bathrooms: number
    area: string
    yearBuilt: number
    features: string[]
}

export function FeaturedProperties() {
    const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const properties: Property[] = [
        {
            id: 1,
            image: property1,
            title: "Modern Penthouse",
            location: "Mountain View",
            price: "20,500,000",
            description: "Experience luxury living at its finest in this stunning modern penthouse. Floor-to-ceiling windows offer breathtaking views of the Manhattan skyline, while the open-concept design creates an atmosphere of sophisticated elegance. This exceptional residence features premium finishes throughout, including hardwood floors, designer lighting, and a gourmet kitchen with top-of-the-line appliances.",
            bedrooms: 3,
            bathrooms: 2,
            area: "2,500 sq ft",
            yearBuilt: 2020,
            features: [
                "Floor-to-ceiling windows",
                "Private rooftop terrace",
                "Gourmet kitchen with premium appliances",
                "Master suite with walk-in closet",
                "Smart home automation",
                "Concierge service",
                "Fitness center access",
                "Underground parking"
            ]
        },
        {
            id: 2,
            image: property2,
            title: "Luxury Villa",
            location: "Mountain View",
            price: "16,000,000",
            description: "Nestled in the heart of Mountain View, this magnificent luxury villa epitomizes California elegance. Set on a sprawling lot with meticulously landscaped gardens, the property offers complete privacy while maintaining easy access to world-class shopping and dining. The villa features an open floor plan with soaring ceilings, premium materials, and seamless indoor-outdoor living spaces.",
            bedrooms: 5,
            bathrooms: 4,
            area: "4,800 sq ft",
            yearBuilt: 2018,
            features: [
                "Private swimming pool and spa",
                "Wine cellar with tasting room",
                "Home theater system",
                "Gourmet chef's kitchen",
                "Master suite with private balcony",
                "Guest house",
                "Three-car garage",
                "Landscaped gardens",
                "Security system"
            ]
        },
        {
            id: 3,
            image: property3,
            title: "Contemporary Townhouse",
            location: "Mountain View",
            price: "20,000,000",
            description: "This beautifully designed contemporary townhouse in the historic Mountain View neighborhood combines modern luxury with classic charm. Featuring multiple levels of sophisticated living space, the property offers both privacy and convenience in one of the most desirable locations. High-end finishes and thoughtful design details create an atmosphere of understated elegance.",
            bedrooms: 4,
            bathrooms: 3,
            area: "3,200 sq ft",
            yearBuilt: 2019,
            features: [
                "Multiple outdoor spaces",
                "High-end appliances",
                "Custom built-ins throughout",
                "Hardwood floors",
                "Central air conditioning",
                "Private entrance",
                "Storage room",
                "Laundry room",
                "Close to restaurants and shops"
            ]
        }
    ]

    const handleViewDetails = (property: Property) => {
        setSelectedProperty(property)
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
        setSelectedProperty(null)
    }

    return (
        <section id="projects" className="py-20 bg-background">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-luxury font-bold text-primary mb-4 fade-in-up">
                        Featured Properties
                    </h2>
                    <p className="text-xl text-muted-foreground fade-in-up">
                        Discover our handpicked collection of luxury properties
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            image={property.image}
                            title={property.title}
                            location={property.location}
                            price={property.price}
                            className="fade-in-up"
                            onViewDetails={() => handleViewDetails(property)}
                        />
                    ))}
                </div>
            </div>

            <PropertyDetailsModal
                property={selectedProperty}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
            />
        </section>
    )
}
