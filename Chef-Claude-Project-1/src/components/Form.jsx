import "./Form.css"
import React from "react";
import Recipe from "./Recipe.jsx"
export default function Form(){
    // const ingre =[];
    const [array,setArray]=React.useState([]);
    const modified_arr=array.map((val,index)=>{
        return <li style={{color:"#475467",fontSize:"18px",marginTop: "18px"}} key={index}>{val}</li>
    })

    // const modified_arr=array.map((val,index)=>( <li key={index}>{val}</li> ))
    // this is for implicit return where {} is replaced with ()
    function HandleSubmission(event){
        event.preventDefault();
        const formData=new FormData(event.currentTarget);
        const ingredient=formData.get('ingredient');
        setArray(prevArray=>[...prevArray,ingredient]);
        event.currentTarget.reset(); // to refresh the input label
    }

    const [ButtonState,setButtonState]=React.useState(false);
    function GetRecipe(){
        setButtonState((prevState)=>!prevState);
    }
    
    return(
        <>
        
         <form onSubmit={HandleSubmission} method="POST"> {/*by default it would be get */}
            <input araia-label="add ingredient" className="search"type="text" placeholder="e.g. oregano" name="ingredient" autoComplete="off"/>
            <button className="addIngredient">+Add ingredient</button>
        </form>

        { array.length>0 && <div className="Ingredients">
            <div >
                <div className="Ingredients-1">
                    <h1 style={{marginLeft:"0px"}}>Ingredients on hand:</h1>
                    <ul style={{paddingLeft:"0px",marginLeft:"20px"}}>
                        {modified_arr}
                    </ul>
                </div>
                
                {array.length>3 && <div style={{marginTop:"48px"}} className="Recepie">
                    <div className="recepieContext">
                    <h3>Ready for a recipe?</h3>
                    <p style={{color:"#6B7280"}}>Generate a recipe from your list of ingredients.</p>
                    </div>
                    
                    <button onClick={GetRecipe} className="recipeButton">Get a recipe</button>
                </div>}
            </div>

            {ButtonState && <Recipe ingredients={array}/>}

        </div>}

        
        
        </>

    )
}