async function sendToAI() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'; // 222.70.146.190:1080
  const targetUrl = 'https://api.openai.com/v1/chat/completions';

  const response = await fetch(proxyUrl + targetUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }]
    })
  });
}