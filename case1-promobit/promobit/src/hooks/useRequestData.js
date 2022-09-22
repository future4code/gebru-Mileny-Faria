import { useEffect, useState } from 'react'
import axios from 'axios'

export const useRequestData = (initialState, url) => {
  const [ data, setData ] = useState(initialState)
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    getData()

  }, [url])

  const getData = () => {
    setIsLoading(true)

    axios
      .get(url)
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
        alert('Ocorreu um erro, tente novamente')
      })
  }

  return [ data, isLoading ]
}
