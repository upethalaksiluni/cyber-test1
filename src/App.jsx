import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./routes/AppRoutes";
import RouteScrollRestoration from "./components/common/RouteScrollRestoration";

function App() {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <RouteScrollRestoration />
                <AppRoutes />
            </BrowserRouter>
        </HelmetProvider>
    );
}

export default App;