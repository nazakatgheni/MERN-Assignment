import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <h2>Navigation</h2>
            <br />
            <Link to={'/home'}>Home</Link>
            <br />
            <Link to={'/hello'}>Go to Hello Page</Link>
            <br />
            <Link to={'/4'}>Go to Number Page</Link>
            <br />
            <Link to={'/hello/blue/red'}>Go to Color Page</Link>
        </div>
    )
}

export default Nav
