import { useState } from 'react'
import { completionApi } from '../service/completionApi'

export function useCompletion() {
  const [prompt, setPrompt] = useState('')
  const [listMessage, setListMessage] = useState([])

  const onSubmit = async () => {
    setListMessage((prevValues) => [
      ...prevValues,
      {
        id: prevValues.length,
        prompt: prompt,
        numTokens: 0,
        message: '',
        loading: true
      }
    ])
    
    setPrompt('')

    const { message, numTokens } = await completionApi({ prompt })

    setListMessage((prevValues) =>
      prevValues.map((item) => {
        if (item.prompt === prompt) {
          return {
            ...item,
            numTokens: numTokens,
            message: message,
            loading: false
          }
        }
        return item
      })
    )
    
  }

  const clearList = () => {
    setListMessage([])
  }

  return { listMessage, prompt, setPrompt, clearList, onSubmit }

}