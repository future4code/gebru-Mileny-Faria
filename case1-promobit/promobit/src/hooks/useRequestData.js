import { useEffect, useState } from 'react'
import axios from 'axios'

export const useRequestData = (initialState, url) => {
  const [data, setData] = useState(initialState)

  useEffect(() => {
    getData()

  }, [url])

  const getData = () => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
        alert('Ocorreu um erro, tente novamente')
      })
  }

  return [data]
}
