import React from "react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function Layout({ menu, children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
