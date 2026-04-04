import React, { useContext } from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDocters from "../components/TopDocters";
import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const { token } = useContext(AppContext);

  return (
    <div>
      {/* Show HeroSection and Banner only if user is NOT logged in */}
      {!token ? (
        <>
          <HeroSection />
          <Banner />
        </>
      ) : (
        <>
          {/* After login, hide hero and banner, show the rest */}
          <Header />
          <SpecialityMenu />
          <TopDocters />

          {/* Add dashboard or other logged-in content here */}
        </>
      )}
    </div>
  );
};

export default Home;

