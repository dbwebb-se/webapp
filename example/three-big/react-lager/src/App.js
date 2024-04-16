import { useRoutes } from "react-router-dom";
import Layout from './components/layout.js';
import ProductList from './components/product-list.js';
import PackList from './components/pack-list.js';
import NoMatch from './components/no-match.js';
import './App.css';

function App() {
    let routes = [
        {
            path: "/",
            element: <Layout />,
            children: [
                { index: true, element: <ProductList /> },
                {
                    path: "/packlist",
                    element: <PackList />,
                },
                { path: "*", element: <NoMatch /> },
            ],
        },
    ];

    let element = useRoutes(routes);

    return (
        <>{element}</>
    );
}

export default App;
