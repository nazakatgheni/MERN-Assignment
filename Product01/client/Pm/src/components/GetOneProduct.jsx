import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';

const GetOneProduct = () => {
    const [singleProduct, setSingleProduct] = useState({});
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                console.log(res.data);
                setSingleProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteHandler = e => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
            .then(res => {
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    }


    return (
        <div>
            <h2>{singleProduct.title}</h2>
            <p>Price:{singleProduct.price}</p>
            <p>Description:{singleProduct.description}</p>
            <p>Created At:{singleProduct.createdAt}</p>
            <button onClick={deleteHandler} className='btn btn-danger ms-4'>Delete Product</button>
        </div>
    )
}

export default GetOneProduct
