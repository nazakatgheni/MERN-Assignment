import React, { useState } from 'react'

const HookForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [error, setError] = useState({
    //     firstName: '',
    //     lastName: '',
    //     email: '',
    //     password: '',
    //     confirmPassword: ''
    // })

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e)
    }

    const handleFirstName = (e) => {
        console.log(e.target.value)
        setFirstName(e.target.value)
    }
    const handleLastName = (e) => {
        console.log(e.target.value)
        setLastName(e.target.value)
    }
    const handleEmail = (e) => {
        console.log(e.target.value)
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        console.log(e.target.value)
        setPassword(e.target.value)
    }
    const handleConfirmPassword = (e) => {
        console.log(e.target.value)
        setConfirmPassword(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    {
                        firstName.length < 2 && firstName.length !== 0 ?
                            <p style={{ "color": "red" }}>First Name Must be at least two characters</p>
                            : null
                    }
                    <label htmlFor="name">First Name:</label>
                    <input type="text" name="name" id="#" onChange={handleFirstName} />
                </div>
                <div>
                    {
                        lastName.length < 2 && lastName.length !== 0 ?
                            <p style={{ "color": "red" }}>Last Name Must be at least two characters</p>
                            : null
                    }
                    <label htmlFor="name">Last Name:</label>
                    <input type="text" name="name" id="#" onChange={handleLastName} />
                </div>
                <div>
                    {
                        email.length < 5 && email.length !== 0 ?
                            <p style={{ "color": "red" }}>Email Must be at least 5 characters</p> : null
                    }
                    <label htmlFor="email">Email:</label>
                    <input type="number" name="email" id="#" onChange={handleEmail} />
                </div>
                <div>
                    {
                        password.length < 8 && password.length !== 0 ? <p style={{ "color": "red" }}>Password must be at least 8 characters long</p> : null
                    }
                    <label htmlFor="password">Password:</label>
                    <input type="number" name="password" id="#" onChange={handlePassword} />
                </div>
                <div>
                    {
                        confirmPassword.length < 8 && confirmPassword.length !== 0 ? <p style={{ "color": "red" }}>Confirmed Password must be at least 8 characters long</p> : null
                    }
                    <label htmlFor="password">Confirm Password:</label>
                    <input type="number" name="password" id="#" onChange={handleConfirmPassword} />

                </div>
                <button type='submit'>You Form Data</button>
            </form>
            <div>
                <h2>First Name:{firstName}</h2>
                <h2>Last Name:{lastName}</h2>
                <h2>Email:{email}</h2>
                <h2>PasswordL:{password}</h2>
                <h2>Confirm Password:{confirmPassword}</h2>
            </div>
        </div>

    )
}

export default HookForm