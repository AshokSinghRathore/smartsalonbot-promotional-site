export interface ServiceType {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

export const services: ServiceType[] = [
  {
    id: 1,
    title: "Automatic Staff Assignment",
    description:
      "This service automates the staff assignment process, ensuring that the right personnel with the necessary skills and expertise are assigned to each task.",
    imageSrc: "/automatic-staff-assignment.jpg", // Replace with correct image path
  },
  {
    id: 2,
    title: "Online Customer Booking",
    description:
      "With Online Customer Booking, businesses can streamline their scheduling process and provide a user-friendly experience for their clients to book services at their own convenience.",
    imageSrc: "/online-customer-booking.jpg", // Replace with correct image path
  },
  {
    id: 3,
    title: "Automatic Inventory Management",
    description:
      "Keep track of your salon’s inventory effortlessly and ensure you never run out of essential supplies.",
    imageSrc: "/automatic-inventory-management.jpg", // Replace with correct image path
  },
  {
    id: 4,
    title: "Staff Attendance Management",
    description:
      "With Staff Attendance Management, businesses can automate attendance tracking, monitor employee punctuality, and generate comprehensive attendance reports for better insights.",
    imageSrc: "/staff-attendance-management.png", // Replace with correct image path
  },
  {
    id: 5,
    title: "Live Waiting Time",
    description:
      "Live waiting time offers a convenient way for users to check wait times remotely, saving them time and frustration by avoiding unnecessary delays.",
    imageSrc: "/live-waiting-time.png", // Replace with correct image path
  },
  {
    id: 6,
    title: "AI-driven Business Analysis",
    description:
      "Leverage the power of AI to optimize your salon operations and stay ahead of the competition.",
    imageSrc: "/ai-driven-business-analysis.png", // Replace with correct image path
  },
];
