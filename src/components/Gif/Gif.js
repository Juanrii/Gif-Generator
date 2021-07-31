import React from 'react';
import './Gif.css'

 const Gif = ({ title, url, id }) => {
    return (
        <a href={`#${id}`} className="Gif">
            <label>{title}</label>
            <img alt={title} src={url} /> 
            <span>ID: {id}</span>
            <br></br>
        </a>
    );
}

export default Gif;