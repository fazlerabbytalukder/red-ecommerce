import React from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <div>
                <div className="row">
                    <div className="col-md-9">
                        <Products></Products>
                    </div>
                    <div className="col-md-3">
                        <Cart></Cart>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;