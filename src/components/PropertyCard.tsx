import { LuxuryButton } from "./ui/luxury-button"
import { MapPin, DollarSign } from "lucide-react"

interface PropertyCardProps {
  image: string
  title: string
  location: string
  price: string
  className?: string
  onViewDetails?: () => void
}

export const PropertyCard = ({ image, title, location, price, className, onViewDetails }: PropertyCardProps) => {
  return (
    <div className={`property-card ${className}`}>
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-primary font-luxury">
          {title}
        </h3>

        <div className="flex items-center text-muted-foreground">
          <MapPin className="w-4 h-4 mr-2" />
          <span>{location}</span>
        </div>

        <div className="flex items-center text-primary text-xl font-bold">
          <DollarSign className="w-5 h-5" />
          <span>{price}</span>
        </div>

        <LuxuryButton
          variant="outline"
          className="w-full"
          onClick={onViewDetails}
        >
          View Details
        </LuxuryButton>
      </div>
    </div>
  )
}