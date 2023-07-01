import { OPENAI_API_KEY } from '@env';

export const completionApi = async ({ prompt }) => {
  if (prompt == '') return
  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        prompt: "Convierte esto a un número binario: " + prompt,
        max_tokens: 50,
        model: 'text-davinci-003',
        temperature: 0,
        n: 1
      })
    })

    const data = await response.json()
    let numTokens = data.usage?.total_tokens || 0
    let message = data.choices[0].text.replace(/(\r\n|\n|\r)/gm, "")
    return { numTokens, message }
  } catch (error) {
    throw new Error('Error al obtener la respuesta de la API')
  }
}