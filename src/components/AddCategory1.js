import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({addCategories}) => {

    const [inputAdd, setInputAdd] = useState('');

    const handleInputChange = (e) => {
        setInputAdd(e.target.value)
    }   
    
    const inputHandleSubmit = (e) => {
        e.preventDefault();

        if(inputAdd.trim().length > 2){
            addCategories(cats => [...cats, inputAdd]);
            setInputAdd('');
        }
    }

    return ( 
        <form
            onSubmit={inputHandleSubmit}
        >
            <input
                type="text"
                placeholder="Ingresa una categoría"
                value={inputAdd}
                onChange={handleInputChange}
            ></input>
        </form>
     );
}
 
export default AddCategory;

AddCategory.propTypes = {
    addCategories: PropTypes.func.isRequired
}