import React, { useState, useEffect } from "react";
import "./Recipe.css";
import getRecipe from "./ai.js"; // Import the function

export default function Recipe({ ingredients }) {
    const [recipe, setRecipe] = useState(null); // State to store the generated recipe
    const [loading, setLoading] = useState(true); // State to handle loading

    useEffect(() => {
        async function fetchRecipe() {
            try {
                setLoading(true); // Set loading to true
                const generatedRecipe = await getRecipe(ingredients); // Fetch recipe
                setRecipe(generatedRecipe.replace(/```[\s\S]*?\n/g, "").trim()); // Save recipe to state
            } catch (error) {
                console.error("Error fetching recipe:", error);
                setRecipe("Failed to generate a recipe. Please try again.");
            } finally {
                setLoading(false); // Set loading to false
            }
        }

        fetchRecipe();
    }, [ingredients]); // Re-run effect when `ingredients` changes

    if (loading) {
        return <p>Loading recipe...</p>;
    }

    if (!recipe) {
        return <p>No recipe available.</p>;
    }

    return (
        <div className="GotRecipe">
            {/* <h1>Suggested Recipe:</h1> */}
            <div dangerouslySetInnerHTML={{ __html: recipe }} />
        </div>
    );
}
