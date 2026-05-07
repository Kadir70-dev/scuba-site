// ==============================
// FILE: src/components/pages/BookingPage.tsx
// ==============================

"use client";

import { useNavigate } from "react-router-dom";
import { BookingModal } from "../components/pages/BookingModal";

export default function BookingPage() {
  const navigate = useNavigate();

  return (
    <BookingModal
      isOpen={true}
      onClose={() => navigate(-1)}
    />
  );
}