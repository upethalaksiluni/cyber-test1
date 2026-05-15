import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";

function PageLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default PageLayout;