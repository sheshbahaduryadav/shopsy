import React from "react";
import Navbar from "./components/Navbar/Navbar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import { Home } from "./pages/Home";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {/* <MegaMenuWithPlacement /> */}
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Routes>
        <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} orderPopup={orderPopup} setOrderPopup={setOrderPopup} />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
