const ai = 'https://hook.eu1.make.com/g25dob4z7uq11wrjnp31ruiiwy3yuo4p'



export default async function getAiResponse(messageText) {
    try {
        
        const res = await fetch(ai, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_prompt: `Using these ingredients: ${messageText}, choose the single best recipe. Return only one meal with:
                                - Recipe name
                                - Why it's the best match
                                - Preparation time
                                - Cooking time
                                - Difficulty
                                - Ingredients (available and any additional)
                                - Step-by-step cooking instructions
                                - Chef tips` 
            })
        })

       const aiReply = await res.text()
        return aiReply
        
    } catch (err) {
        console.log("Error fetching AI response:", err)
    }
}


window.getAiResponse = getAiResponse
