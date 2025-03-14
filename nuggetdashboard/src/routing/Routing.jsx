import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "../pages/Homepage";
import ProductPage from "../pages/ProductsPage";
import SavingsPage from "../pages/SavingsPage";
import AboutPage from "../pages/AboutPage";
import Faq from "../pages/subpages/Faq";
import Contact from "../pages/subpages/Contact";
import NotFound from "../pages/NotFound";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="calc" element={<SavingsPage />} />
      <Route path="about" element={<AboutPage />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default route;
