import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Product = (props) => {
    const { _id, img, name, seller, price, shipping } = props.product;
    const history = useHistory();

    const handleDetailsClick = () => {
        history.push(`/products/${_id}`);
    }

    return (
        <div>
            <Col>
                <Card className='shadow h-100 service-card'>
                    <Card.Img className='mx-auto service-img p-2 img-fluid w-75' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title className='text-center'>{name.slice(0, 15)}</Card.Title>
                        <Card.Text>
                            <p>{seller}</p>
                            <p>{price}</p>
                            <p>{shipping}</p>
                            <div className='d-flex justify-content-between align-items-center'>
                            <button onClick={handleDetailsClick} className='btn btn-secondary rounded w-50 me-2'>Details</button>
                            <button className='btn btn-primary rounded w-50'>Add Cart</button>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;