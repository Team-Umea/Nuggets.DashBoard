import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Header from "../components/Header/Header";

function RootLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
