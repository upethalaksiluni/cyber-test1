import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main className="ci-section">
            <div className="ci-container text-center">
                <h1>404</h1>
                <p>Page not found.</p>
                <Link to="/" className="ci-btn ci-btn-primary ci-mt-24">
                    Back Home
                </Link>
            </div>
        </main>
    );
}

export default NotFound;