export interface Property {
  id: string;
  title: string;
  type: 'apartment' | 'house' | 'studio' | 'townhouse' | 'penthouse' | 'villa';
  rooms: number;
  bathrooms: number;
  area: number; // in sqft
  address: string;
  city: string;
  price: number;
  imageUrl: string;
  amenities: string[];
  rating: number;
  reviews: number;
  available: boolean;
}

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Downtown Apartment',
    type: 'apartment',
    rooms: 2,
    bathrooms: 2,
    area: 950,
    address: '123 Downtown Ave',
    city: 'New York',
    price: 2800,
    imageUrl: '/src/assets/apartment-1.jpg',
    amenities: ['WiFi', 'Air Conditioning', 'Gym', 'Parking', 'Pet Friendly'],
    rating: 4.8,
    reviews: 124,
    available: true
  },
  {
    id: '2',
    title: 'Cozy Suburban House',
    type: 'house',
    rooms: 3,
    bathrooms: 2,
    area: 1200,
    address: '456 Maple Street',
    city: 'Austin',
    price: 2200,
    imageUrl: '/src/assets/house-1.jpg',
    amenities: ['WiFi', 'Garden', 'Parking', 'Pet Friendly', 'Fireplace'],
    rating: 4.6,
    reviews: 89,
    available: true
  },
  {
    id: '3',
    title: 'Bright Studio Loft',
    type: 'studio',
    rooms: 1,
    bathrooms: 1,
    area: 600,
    address: '789 Art District',
    city: 'Los Angeles',
    price: 1800,
    imageUrl: '/src/assets/studio-1.jpg',
    amenities: ['WiFi', 'Air Conditioning', 'High Ceilings', 'Natural Light'],
    rating: 4.4,
    reviews: 67,
    available: true
  },
  {
    id: '4',
    title: 'Elegant Brick Townhouse',
    type: 'townhouse',
    rooms: 4,
    bathrooms: 3,
    area: 1800,
    address: '321 Heritage Lane',
    city: 'Boston',
    price: 3500,
    imageUrl: '/src/assets/townhouse-1.jpg',
    amenities: ['WiFi', 'Historic Charm', 'Parking', 'Garden', 'Storage'],
    rating: 4.9,
    reviews: 156,
    available: true
  },
  {
    id: '5',
    title: 'Luxury City Penthouse',
    type: 'penthouse',
    rooms: 3,
    bathrooms: 3,
    area: 2200,
    address: '567 Skyline Drive',
    city: 'Miami',
    price: 4800,
    imageUrl: '/src/assets/penthouse-1.jpg',
    amenities: ['WiFi', 'City Views', 'Balcony', 'Concierge', 'Pool', 'Gym'],
    rating: 4.9,
    reviews: 203,
    available: true
  },
  {
    id: '6',
    title: 'Modern Villa with Pool',
    type: 'villa',
    rooms: 5,
    bathrooms: 4,
    area: 3500,
    address: '890 Paradise Way',
    city: 'San Diego',
    price: 6200,
    imageUrl: '/src/assets/villa-1.jpg',
    amenities: ['WiFi', 'Pool', 'Garden', 'Parking', 'Ocean View', 'BBQ Area'],
    rating: 4.7,
    reviews: 78,
    available: true
  }
];

export const propertyTypes = ['apartment', 'house', 'studio', 'townhouse', 'penthouse', 'villa'] as const;
export const roomOptions = [1, 2, 3, 4, 5, 6] as const;
export const cities = ['New York', 'Austin', 'Los Angeles', 'Boston', 'Miami', 'San Diego'] as const;
export const allAmenities = [
  'WiFi', 'Air Conditioning', 'Gym', 'Parking', 'Pet Friendly', 
  'Garden', 'Fireplace', 'High Ceilings', 'Natural Light', 'Historic Charm', 
  'Storage', 'City Views', 'Balcony', 'Concierge', 'Pool', 'Ocean View', 'BBQ Area'
] as const;