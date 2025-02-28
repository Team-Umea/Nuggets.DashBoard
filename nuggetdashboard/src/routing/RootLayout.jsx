import { Outlet } from "react-router-dom";
function RootLayout() {
    return ( <>
<header></header>
<main>
    <Outlet/>
</main>
<footer></footer>
    </> );
}

export default RootLayout;