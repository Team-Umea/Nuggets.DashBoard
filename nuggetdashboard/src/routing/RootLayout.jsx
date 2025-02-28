import { Outlet } from "react-router-dom";
import Footer from '../components/Footer'
import Footer from "../components/footer/footer";
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