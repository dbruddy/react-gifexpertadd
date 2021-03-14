import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GitExpertApp = () => {

    const [categories, setCategories] = useState(['Naruto']);

    // const addCategory = () => {
    //     // setCategories([...categories, 'Tenis']);
    //     setCategories(cats => [...cats, 'Tenis']);
    // }

    return (
    <>
       <h1>GitExpertApp</h1>
       <AddCategory setCategories={setCategories} />
       {/* <button onClick={addCategory}>Agregar</button> */}
       
       <ol>
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                    // <li key={category}>{category}</li>
                ))
            }
       </ol> 
    </>
)}
 
export default GitExpertApp;