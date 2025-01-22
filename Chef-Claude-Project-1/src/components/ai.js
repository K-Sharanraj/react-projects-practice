import { GoogleGenerativeAI } from "@google/generative-ai";

export default async function getRecipe(array) {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY; // Use import.meta.env for Vite
    const genAI = new GoogleGenerativeAI(apiKey); // Use the API key
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `suggests a recipe they could make with some or all of those ingredients.
You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. The ingredients are ${array.join(", ")}. Format your response in this example format:
        <div className="GotRecipe">
            <h1 style={{marginLeft:"0px"}}>Suggested recipe:</h1>
            <p>Based on your available ingredients, I would recommend making a Creamy Garlic Parmesan Chicken dish. Here’s the recipe:</p>
            <p>Ingredients:</p>
            <ul style={{paddingLeft:"0px",marginLeft:"20px"}}>
                <li>4 boneless, skinless chicken breasts</li>
                <li>4 cloves garlic, minced</li>
                <li>1/2 cup chicken broth</li>
                <li>1 cup heavy cream</li>
            </ul>

            <p>Instructions:</p>
            <ol style={{paddingLeft:"0px",marginLeft:"20px"}}>
                <li>Season the Chicken: Season the chicken breasts with salt and pepper on both sides.</li>
                <li>Cook the Chicken: In a large skillet, heat the olive oil over medium-high heat.</li>
                <li>Sauté Garlic: In the same skillet, reduce the heat to medium. Add the minced garlic and sauté for about 1 minute until fragrant.</li>
                <li>Serve: Garnish with fresh parsley and serve the chicken with the creamy garlic Parmesan sauce over pasta, rice, or mashed potatoes.</li>
            </ol>
            <p>Enjoy!</p>
        </div>
    `;

    try {
        const result = await model.generateContent(prompt);
        return result.response.text(); // Ensure this is the correct method for your library
    } catch (error) {
        console.error("Error generating content:", error);
        return "<p>Failed to generate a recipe. Please try again later.</p>";
    }
}
