import { useState } from 'react';
import { Check, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { cities, propertyTypes, allAmenities } from '@/data/properties';
import { DetailedFilters } from './PropertiesSection';

interface FilterPanelProps {
  filters: DetailedFilters;
  onFiltersChange: (filters: DetailedFilters) => void;
  onClearAll: () => void;
}

const FilterPanel = ({ filters, onFiltersChange, onClearAll }: FilterPanelProps) => {
  const [openSections, setOpenSections] = useState({
    cities: true,
    propertyTypes: true,
    rooms: true,
    price: true,
    amenities: false
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const updateFilter = <K extends keyof DetailedFilters>(
    key: K,
    value: DetailedFilters[K]
  ) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const toggleArrayFilter = (array: string[], value: string) => {
    return array.includes(value)
      ? array.filter(item => item !== value)
      : [...array, value];
  };

  const FilterSection = ({ 
    title, 
    isOpen, 
    onToggle, 
    children 
  }: { 
    title: string; 
    isOpen: boolean; 
    onToggle: () => void; 
    children: React.ReactNode;
  }) => (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <CollapsibleTrigger asChild>
        <Button
          variant="ghost"
          className="w-full justify-between p-0 h-auto font-semibold text-left"
          onClick={onToggle}
        >
          <span>{title}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </Button>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-4 space-y-3">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );

  return (
    <div className="space-y-6 bg-card p-6 rounded-lg border">
      {/* Cities Filter */}
      <FilterSection
        title="Cities"
        isOpen={openSections.cities}
        onToggle={() => toggleSection('cities')}
      >
        <div className="space-y-3">
          {cities.map(city => (
            <div key={city} className="flex items-center space-x-2">
              <Checkbox
                id={`city-${city}`}
                checked={filters.cities.includes(city)}
                onCheckedChange={() => 
                  updateFilter('cities', toggleArrayFilter(filters.cities, city))
                }
              />
              <Label htmlFor={`city-${city}`} className="text-sm font-normal">
                {city}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Property Types Filter */}
      <FilterSection
        title="Property Types"
        isOpen={openSections.propertyTypes}
        onToggle={() => toggleSection('propertyTypes')}
      >
        <div className="space-y-3">
          {propertyTypes.map(type => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={`type-${type}`}
                checked={filters.propertyTypes.includes(type)}
                onCheckedChange={() => 
                  updateFilter('propertyTypes', toggleArrayFilter(filters.propertyTypes, type))
                }
              />
              <Label htmlFor={`type-${type}`} className="text-sm font-normal">
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Rooms Filter */}
      <FilterSection
        title="Number of Rooms"
        isOpen={openSections.rooms}
        onToggle={() => toggleSection('rooms')}
      >
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium">
              Min Rooms: {filters.minRooms}
            </Label>
            <Slider
              value={[filters.minRooms]}
              onValueChange={([value]) => updateFilter('minRooms', value)}
              max={6}
              min={1}
              step={1}
              className="mt-2"
            />
          </div>
          <div>
            <Label className="text-sm font-medium">
              Max Rooms: {filters.maxRooms}
            </Label>
            <Slider
              value={[filters.maxRooms]}
              onValueChange={([value]) => updateFilter('maxRooms', value)}
              max={6}
              min={1}
              step={1}
              className="mt-2"
            />
          </div>
        </div>
      </FilterSection>

      {/* Price Filter */}
      <FilterSection
        title="Price Range"
        isOpen={openSections.price}
        onToggle={() => toggleSection('price')}
      >
        <div className="space-y-4">
          <div>
            <Label className="text-sm font-medium">
              Min Price: ₹{filters.minPrice.toLocaleString()}
            </Label>
            <Slider
              value={[filters.minPrice]}
              onValueChange={([value]) => updateFilter('minPrice', value)}
              max={150000}
              min={0}
              step={1000}
              className="mt-2"
            />
          </div>
          <div>
            <Label className="text-sm font-medium">
              Max Price: ₹{filters.maxPrice.toLocaleString()}
            </Label>
            <Slider
              value={[filters.maxPrice]}
              onValueChange={([value]) => updateFilter('maxPrice', value)}
              max={150000}
              min={0}
              step={1000}
              className="mt-2"
            />
          </div>
        </div>
      </FilterSection>

      {/* Amenities Filter */}
      <FilterSection
        title="Amenities"
        isOpen={openSections.amenities}
        onToggle={() => toggleSection('amenities')}
      >
        <div className="space-y-3 max-h-48 overflow-y-auto">
          {allAmenities.map(amenity => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={`amenity-${amenity}`}
                checked={filters.amenities.includes(amenity)}
                onCheckedChange={() => 
                  updateFilter('amenities', toggleArrayFilter(filters.amenities, amenity))
                }
              />
              <Label htmlFor={`amenity-${amenity}`} className="text-sm font-normal">
                {amenity}
              </Label>
            </div>
          ))}
        </div>
      </FilterSection>

      {/* Clear All Button */}
      <Button variant="outline" onClick={onClearAll} className="w-full">
        Clear All Filters
      </Button>
    </div>
  );
};

export default FilterPanel;