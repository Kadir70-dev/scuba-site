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
import { ReviewsPage } from './components/ReviewsPage';
import { TeamPage } from './components/TeamPage';
import { AboutDiveCampus } from './components/pages/AboutDiveCampus';
import { SpecialtyCourses } from './components/pages/SpecialtyCourses';
import { PadIDivemaster } from './components/pages/PadIDivemaster';
import { PadiRescueDiver } from './components/pages/PadiRescueDiver';
import { PadiOpenDiver } from './components/pages/PadiOpenDiver';
import { PadiOpenWater } from './components/pages/PadiOpenWater';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('auth') === 'true'
  );

  const location = useLocation();

  return (
    <>
      {isLoggedIn ? (
        <div className="min-h-screen bg-[#0a0e27] overflow-x-hidden">
          <Navbar />

          {location.pathname === "/about" ? (
            <AboutDiveCampus />
          ) : location.pathname === "/advanced-open-water" ? (
            <AdvancedOpenWater />
          ) : location.pathname === "/specialty-courses" ? (
              <SpecialtyCourses />
          ) : location.pathname === "/padi-divemaster" ? (
            <PadIDivemaster />
          ) : location.pathname === "/rescue-diver" ? (
            <PadiRescueDiver />
          ) : location.pathname === "/padi-open-diver" ? (
            <PadiOpenDiver />
          ) : location.pathname === "/padi-open-water" ? 
            <PadiOpenWater />
          : (

            
           

            <>
              <Hero />


              <DivingCourses />
              <FeaturedExperiences />
              <Testimonials />
              <BookingForm />
              <ReviewsPage />

              <TeamPage />

              <WhyChooseUs />
              <Gallery />
              <Pricing />
              <FAQ />
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