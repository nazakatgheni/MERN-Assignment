import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const ProductForm = () => {

    const [product, setProduct] = useState({
        title: '',
        price: '',
        description: ''
    });

    const [errors, setErrors] = useState({})
    const navigate = useNavigate();


    const changeHandler = e => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault();
        console.log(e);
        axios.post('http://localhost:8000/api/product', product)
            .then(res => {
                console.log(res);
                setProduct(
                    {
                        title: '',
                        price: '',
                        description: ''
                    })
                navigate('/')
            })
            .catch(err => {
                console.log(err.response.data)
                setErrors(err.response.data.errors)
            })
    }
    return (
        <div>
            <form onSubmit={submitHandler} className='col-md-4 offset-4'>
                <h1>Create a Product</h1>
                <div className='mb-3'>
                    <label htmlFor="title" className='form-label'>Title:</label>
                    <input type="text" className='form-control' onChange={changeHandler} name='title' value={product.title} />
                    {errors.title ? <p className='text-danger'>{errors.title.message}</p> : null}
                </div>
                <div className='mb-3'>
                    <label htmlFor="price" className='form-label'>Price:</label>
                    <input type="text" className='form-control' onChange={changeHandler} name='price' value={product.price} />
                    {errors.price ? <p className='text-danger'>{errors.price.message}</p> : null}
                </div>
                <div className='mb-3'>
                    <label htmlFor="description" className='form-label'>Description:</label>
                    <input type="text" className='form-control' onChange={changeHandler} name='description' value={product.description} />
                    {errors.description ? <p className='text-danger'>{errors.description.message}</p> : null}
                </div>
                <button type='submit' className='btn btn-primary'>Create a Product</button>
            </form>
        </div>
    )
}

export default ProductForm
