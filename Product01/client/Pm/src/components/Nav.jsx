import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className='d-flex justify-content-between align-items-right'>
            <div className='d-flex justify-content-around w-30'>
                <ul className='nav nav-tabs'>
                    <li className='nav-item'>
                        <Link to='/' className='nav-link active'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/product' className='nav-link'>Get All Product</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav
