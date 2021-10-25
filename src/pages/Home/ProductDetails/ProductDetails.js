import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    },[])
    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    );
};

export default ProductDetails;