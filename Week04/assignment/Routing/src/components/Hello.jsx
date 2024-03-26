import React from 'react'
import { useParams } from 'react-router-dom'

const Hello = () => {
    const { word } = useParams();
    return (
        <div>
            <h2>The Word is : {word}</h2>
        </div>
    )
}

export default Hello
