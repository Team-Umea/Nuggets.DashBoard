import { Outlet } from "react-router-dom";
import Footer from '../components/Footer'
function RootLayout() {
    return ( <>
<header></header>
<main>
    <Outlet/>
</main>
< Footer />
    </> );
}

export default RootLayout;