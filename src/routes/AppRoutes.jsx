import { Routes, Route } from "react-router-dom";
import PageLayout from "../components/layout/PageLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Industries from "../pages/Industries";
import Frameworks from "../pages/Frameworks";
import FrameworkDetail from "../pages/FrameworkDetail";
import Insights from "../pages/Insights";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";
import Privacy from "../pages/legal/Privacy";
import Terms from "../pages/legal/Terms";
import NotFound from "../pages/NotFound";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<PageLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/frameworks" element={<Frameworks />} />
                <Route path="/frameworks/:frameworkId" element={<FrameworkDetail />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;