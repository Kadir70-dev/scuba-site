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
import { AboutDiveCampus } from './components/pages/AboutDiveCampus';
import { SpecialtyCourses } from './components/pages/SpecialtyCourses';
import { PadiRescueDiver } from './components/pages/PadiRescueDiver';
import { PadiOpenDiver } from './components/pages/PadiOpenDiver';
import { PadiOpenWater } from './components/pages/PadiOpenWater';

import AdminLogin from './components/admin/AdminLogin';
import AdminDashboard from './components/admin/AdminDashboard';

// ✅ NEW IMPORTS
import PriceLogin from './components/admin/PriceLogin';
import PriceManager from './components/admin/PriceManager';
import PadIDivemaster from './divemaster/PadIDivemaster';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem('auth') === 'true'
  );

  const location = useLocation();

  const isAdminAuth = localStorage.getItem("adminAuth") === "true";
  const isPriceAuth = localStorage.getItem("priceAuth") === "true";

  // 🔥 HANDLE ADMIN ROUTES FIRST
  if (location.pathname.startsWith("/admin")) {

    // Admin Login
    if (location.pathname === "/admin") {
      return <AdminLogin />;
    }

    // Admin Dashboard
    if (location.pathname === "/admin/dashboard") {
      return isAdminAuth ? <AdminDashboard /> : <AdminLogin />;
    }

    // Price Login
    if (location.pathname === "/admin/price-login") {
      return <PriceLogin />;
    }

    // Price Manager
    if (location.pathname === "/admin/prices") {
      return isPriceAuth ? <PriceManager /> : <PriceLogin />;
    }

    return null;
  }

  // 🔥 NORMAL USER FLOW
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
          ) : location.pathname === "/padi-open-water" ? (
            <PadiOpenWater />
          ) : (
            <>
              <Hero />
              <DivingCourses />
              <FeaturedExperiences />
              <Testimonials />
              <BookingForm />
              <ReviewsPage />
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