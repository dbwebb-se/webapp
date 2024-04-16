import { Outlet, Link } from "react-router-dom";
import LagerTitle from "./lager-title.js";

function Layout(props) {
    return (
        <>
            <LagerTitle title="Emil's lager" />
            <main className="main">
                <Outlet />
            </main>
            <nav className="bottom-nav">
                <Link to="/">Produkter</Link>
                <Link to="/packlist">Plocklista</Link>
            </nav>
        </>
    );
}

export default Layout;
