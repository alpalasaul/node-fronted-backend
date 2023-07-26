const URL = 'https://abe9-181-199-38-143.ngrok-free.app'

export const inferenceApi = async ({ data }) => {
  try {
    const response = await fetch(`${URL}/inference`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: data
    })
    const json = await response.json()
    console.log(json)
    return json
  } catch (error) {
    console.log('Error al obtener la respuesta de la API usando LangChain')
  }
}