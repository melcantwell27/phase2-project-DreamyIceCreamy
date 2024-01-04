import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Recipe(){
    const params = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8000/recipes/${params.id}`)
        .then(res =>res.json())
        .then(data => setRecipe(data))
    }, [])

    return (
        <div className="recipe-container">
        <h1>{recipe.name}</h1>
        {recipe.imageUrl && <img src={recipe.imageUrl} alt={recipe.name} />}
        <p>{recipe.recipe}</p>
        <div className="recipe-image-container">
          <p>Image:</p>
          <img 
                        src={recipe.imageURL} 
                        alt={recipe.name} 
                        className="recipe-image" 
                    />
        </div>
        </div>
    )
    
}

export default Recipe