import AboutPage from "@/components/about/page";
import AboutBottomPage from "@/components/aboutBottom/page";
import ContactPage from "@/components/contact/page";
import DemoPage from "@/components/demo/page";
import HomePage from "@/components/home/page";
import ServiceIncludedPage from "@/components/serviceIncluded/page";
import TestimonialsPage from "@/components/testimonials/page";

export default function Home() {
  return (
    <>
      <HomePage />
      <AboutPage />
      <AboutBottomPage />
      <ServiceIncludedPage />
      <TestimonialsPage />
      <DemoPage />
      <ContactPage />
    </>
  );
}
