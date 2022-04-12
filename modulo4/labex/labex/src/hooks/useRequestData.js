import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/url";
import axios from "axios";
import Swal from "sweetalert2";

export const useRequestData = (url, initialState) => {
  const [ data, setData ] = useState(initialState)
  const [ isLoading, setIsLoading ] = useState(false)

  useEffect(() => {
    getData()

  }, [url])

  const getData = () => {
    setIsLoading(true)
    const headers = {
      headers: {
        auth: localStorage.getItem("token")
      }
    }

    axios
      .get(`${BASE_URL}${url}`, headers)
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        Swal.fire("Deu erro!")
      })
  }

  return [data, getData, isLoading]
  
}

