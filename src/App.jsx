import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./stores/components/Header";
import Mainpage from "./stores/pages/Mainpage";

import Acpage from "./stores/pages/Acpage";
import Bookspage from "./stores/pages/Bookspage";
import Computerpage from "./stores/pages/Computerspage";
import Fridgepage from "./stores/pages/Fridgepage";
import Furniturepage from "./stores/pages/Furniturepage";
import Kitchenpage from "./stores/pages/Kitchenpage";
import Tvpage from "./stores/pages/Tvpage";
import Watchpage from "./stores/pages/Watchpage";
import Speakerspage from "./stores/pages/speakerspage";
import Mobilespage from "./stores/pages/Mobilepages";
import MenWearpage from "./stores/pages/MenWearpage";
import WomenWearpage from "./stores/pages/WomenWearpage";

import Acsingle from "./stores/Singles/Acsingle";
import Bookssingle from "./stores/Singles/Bookssingle";
import Computersingle from "./stores/Singles/Computersingle";
import Fridgesingle from "./stores/Singles/Fridgesingle";
import Furnituresingle from "./stores/Singles/Furnituresingle";
import Kitchensingle from "./stores/Singles/Kitchensingle";
import Speakersingle from "./stores/Singles/Speakersingle";
import Tvsingle from "./stores/Singles/Tvsingle";
import Watchsingle from "./stores/Singles/Watchsingle";
import Womensingle from "./stores/Singles/Womensingle";
import Mobilesingle from "./stores/Singles/Mobilesingle";
import Menwearsingle from "./stores/Singles/Menwearsingle";
import Usecart from "./Usecart";
import SignInForm from "./stores/components/SigninForm";

const App = () => {
  return (
    <>
      <Header />
      <div>
        <Routes>
          {/* mainpage   /under products main components */}
          <Route path="/" element={<Mainpage />} />
          {/* pagess */}
          <Route path="/Ac-page" element={<Acpage />} />
          <Route path="/Books-page" element={<Bookspage />} />
          <Route path="/Fridge-page" element={<Fridgepage />} />
          <Route path="/Furniture-page" element={<Furniturepage />} />
          <Route path="/Kitchen-page" element={<Kitchenpage />} />
          <Route path="/speaker-page" element={<Speakerspage />} />
          <Route path="/Computer-page" element={<Computerpage />} />
          <Route path="/tv-page" element={<Tvpage />} />
          <Route path="/watch-page" element={<Watchpage />} />
          <Route path="/menwear-page" element={<MenWearpage />} />
          <Route path="/womenwear-page" element={<WomenWearpage />} />
          <Route path="/mobiles-page" element={<Mobilespage />} />
          {/* singles */}
          <Route path="/ac-page/:id" element={<Acsingle />} />
          <Route path="/Books-page/:id" element={<Bookssingle />} />
          <Route path="/computer-page/:id" element={<Computersingle />} />
          <Route path="/Fridge-page/:id" element={<Fridgesingle />} />
          <Route path="/Furniture-page/:id" element={<Furnituresingle />} />
          <Route path="/Kitchen-page/:id" element={<Kitchensingle />} />
          <Route path="/speaker-page/:id" element={<Speakersingle />} />
          <Route path="/Tv-page/:id" element={<Tvsingle />} />
          <Route path="/watch-page/:id" element={<Watchsingle />} />
          <Route path="/women-page/:id" element={<Womensingle />} />
          <Route path="/mobile-page/:id" element={<Mobilesingle />} />
          <Route path="/menwear-page/:id" element={<Menwearsingle />} />

          <Route path="/cart" element={<Usecart />} />

          <Route path="/login" element={<SignInForm />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
