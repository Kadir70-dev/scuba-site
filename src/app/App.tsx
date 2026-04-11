import { useState } from 'react';
import { useLocation } from 'react-router-dom';

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
import Login from './components/Login';
import { AdvancedOpenWater } from './components/pages/AdvancedOpenWater';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('auth') === 'true');
  const location = useLocation();

  return (
    <>
      {isLoggedIn ? (
        <div className="min-h-screen bg-[#0a0e27] overflow-x-hidden">
          <Navbar />

          {location.pathname === "/advanced-open-water" ? (
            <AdvancedOpenWater />
          ) : (
            <>
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
            </>
          )}
        </div>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </>
  );
}