import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])
    return (
        <div>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Card className='shadow h-100 service-card'>
                        <Card.Img className='mx-auto service-img p-2 img-fluid w-75' variant="top" src={product.img} />
                        <Card.Body>
                            <Card.Title className='text-center'>{product.name}</Card.Title>
                            <Card.Text>
                                <p>{product.seller}</p>
                                <p>{product.price}</p>
                                <p>{product.shipping}</p>
                                <Link to='/placeOrder'><button className='btn btn-primary w-100'>Place Order</button></Link>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4"></div>
            </div>
        </div>
    );
};

export default ProductDetails;