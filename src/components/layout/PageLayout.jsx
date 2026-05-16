import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "../common/ScrollToTop";

function PageLayout() {
    return (
        <>
            <a href="#main-content" className="ci-skip-link">
                Skip to content
            </a>
            <Navbar />
            <div id="main-content" tabIndex="-1">
                <Outlet />
            </div>
            <Footer />
            <ScrollToTop />
        </>
    );
}

export default PageLayout;