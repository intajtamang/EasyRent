import { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import heroImage from '@/assets/hero-bg.jpg';
import { cities, propertyTypes, roomOptions } from '@/data/properties';

interface SearchFilters {
  location: string;
  propertyType: string;
  rooms: string;
  maxPrice: string;
}

interface HeroSectionProps {
  onSearch: (filters: SearchFilters) => void;
}

const HeroSection = ({ onSearch }: HeroSectionProps) => {
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    propertyType: '',
    rooms: '',
    maxPrice: ''
  });

  const handleSearch = () => {
    onSearch(filters);
    // Smooth scroll to properties section
    document.getElementById('properties')?.scrollIntoView({ behavior: 'smooth' });
  };

  const updateFilter = (key: keyof SearchFilters, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Find Your Perfect
            <span className="block text-blue-200">Rental Home</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Discover amazing rental properties with EasyRent. From cozy studios to luxury villas, find your next home today.
          </p>
          
          {/* Search Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl max-w-5xl mx-auto animate-delay-200 animate-fade-in-up">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-6">
              <div className="lg:col-span-2">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                  <Input
                    placeholder="Enter city or area"
                    value={filters.location}
                    onChange={(e) => updateFilter('location', e.target.value)}
                    className="pl-10 h-12 text-lg border-2 focus:border-primary"
                  />
                </div>
              </div>
              
              <Select value={filters.propertyType} onValueChange={(value) => updateFilter('propertyType', value)}>
                <SelectTrigger className="h-12 text-lg border-2">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {propertyTypes.map(type => (
                    <SelectItem key={type} value={type}>
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={filters.rooms} onValueChange={(value) => updateFilter('rooms', value)}>
                <SelectTrigger className="h-12 text-lg border-2">
                  <SelectValue placeholder="Rooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Rooms</SelectItem>
                  {roomOptions.map(rooms => (
                    <SelectItem key={rooms} value={rooms.toString()}>
                      {rooms}+ Room{rooms > 1 ? 's' : ''}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={filters.maxPrice} onValueChange={(value) => updateFilter('maxPrice', value)}>
                <SelectTrigger className="h-12 text-lg border-2">
                  <SelectValue placeholder="Max Price" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Any Price</SelectItem>
                  <SelectItem value="2000">Under $2,000</SelectItem>
                  <SelectItem value="3000">Under $3,000</SelectItem>
                  <SelectItem value="4000">Under $4,000</SelectItem>
                  <SelectItem value="5000">Under $5,000</SelectItem>
                  <SelectItem value="6000">Under $6,000</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              onClick={handleSearch}
              size="lg"
              className="w-full md:w-auto px-12 h-12 text-lg font-semibold hover:scale-105 transition-transform"
            >
              <Search className="mr-2 h-5 w-5" />
              Search Properties
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;