import { createBrowserRouter,createRoutesFromElements, Route } from "react-router-dom";
import RootLayout from "./RootLayout";
import HomePage from "../pages/Homepage";
import ProductPage from "../pages/ProductsPage";

 const route = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element ={<RootLayout/>} >
        <Route index element={<HomePage/>}/>
        <Route path="products" element={<ProductPage/>} />

    </Route>
))
export default route;