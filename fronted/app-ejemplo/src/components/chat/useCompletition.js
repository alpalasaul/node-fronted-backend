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
          prompt: prompt,
          max_tokens: 50,
          model: 'text-davinci-003',
          temperature: 0,
          n: 1,
          // stop: ".",
        })
      }
    )
    const data = await response.json()
    setListMessage((prevValues) => [...prevValues, { id: prevValues.length, prompt: prompt,  message: data.choices[0].text.replace(/(\r\n|\n|\r)/gm, "") }])
    setPrompt('')
  }

  const clearList = () => {
    setListMessage([])
  }

  return { listMessage, clearList, prompt, setPrompt, onSubmit }

}

