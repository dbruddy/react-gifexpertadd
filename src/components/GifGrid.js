import React from 'react';
// import React, {useEffect, useState} from 'react';
import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import getGifs from '../helpers/getGifs'

const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFetchGifs( category );

    // useEffect(() => {
        
    //     getGifs(category).then(imgs => setImages(imgs));

    // }, [category]);

    return ( 
        <>
        <h2>{category}</h2>
        {loading && <p className="animate__animated animate__bounce animate__flash">Loading</p>}
        <div className="card-grid">
            
            {
                images.map (img => (
                    <GifItem
                        key={img.id}
                        {...img}
                    />
                ))
            }
        </div>
        </>
     );
}
 
export default GifGrid;