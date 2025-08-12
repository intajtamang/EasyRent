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
    title: 'Modern Thamel Apartment',
    type: 'apartment',
    rooms: 2,
    bathrooms: 2,
    area: 950,
    address: 'Thamel Marg',
    city: 'Kathmandu',
    price: 35000,
    imageUrl: '/src/assets/apartment-1.jpg',
    amenities: ['WiFi', 'Air Conditioning', 'Gym', 'Parking', 'Pet Friendly'],
    rating: 4.8,
    reviews: 124,
    available: true
  },
  {
    id: '2',
    title: 'Traditional Newari House',
    type: 'house',
    rooms: 3,
    bathrooms: 2,
    area: 1200,
    address: 'Bhaktapur Durbar Square',
    city: 'Bhaktapur',
    price: 28000,
    imageUrl: '/src/assets/house-1.jpg',
    amenities: ['WiFi', 'Garden', 'Parking', 'Pet Friendly', 'Traditional Architecture'],
    rating: 4.6,
    reviews: 89,
    available: true
  },
  {
    id: '3',
    title: 'Cozy Lakeside Studio',
    type: 'studio',
    rooms: 1,
    bathrooms: 1,
    area: 600,
    address: 'Fewa Lake Road',
    city: 'Pokhara',
    price: 20000,
    imageUrl: '/src/assets/studio-1.jpg',
    amenities: ['WiFi', 'Mountain Views', 'Lake Views', 'Natural Light'],
    rating: 4.4,
    reviews: 67,
    available: true
  },
  {
    id: '4',
    title: 'Heritage Patan Townhouse',
    type: 'townhouse',
    rooms: 4,
    bathrooms: 3,
    area: 1800,
    address: 'Patan Durbar Square',
    city: 'Lalitpur',
    price: 45000,
    imageUrl: '/src/assets/townhouse-1.jpg',
    amenities: ['WiFi', 'Historic Charm', 'Parking', 'Courtyard', 'Storage'],
    rating: 4.9,
    reviews: 156,
    available: true
  },
  {
    id: '5',
    title: 'Luxury Boudha Penthouse',
    type: 'penthouse',
    rooms: 3,
    bathrooms: 3,
    area: 2200,
    address: 'Boudhanath Stupa Area',
    city: 'Kathmandu',
    price: 60000,
    imageUrl: '/src/assets/penthouse-1.jpg',
    amenities: ['WiFi', 'City Views', 'Balcony', 'Security', 'Gym', 'Rooftop Access'],
    rating: 4.9,
    reviews: 203,
    available: true
  },
  {
    id: '6',
    title: 'Himalayan View Villa',
    type: 'villa',
    rooms: 5,
    bathrooms: 4,
    area: 3500,
    address: 'Nagarkot Hill Station',
    city: 'Bhaktapur',
    price: 75000,
    imageUrl: '/src/assets/villa-1.jpg',
    amenities: ['WiFi', 'Himalayan Views', 'Garden', 'Parking', 'Mountain Air', 'BBQ Area'],
    rating: 4.7,
    reviews: 78,
    available: true
  }
];

export const propertyTypes = ['apartment', 'house', 'studio', 'townhouse', 'penthouse', 'villa'] as const;
export const roomOptions = [1, 2, 3, 4, 5, 6] as const;
export const cities = ['Kathmandu', 'Pokhara', 'Lalitpur', 'Bhaktapur', 'Chitwan', 'Biratnagar'] as const;
export const allAmenities = [
  'WiFi', 'Air Conditioning', 'Gym', 'Parking', 'Pet Friendly', 
  'Garden', 'Traditional Architecture', 'Mountain Views', 'Natural Light', 'Historic Charm', 
  'Storage', 'City Views', 'Balcony', 'Security', 'Rooftop Access', 'Lake Views', 'BBQ Area',
  'Courtyard', 'Himalayan Views', 'Mountain Air'
] as const;