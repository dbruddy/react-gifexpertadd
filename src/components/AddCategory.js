import React, {useState} from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setCategories(cats => [inputValue, ...cats]);
        setInputValue('');
    }

    return ( 
        <form
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Agrega una categoria"
                value={inputValue}
                onChange={handleChange}
            >
            </input>
            
        </form>
     );
}
 
export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}