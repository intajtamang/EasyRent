import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import PropertiesSection, { SearchFilters } from '@/components/PropertiesSection';
import ContactSection, { FloatingContactButton } from '@/components/ContactSection';
import ContactModal from '@/components/ContactModal';
import { Property } from '@/data/properties';

const Index = () => {
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    location: '',
    propertyType: '',
    rooms: '',
    maxPrice: ''
  });
  
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleSearch = (filters: SearchFilters) => {
    setSearchFilters(filters);
  };

  const handleContactProperty = (property: Property) => {
    setSelectedProperty(property);
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <div className="min-h-screen">
      <HeroSection onSearch={handleSearch} />
      
      <PropertiesSection 
        searchFilters={searchFilters}
        onContactProperty={handleContactProperty}
      />
      
      <ContactSection />
      
      <ContactModal
        property={selectedProperty}
        isOpen={isContactModalOpen}
        onClose={handleCloseContactModal}
      />

      {/* Floating Contact Buttons */}
      <FloatingContactButton />
    </div>
  );
};

export default Index;
