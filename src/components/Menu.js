import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Menu(){
    const [recipes, setRecipes] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))
    }, [])

    return(
        <div>
        <h1>Scope the Scoops</h1>
        <div className="menu-container">
        {recipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
                <Link to={`/recipe/${recipe.id}`} className="recipe-link">
                    {recipe.name}
                    <img 
                        src={recipe.imageURL} 
                        alt={recipe.name} 
                        className="recipe-image" 
                    />
                </Link>
            </div>
        ))}
    </div>
    </div>
);

}

export default Menu