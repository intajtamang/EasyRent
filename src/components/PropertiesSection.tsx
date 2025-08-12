import { useState, useMemo } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Property, mockProperties, propertyTypes, cities, allAmenities } from '@/data/properties';
import PropertyCard from './PropertyCard';
import FilterPanel from './FilterPanel';

export interface SearchFilters {
  location: string;
  propertyType: string;
  rooms: string;
  maxPrice: string;
}

export interface DetailedFilters {
  cities: string[];
  propertyTypes: string[];
  minRooms: number;
  maxRooms: number;
  minPrice: number;
  maxPrice: number;
  amenities: string[];
}

interface PropertiesSectionProps {
  searchFilters: SearchFilters;
  onContactProperty: (property: Property) => void;
}

const PropertiesSection = ({ searchFilters, onContactProperty }: PropertiesSectionProps) => {
  const [showFilters, setShowFilters] = useState(false);
  const [detailedFilters, setDetailedFilters] = useState<DetailedFilters>({
    cities: [],
    propertyTypes: [],
    minRooms: 1,
    maxRooms: 6,
    minPrice: 0,
    maxPrice: 10000,
    amenities: []
  });

  const filteredProperties = useMemo(() => {
    return mockProperties.filter(property => {
      // Basic search filters
      if (searchFilters.location && !property.city.toLowerCase().includes(searchFilters.location.toLowerCase()) && !property.address.toLowerCase().includes(searchFilters.location.toLowerCase())) {
        return false;
      }
      
      if (searchFilters.propertyType && searchFilters.propertyType !== 'all' && property.type !== searchFilters.propertyType) {
        return false;
      }
      
      if (searchFilters.rooms && searchFilters.rooms !== 'all' && property.rooms < parseInt(searchFilters.rooms)) {
        return false;
      }
      
      if (searchFilters.maxPrice && searchFilters.maxPrice !== 'all' && property.price > parseInt(searchFilters.maxPrice)) {
        return false;
      }

      // Detailed filters
      if (detailedFilters.cities.length > 0 && !detailedFilters.cities.includes(property.city)) {
        return false;
      }
      
      if (detailedFilters.propertyTypes.length > 0 && !detailedFilters.propertyTypes.includes(property.type)) {
        return false;
      }
      
      if (property.rooms < detailedFilters.minRooms || property.rooms > detailedFilters.maxRooms) {
        return false;
      }
      
      if (property.price < detailedFilters.minPrice || property.price > detailedFilters.maxPrice) {
        return false;
      }
      
      if (detailedFilters.amenities.length > 0) {
        const hasRequiredAmenities = detailedFilters.amenities.every(amenity => 
          property.amenities.includes(amenity)
        );
        if (!hasRequiredAmenities) {
          return false;
        }
      }

      return property.available;
    });
  }, [searchFilters, detailedFilters]);

  const activeFiltersCount = useMemo(() => {
    let count = 0;
    if (detailedFilters.cities.length > 0) count++;
    if (detailedFilters.propertyTypes.length > 0) count++;
    if (detailedFilters.minRooms > 1 || detailedFilters.maxRooms < 6) count++;
    if (detailedFilters.minPrice > 0 || detailedFilters.maxPrice < 10000) count++;
    if (detailedFilters.amenities.length > 0) count++;
    return count;
  }, [detailedFilters]);

  const clearAllFilters = () => {
    setDetailedFilters({
      cities: [],
      propertyTypes: [],
      minRooms: 1,
      maxRooms: 6,
      minPrice: 0,
      maxPrice: 10000,
      amenities: []
    });
  };

  return (
    <section id="properties" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <div className="lg:w-80">
            <div className="sticky top-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Filters</h3>
                <div className="flex items-center gap-2">
                  {activeFiltersCount > 0 && (
                    <Badge variant="secondary">{activeFiltersCount}</Badge>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {showFilters ? 'Hide' : 'Show'} Filters
                  </Button>
                </div>
              </div>
              
              <div className={`${showFilters ? 'block' : 'hidden lg:block'}`}>
                <FilterPanel
                  filters={detailedFilters}
                  onFiltersChange={setDetailedFilters}
                  onClearAll={clearAllFilters}
                />
              </div>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">Available Properties</h2>
                <p className="text-muted-foreground">
                  {filteredProperties.length} propert{filteredProperties.length === 1 ? 'y' : 'ies'} found
                </p>
              </div>
              
              {activeFiltersCount > 0 && (
                <Button variant="outline" onClick={clearAllFilters}>
                  Clear All Filters
                </Button>
              )}
            </div>

            {filteredProperties.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🏠</div>
                <h3 className="text-xl font-semibold mb-2">No properties found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search filters to find more properties.
                </p>
                <Button onClick={clearAllFilters}>Clear All Filters</Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProperties.map((property, index) => (
                  <div
                    key={property.id}
                    className={`animate-fade-in-up animate-delay-${Math.min(index * 100, 300)}`}
                  >
                    <PropertyCard 
                      property={property}
                      onContact={onContactProperty}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;