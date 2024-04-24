import { useEffect, useState } from 'react';
import SingleProduct from "./single-product.js";

function ProductList() {
    const [products, setProducts] = useState([]);

    const apiKey = "a1963bba7c5ad2d272f18a45b819cb55";

    useEffect(() => {
        (async () => {
            const response = await fetch(`https://lager.emilfolino.se/v2/products?api_key=${apiKey}`);
            const result = await response.json();

            setProducts(result.data);
        })();
    }, []);

    const productList = products.map((p, i) => {
        return <SingleProduct key={i} product={p} />;
    })

    return (
        <>
            <h2>Produkter</h2>
            {productList}
        </>


    );
}

export default ProductList;
