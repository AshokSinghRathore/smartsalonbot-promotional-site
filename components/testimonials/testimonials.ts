export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
  imageSrc: string;
}

export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Amy Johnson",
    role: "satisfied salon owner",
    quote:
      "Smart Salon Bot has transformed how I manage my salon. No more worries about staff scheduling or inventory!",
    rating: 4.9,
    imageSrc: "/amy-johnson.jpg",
  },
  {
    id: 2,
    name: "Bruce Williams",
    role: "salon manager",
    quote:
      "Implementing Smart Salon Bot was the best decision for our business. Our sales have increased significantly!",
    rating: 5,
    imageSrc: "/bruce-williams.jpg",
  },
  {
    id: 3,
    name: "Emma Lee",
    role: "regular salon client",
    quote:
      "Managing bookings and customer interactions has never been so easy. Thank you, Smart Salon Bot!",
    rating: 4.8,
    imageSrc: "/emma-lee.jpg",
  },
];
