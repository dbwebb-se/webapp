function SingleProduct(props) {
    return (
        <>
            <p><strong>{props.product.name}</strong> {props.product.stock}</p>
        </>
    );
}

export default SingleProduct;
