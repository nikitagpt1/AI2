export default async (req, res) => {
  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': Bearer ${process.env.OPENAI_API_KEY}
    },
    body: req.body
  });
  const data = await response.json();
  res.status(200).json(data);
};