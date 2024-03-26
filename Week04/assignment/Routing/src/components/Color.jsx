import React from 'react'
import { useParams } from 'react-router-dom'

const Color = () => {
    const { word, color1, color2 } = useParams();
    const textStyle = {
        color: color1 || 'purple',
        backgroundColor: color2 || 'red',
        padding: '10px',
        borderRadius: '5px',
        display: 'inline-block',
    };

    return (
        <div style={textStyle}>{word}
        </div>
    )
}

export default Color

