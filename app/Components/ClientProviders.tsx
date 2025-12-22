"use client";


import AosInit from "../AOS";
import BackToTop from "../Home/BackToTop";
import FloatingButton from "../Home/FloatingButton";
;

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AosInit />
      {children}
      <BackToTop />
      <FloatingButton />
    </>
  );
}
