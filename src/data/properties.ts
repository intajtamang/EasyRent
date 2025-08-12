// Import all available images with explicit paths
const apartment1 = new URL('@/assets/apartment-1.jpg', import.meta.url).href;
const house1 = new URL('@/assets/house1.jpg', import.meta.url).href;
const apartment22 = new URL('@/assets/apartment22.jpg', import.meta.url).href;
const house2 = new URL('@/assets/house2.jpg', import.meta.url).href;
const room = new URL('@/assets/room.jpeg', import.meta.url).href;
const house12 = new URL('@/assets/house-12.jpg', import.meta.url).href;
const house5 = new URL('@/assets/house5.jpg', import.meta.url).href;
const apartment234 = new URL('@/assets/apartment234.jpg', import.meta.url).href;
const room22 = new URL('@/assets/room22.jpg', import.meta.url).href;
const house23 = new URL('@/assets/house23.jpeg', import.meta.url).href;

// Create an image mapping object for better error handling
const imageMap = {
  apartment1,
  house1,
  apartment22,
  house2,
  room,
  house12,
  house5,
  apartment234,
  room22,
  house23
};

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
  imageUrl: string | any; // Accept both string and imported image types
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
    address: '123 Thamel Marg',
    city: 'Kathmandu',
    price: 45000,
    imageUrl: imageMap.apartment1,
    amenities: ['WiFi', 'Air Conditioning', 'Gym', 'Parking', 'Pet Friendly'],
    rating: 4.8,
    reviews: 124,
    available: true
  },
  {
    id: '2',
    title: 'Cozy Lalitpur House',
    type: 'house',
    rooms: 3,
    bathrooms: 2,
    area: 1200,
    address: '456 Patan Dhoka',
    city: 'Lalitpur',
    price: 35000,
    imageUrl: imageMap.house1,
    amenities: ['WiFi', 'Garden', 'Parking', 'Pet Friendly', 'Fireplace'],
    rating: 4.6,
    reviews: 89,
    available: true
  },
  {
    id: '3',
    title: 'Bright Boudha Studio',
    type: 'studio',
    rooms: 1,
    bathrooms: 1,
    area: 600,
    address: '789 Boudha Stupa',
    city: 'Kathmandu',
    price: 28000,
    imageUrl: imageMap.apartment22,
    amenities: ['WiFi', 'Air Conditioning', 'High Ceilings', 'Natural Light'],
    rating: 4.4,
    reviews: 67,
    available: true
  },
  {
    id: '4',
    title: 'Elegant Bhaktapur Townhouse',
    type: 'townhouse',
    rooms: 4,
    bathrooms: 3,
    area: 1800,
    address: '321 Durbar Square',
    city: 'Bhaktapur',
    price: 55000,
    imageUrl: imageMap.house2,
    amenities: ['WiFi', 'Historic Charm', 'Parking', 'Garden', 'Storage'],
    rating: 4.9,
    reviews: 156,
    available: true
  },
  {
    id: '5',
    title: 'Luxury Pokhara Penthouse',
    type: 'penthouse',
    rooms: 3,
    bathrooms: 3,
    area: 2200,
    address: '567 Lakeside Drive',
    city: 'Pokhara',
    price: 75000,
    imageUrl: imageMap.apartment234,
    amenities: ['WiFi', 'Lake Views', 'Balcony', 'Concierge', 'Pool', 'Gym'],
    rating: 4.9,
    reviews: 203,
    available: true
  },
  {
    id: '6',
    title: 'Modern Chitwan Villa',
    type: 'villa',
    rooms: 5,
    bathrooms: 4,
    area: 3500,
    address: '890 Jungle Paradise',
    city: 'Chitwan',
    price: 95000,
    imageUrl: imageMap.house5,
    amenities: ['WiFi', 'Pool', 'Garden', 'Parking', 'Jungle View', 'BBQ Area'],
    rating: 4.7,
    reviews: 78,
    available: true
  },
  {
    id: '7',
    title: 'Cozy Dharan Apartment',
    type: 'apartment',
    rooms: 2,
    bathrooms: 1,
    area: 800,
    address: '234 Hill Station Road',
    city: 'Dharan',
    price: 32000,
    imageUrl: imageMap.apartment22,
    amenities: ['WiFi', 'Mountain Views', 'Parking', 'Balcony'],
    rating: 4.5,
    reviews: 92,
    available: true
  },
  {
    id: '8',
    title: 'Traditional Biratnagar House',
    type: 'house',
    rooms: 4,
    bathrooms: 2,
    area: 1500,
    address: '567 Terai Street',
    city: 'Biratnagar',
    price: 42000,
    imageUrl: imageMap.house23,
    amenities: ['WiFi', 'Garden', 'Parking', 'Traditional Design'],
    rating: 4.6,
    reviews: 115,
    available: true
  },
  {
    id: '9',
    title: 'Modern Butwal Studio',
    type: 'studio',
    rooms: 1,
    bathrooms: 1,
    area: 500,
    address: '890 Lumbini Road',
    city: 'Butwal',
    price: 25000,
    imageUrl: imageMap.room,
    amenities: ['WiFi', 'Air Conditioning', 'Modern Kitchen'],
    rating: 4.3,
    reviews: 73,
    available: true
  },
  {
    id: '10',
    title: 'Luxury Nagarkot Villa',
    type: 'villa',
    rooms: 6,
    bathrooms: 4,
    area: 4000,
    address: '123 Himalayan View',
    city: 'Nagarkot',
    price: 120000,
    imageUrl: imageMap.house12,
    amenities: ['WiFi', 'Mountain Views', 'Pool', 'Garden', 'Helipad', 'Spa'],
    rating: 4.9,
    reviews: 189,
    available: true
  }
];

export const propertyTypes = ['apartment', 'house', 'studio', 'townhouse', 'penthouse', 'villa'] as const;
export const roomOptions = [1, 2, 3, 4, 5, 6] as const;
export const cities = ['Kathmandu', 'Lalitpur', 'Bhaktapur', 'Pokhara', 'Chitwan', 'Dharan', 'Biratnagar', 'Butwal', 'Nagarkot'] as const;
export const allAmenities = [
  'WiFi', 'Air Conditioning', 'Gym', 'Parking', 'Pet Friendly', 
  'Garden', 'Fireplace', 'High Ceilings', 'Natural Light', 'Historic Charm', 
  'Storage', 'Mountain Views', 'Lake Views', 'Balcony', 'Concierge', 'Pool', 'Jungle View', 'BBQ Area',
  'Traditional Design', 'Modern Kitchen', 'Helipad', 'Spa'
] as const;