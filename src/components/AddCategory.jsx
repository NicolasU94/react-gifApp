import React, {useState} from 'react'

const AddCategory = ({onNewCategory}) => {
    const [input, setInput] = useState('');
    const handleChange = (event) => {
        setInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.trim().length <= 1) return;
        onNewCategory(input.trim());
        //setCategories(categories => [...categories, input]);
        setInput('');
    }

    return (
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          placeholder='Buscar gifs'
            value={input}
            onChange={ (event) => handleChange(event)}
      />    
      </form>
        
  )
}

export default AddCategory
