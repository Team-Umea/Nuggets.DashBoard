import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "../pages/Homepage";
import ProductPage from "../pages/ProductsPage";
import NotFound from "../pages/NotFound";

const route = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path="products" element={<ProductPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);
export default route;
