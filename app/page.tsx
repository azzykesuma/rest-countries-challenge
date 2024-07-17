import Header from "@/components/ui/Header";
import FilterSection from "@/components/ui/FIilterSection";
import React from "react";
import Countries from "@/components/Countries";

const Home = () => {
  return (
    <main>
      <Header />
      <FilterSection />
      <Countries />
    </main>
  );
};

export default Home;
