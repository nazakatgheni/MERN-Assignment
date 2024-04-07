import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const GetAllProduct = () => {
    const { _id } = useParams();
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
            .then(res => {
                console.log(res.data);
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, []);


    const clickHandler = e => {
        navigate(`/product/${e.target.value}`)
    }
    return (
        <div>
            <h1>All Product</h1>
            <ul>
                {product.map((product, idx) => (
                    <li key={product._id}>
                        <h3>#{idx + 1}</h3>
                        <h3>Title:{product.title}</h3>
                        <h3>Price:{product.price}</h3>
                        <h3>Description{product.description}</h3>
                        <button onClick={clickHandler} value={product._id} className='btn btn-primary'>View Product</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default GetAllProduct
