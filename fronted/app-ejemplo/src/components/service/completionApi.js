import { OPENAI_API_KEY } from '@env';

export const completionApi = async ({ prompt }) => {
  if (prompt == '') return
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        temperature: 0,
        messages: [
          {
            "role": "user",
            "content": prompt
          },
          {
            "role": "system",
            "content": "Eres una calculadora que convierte numeros naturales a binarios y respondes diciendo unicamente cual es el resultado de la conversion sin texto adicional"
          }
        ]
      })
    })

    const data = await response.json()
    let numTokens = data.usage?.total_tokens || 0
    let message = data.choices[0]?.message?.content || 'No se puedo procesar la solicitud'
    return { numTokens, message }
  } catch (error) {
    throw new Error('Error al obtener la respuesta de la API')
  }
}