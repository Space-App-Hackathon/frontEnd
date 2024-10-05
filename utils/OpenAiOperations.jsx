import { BACKEND_URL } from "../env";


const chatBot = async (message) => {
    const response = await fetch(`${BACKEND_URL}/api/v1/chat-with-gpt`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt:message ,previousMessages:[] }),
    });
    const data = await response.json();
    return data.data
}

export { chatBot }