import React from 'react';

 const Gif = ({ title, url, id }) => {
    return (
        <React.Fragment>
            <label>{title}</label>
            <img alt={title} src={url} /> 
            <span>ID: {id}</span>
            <br></br>
        </React.Fragment>
    );
}

export default Gif;