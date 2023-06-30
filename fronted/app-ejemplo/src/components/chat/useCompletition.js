import { useState } from 'react'

export function useCompletition() {
  const [prompt, setPrompt] = useState('')
  const [listMessage, setListMessage] = useState([])

  const onSubmit = async () => {
    const response = await fetch('https://api.openai.com/v1/completions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer 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'
        },
        body: JSON.stringify({
          prompt: "Convierte esto a un numero binario" + prompt,
          max_tokens: 50,
          model: 'text-davinci-003',
          // message: [{
          //   "role": "user",
          //   "content": "Eres un convertitextdor binario que convierte numeros naturales a binario."
          // }],
          temperature: 0,
          n: 1,
          // stop: ".",
        })
      }
    )
    const data = await response.json()
    let numTokens = data.usage.total_tokens
    let message = data.choices[0].text.replace(/(\r\n|\n|\r)/gm, "")
    setListMessage((prevValues) => [...prevValues, { id: prevValues.length, prompt: prompt, numTokens: numTokens, message: message }])
    setPrompt('')
  }

  const clearList = () => {
    setListMessage([])
  }

  return { listMessage, clearList, prompt, setPrompt, onSubmit }

}

