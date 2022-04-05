import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useRequestData(url) {
  const [data, setData] = useState(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setIsLoading(true)
    axios
      .get(url)
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        setError(err)
        setIsLoading(false)
      })
  }, [url])

  return [data, isLoading, error]
}
