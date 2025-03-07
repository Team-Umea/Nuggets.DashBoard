import { createBrowserRouter,createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "../pages/Homepage";
import ProductPage from "../pages/ProductsPage";
import SavingsPage from "../pages/SavingsPage" ;
import AboutPage from "../pages/AboutPage";

 const route = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element ={<RootLayout/>} >
        <Route index element={<HomePage/>}/>
        <Route path="products" element={<ProductPage/>} />
        <Route path="calc" element={<SavingsPage/>} />
        <Route path="about" element={<AboutPage/>} />

    </Route>
))
export default route;