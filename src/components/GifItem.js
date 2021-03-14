import React from 'react';

const GifItem = ({url, id, title}) => {
    
    return ( 
        <div className="card animate__animated animate__bounce animate__delay-2s">
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
     );
}
 
export default GifItem;

