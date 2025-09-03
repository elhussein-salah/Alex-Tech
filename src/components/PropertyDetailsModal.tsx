import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { LuxuryButton } from "@/components/ui/luxury-button"
import { MapPin, DollarSign, Bed, Bath, Square, Calendar } from "lucide-react"

interface Property {
    id: number
    image: string
    title: string
    location: string
    price: string
    description?: string
    bedrooms?: number
    bathrooms?: number
    area?: string
    yearBuilt?: number
    features?: string[]
}

interface PropertyDetailsModalProps {
    property: Property | null
    isOpen: boolean
    onClose: () => void
}

export function PropertyDetailsModal({ property, isOpen, onClose }: PropertyDetailsModalProps) {
    if (!property) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-luxury text-primary">
                        {property.title}
                    </DialogTitle>
                </DialogHeader>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Property Image */}
                    <div className="aspect-[4/3] overflow-hidden rounded-lg">
                        <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Property Details */}
                    <div className="space-y-6">
                        {/* Location & Price */}
                        <div className="space-y-3">
                            <div className="flex items-center text-muted-foreground">
                                <MapPin className="w-5 h-5 mr-2" />
                                <span className="text-lg">{property.location}</span>
                            </div>

                            <div className="flex items-center text-primary text-3xl font-bold">
                                <DollarSign className="w-6 h-6" />
                                <span>{property.price}</span>
                            </div>
                        </div>

                        {/* Property Specs */}
                        <div className="grid grid-cols-2 gap-4">
                            {property.bedrooms && (
                                <div className="flex items-center space-x-2">
                                    <Bed className="w-5 h-5 text-primary" />
                                    <span className="text-foreground">{property.bedrooms} Bedrooms</span>
                                </div>
                            )}

                            {property.bathrooms && (
                                <div className="flex items-center space-x-2">
                                    <Bath className="w-5 h-5 text-primary" />
                                    <span className="text-foreground">{property.bathrooms} Bathrooms</span>
                                </div>
                            )}

                            {property.area && (
                                <div className="flex items-center space-x-2">
                                    <Square className="w-5 h-5 text-primary" />
                                    <span className="text-foreground">{property.area}</span>
                                </div>
                            )}

                            {property.yearBuilt && (
                                <div className="flex items-center space-x-2">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    <span className="text-foreground">Built {property.yearBuilt}</span>
                                </div>
                            )}
                        </div>

                        {/* Description */}
                        {property.description && (
                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-2">Description</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {property.description}
                                </p>
                            </div>
                        )}

                        {/* Features */}
                        {property.features && property.features.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-3">Features</h3>
                                <div className="grid grid-cols-1 gap-2">
                                    {property.features.map((feature, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                                            <span className="text-foreground">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <LuxuryButton variant="hero" className="flex-1">
                                Schedule Viewing
                            </LuxuryButton>
                            <LuxuryButton variant="outline" className="flex-1">
                                Contact Agent
                            </LuxuryButton>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
