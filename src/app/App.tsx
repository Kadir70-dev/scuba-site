import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DivingCourses } from './components/DivingCourses';
import { FeaturedExperiences } from './components/FeaturedExperiences';
import { Testimonials } from './components/Testimonials';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0e27] overflow-x-hidden">
      <Navbar />
      <Hero />
      <DivingCourses />
      <FeaturedExperiences />
      <Testimonials />
      <WhyChooseUs />
      <Gallery />
      <Pricing />
      <FAQ />
      <BookingForm />
      <Footer />
    </div>
  );
}