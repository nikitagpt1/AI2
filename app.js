document.addEventListener("DOMContentLoaded", function() {
    Telegram.WebApp.ready();
    Telegram.WebApp.expand();
});

async function sendToAI() {
    const input = document.getElementById('user-input').value;
    const responseDiv = document.getElementById('response');
    
    responseDiv.innerHTML = "⌛ Обработка запроса...";
    
    try {
        const response = await fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY'
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{role: "user", content: input}]
            })
        });

        const data = await response.json();
        responseDiv.innerHTML = data.choices[0].message.content;
    } catch (error) {
        responseDiv.innerHTML = "❌ Ошибка: " + error.message;
    }
}
async function sendToAI() {
  const response = await fetch('/api/openai-proxy', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }]
    })
  });
}