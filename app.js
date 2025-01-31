async function sendToAI() {
    const input = document.getElementById('user-input').value;
    const responseDiv = document.getElementById('response');
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': Bearer ${process.env.OPENAI_API_KEY}
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: input }]
        })
    });

    const data = await response.json();
    responseDiv.textContent = data.choices[0].message.content;
}