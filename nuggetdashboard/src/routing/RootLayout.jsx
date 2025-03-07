import { Outlet } from "react-router-dom";
import Footer from '../components/Footer'
import Header from "../components/Header/Header";

function RootLayout() {
    return ( <>
<Header></Header>
<main>
    <Outlet/>
</main>

< Footer />


    </> );
}

export default RootLayout;