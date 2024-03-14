import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';
// import AddCategory from './components/AddCategory'
// import GifGrid from './components/GifGrid'

const GifExpertApp = () => {
  
  const [categories, setCategories] = useState([]);

    const onAddCategory = (input) => {
        if (categories.includes(input)) return;
        setCategories([...categories, input]);

   }
    
    return (
    <div>
      <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={event => onAddCategory(event)}
                //setCategories={setCategories}
            />
            {
                categories.map(cat => ( 
                    <GifGrid key={cat} category={ cat}/>
                ))
            }
    </div>
  )
}

export default GifExpertApp
