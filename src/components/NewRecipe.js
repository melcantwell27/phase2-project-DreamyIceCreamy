import { useState } from "react";
import { useNavigate } from 'react-router-dom'; 

function NewRecipe(){
    const [name, setName] = useState('')
    // const [containsBanana, setContainsBanana] = useState(false); 
    // const [scoopScore, setScoopScore] = useState(0); 
    const [recipe, setRecipe] = useState('');
    const [imageURL, setImageURL] = useState('')

    const navigate = useNavigate()

    //Handle submit (prepare & post data to db.json)
    function handleSubmit(event){
        event.preventDefault()
        const newRecipeData ={
            name,
            // containsBanana,
            // scoopScore,
            recipe,
            imageURL
        }
        fetch('http://localhost:8000/recipes', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newRecipeData),
          })
          .then(res => {
            if (res.ok){
              res.json()
              .then(NewRecipe => {
                navigate(`/recipe/${NewRecipe.id}`)
              })
            }else { 
              alert("Something went awry!")
            }
          })
          ;
    }
    return (
        <div>
          <h2>Have a non-dairy ice creamy recipe you love? Submit below!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              `<label>
                Name:
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                  className="recipe-input"/>
              </label>
              </div>
              <br>
              </br>`
            {/* <label>
              Contains Banana:
              <input type="checkbox" checked={containsBanana} onChange={(e) => setContainsBanana(e.target.checked)} />
            </label>
            <label>
              Scoop Score:
              <input type="number" value={scoopScore} onChange={(e) => setScoopScore(e.target.value)} />
            </label> */}
            <div className="form-field"></div>
            <label>
              Recipe:
              <textarea 
              value={recipe} 
              onChange={(e) => setRecipe(e.target.value)} 
              className="recipe-input"/>
            </label>
            <br>
            </br>
            <br>
            </br>
            <div>
              <label>
                Image URL:
                <input 
                type="text" 
                value={imageURL} onChange={(e) => setImageURL(e.target.value)} 
                className="recipe-input"
                />
              </label>
            </div>
            <button type="submit">Add Recipe</button>
          </form>
        </div>
      );
   
}



export default NewRecipe;
