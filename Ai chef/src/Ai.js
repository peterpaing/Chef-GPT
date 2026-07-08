const ai = 'https://hook.eu1.make.com/g25dob4z7uq11wrjnp31ruiiwy3yuo4p';

export async function getAiResponse(messageText) {
    try {
        const res = await fetch(ai, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_prompt: messageText 
            })
        });

        const aiReply = await res.text()
        console.log("AI Answer:", aiReply)
        return aiReply
    } catch (err) {
        console.log(err)
    }
}


window.getAiResponse = getAiResponse