import { Star, MapPin, Bed, Bath, Square, Wifi, Car } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
  onContact: (property: Property) => void;
}

const PropertyCard = ({ property, onContact }: PropertyCardProps) => {
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case 'wifi':
        return <Wifi className="h-3 w-3" />;
      case 'parking':
        return <Car className="h-3 w-3" />;
      default:
        return null;
    }
  };

  return (
    <Card className="property-card overflow-hidden group">
      <div className="relative overflow-hidden">
        <img 
          src={property.imageUrl} 
          alt={property.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-white/90 text-primary font-semibold">
            {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
          </Badge>
        </div>
        <div className="absolute top-4 right-4">
          <Badge 
            variant="default" 
            className={`${property.available ? 'bg-green-500' : 'bg-red-500'} text-white`}
          >
            {property.available ? 'Available' : 'Rented'}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {property.title}
          </h3>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{property.rating}</span>
            <span className="text-xs text-muted-foreground">({property.reviews})</span>
          </div>
        </div>
        
        <div className="flex items-center text-muted-foreground mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{property.address}, {property.city}</span>
        </div>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.rooms} bed{property.rooms > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.bathrooms} bath{property.bathrooms > 1 ? 's' : ''}</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span>{property.area} sqft</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {property.amenities.slice(0, 4).map((amenity, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {getAmenityIcon(amenity)}
              <span className={getAmenityIcon(amenity) ? 'ml-1' : ''}>{amenity}</span>
            </Badge>
          ))}
          {property.amenities.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{property.amenities.length - 4} more
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <span className="text-3xl font-bold price-text">${property.price.toLocaleString()}</span>
            <span className="text-muted-foreground ml-1">/month</span>
          </div>
          <Button 
            onClick={() => onContact(property)}
            className="hover:scale-105 transition-transform"
          >
            Contact
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;