import React from 'react';
import { useForm } from 'react-hook-form';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('order successfully');
                    reset();
            }
        })
    }
    return (
        <div>
            <div>
                <h1 className='text-center'>Please Send your Information</h1>
            </div>
            <form className="order-form" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Address" defaultValue="" {...register("address")} />
                <input placeholder="City" defaultValue="" {...register("city")} />
                <input placeholder="phone number" defaultValue="" {...register("phone")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default PlaceOrder;